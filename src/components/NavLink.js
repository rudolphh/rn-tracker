import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity
      style={{ padding: 20 }}
      onPress={() => navigation.navigate(routeName)}
    >
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    color: "cornflowerblue",
    fontSize: 16,
  },
});
