import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import SafeAreaViewer from "../components/SafeAreaViewer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signOutUser } = useContext(AuthContext);
  return (
    <SafeAreaViewer>
      <Text style={{ fontSize: 24 }}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signOutUser} />
      </Spacer>
    </SafeAreaViewer>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});
