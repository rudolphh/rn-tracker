import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          inputStyle={{ marginTop: 20 }}
          value={name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button buttonStyle={{ backgroundColor: 'red'}} title="Stop" onPress={stopRecording} />
        ) : (
          <Button buttonStyle={{ backgroundColor: 'green'}} title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      <Spacer style={{ marginTop: 200 }}>
        {!recording && locations.length ? (
          <Button title="Save" onPress={() => saveTrack(name, locations)} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
