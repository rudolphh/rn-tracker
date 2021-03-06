import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255, 1.0)"
          fillColor="rgba(158,158,255, 0.3)"
        />
        <Polyline
          coordinates={locations.map((loc) => loc.coords)}
          strokeWidth={5}
          lineDashPattern={[20, 5]}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  map: {
    height: 300,
  },
});
