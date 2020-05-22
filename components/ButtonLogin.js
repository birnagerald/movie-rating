import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


export default function ButtonLogin({ title, style, onPress }) {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,

    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})