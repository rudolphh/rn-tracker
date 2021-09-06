import React from 'react'
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {
    return (
        <>
            <Text>TrackListScreen</Text>
            <Button title="Go to Track Detail" onPress={() => {
                navigation.navigate('TrackDetail');
            }}/>
        </>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
