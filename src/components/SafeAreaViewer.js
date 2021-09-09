import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const SafeAreaViewer = ({ children }) => {
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
