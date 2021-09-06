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
        marginVertical: 10,
        marginHorizontal: 20,
        width: '80%'
    }
})
