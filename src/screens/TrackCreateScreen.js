//import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import SafeAreaViewer from "../components/SafeAreaViewer";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaViewer>
      <Text h4 style={{ alignSelf: "center", marginVertical: 20 }}>
        Create a Track
      </Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaViewer>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
