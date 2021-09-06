import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignUpScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />

      <Button title="Go to Main Flow" onPress={() => { navigation.navigate('mainFlow')}} />
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
