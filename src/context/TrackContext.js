import createDataContext from "./createDataContext";
import trackServer from "../api/trackServer";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await trackServer.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await trackServer.post("/tracks", { name, locations });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
