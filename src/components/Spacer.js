import React from 'react'
import { StyleSheet, View } from 'react-native'

const Spacer = ({ children }) => {
    return (
        <View style={styles.spacer}>{children}</View>
    )
}

export default Spacer

const styles = StyleSheet.create({
    spacer: {
        marginHorizontal: 20,
        alignSelf: 'stretch'
    }
})
