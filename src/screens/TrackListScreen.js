import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const TrackListScreen = ({ navigation }) => {
    const { state } =  useContext(AuthContext);

    return (
        <>
            <Text>{state.email}</Text>
            <Button title="Go to Track Detail" onPress={() => {
                navigation.navigate('TrackDetail');
            }}/>
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
