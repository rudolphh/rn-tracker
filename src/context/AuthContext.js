import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackServer from "../api/trackServer";
import { navigate } from "../navigationRef";

const reducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { token: action.payload, errorMessage: "" };

    case "login_user":
      return state;

    case "error":
      return { ...state, errorMessage: action.payload };

    case "clear_error_message":
      return { ...state, errorMessage: "" };

    case "signout":
      return { token: null, errorMessage: "" };

    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else navigate("loginFlow");
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const registerUser = (dispatch) => async (email, password) => {
  try {
    const response = await trackServer.post("/auth/register", {
      email,
      password,
    });
    const { data } = response.data;

    await AsyncStorage.setItem("token", data.token);
    dispatch({ type: "signin", payload: data.token });

    navigate("TrackList");
  } catch (err) {
    console.error(err);
    dispatch({ type: "error", payload: "Email already exists" });
  }
};

const loginUser = (dispatch) => async (email, password) => {
  try {
    const response = await trackServer.post("/auth/login", { email, password });
    const { data } = response.data;

    await AsyncStorage.setItem("token", data.token);
    dispatch({ type: "signin", payload: data.token });
    console.log(data.token);
    navigate("TrackList");
  } catch (err) {
    dispatch({ type: "error", payload: "Invalid email or password" });
  }
};

const signOutUser = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: "signout"});
    navigate("Signin");
};

export const { Provider, Context } = createDataContext(
  reducer,
  { registerUser, loginUser, signOutUser, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
