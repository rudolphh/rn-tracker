import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={styles.heading}>
          {headerText}
        </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </Spacer>
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit(email, password)} />
      </Spacer>

    </>
  );
};

AuthForm.defaultProps = {
  initialValues: {
    title: "Sign Up for Tracker",
    email: "",
  },
};

export default AuthForm;

const styles = StyleSheet.create({

  heading: {
    alignSelf: "center",
    marginBottom: 20,
  },
  errorMessage: {
      fontSize: 16,
      color: 'red',
      alignSelf: 'center'
  },

});
