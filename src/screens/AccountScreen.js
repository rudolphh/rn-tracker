import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
    const { signOutUser } = useContext(AuthContext);
    return (
        <View>
            <Button ti />
        </View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})
