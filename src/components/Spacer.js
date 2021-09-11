import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer = ({ children, style }) => {
    return (
        <View style={[styles.spacer, style]}>{children}</View>
    )
}

export default Spacer

const styles = StyleSheet.create({
    spacer: {
        marginHorizontal: 20,
        alignSelf: 'stretch'
    }
})
