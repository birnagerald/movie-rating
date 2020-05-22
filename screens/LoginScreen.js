import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Heading } from '../components/Heading';
import { InputLogin } from '../components/InputLogin';
import ButtonLogin from '../components/ButtonLogin';
import { Error } from '../components/Error';
import { fakeDataUser } from '../config/FakeData'

export default function LoginScreen({ navigation }) {

    const [enteredUsername, setEnteredUsername] = React.useState('');
    const [enteredPassword, setEnteredPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const usernameInputHandler = (enteredUsername) => {
        setEnteredUsername(enteredUsername);

    }

    const passwordInputHandler = (enteredPassword) => {
        setEnteredPassword(enteredPassword);

    }

    const checkCredentials = () => {
        if (enteredUsername === fakeDataUser.user.username && enteredPassword === fakeDataUser.user.password) {
            navigation.navigate('RootStack')
        } else {
            setError('Wrong Credentials');
        }

    }

    return (
        <View style={styles.container}>
            <Heading style={styles.title}>
                Login
            </Heading>
            <Error error={error} />
            <InputLogin
                style={styles.inputLogin}
                placeholder={'username'}
                onChangeText={usernameInputHandler}
                value={enteredUsername} />
            <InputLogin
                style={styles.inputLogin}
                placeholder={'password'}
                secureTextEntry
                onChangeText={passwordInputHandler}
                value={enteredPassword} />
            <ButtonLogin title={'Login'} style={styles.buttonLogin} onPress={checkCredentials} />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 120,
        padding: 20,
        backgroundColor: 'white'

    },
    inputLogin: {
        marginVertical: 8
    },
    title: {
        marginBottom: 48
    },
    buttonLogin: {
        marginVertical: 32
    }
})