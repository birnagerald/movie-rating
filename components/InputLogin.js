import React from 'react';

import { View, StyleSheet, TextInput } from 'react-native';

export function InputLogin({ style, ...props }) {
    return (
        <TextInput {...props} style={[styles.inputLogin, style]} />

    )
}

const styles = StyleSheet.create({
    inputLogin: {
        backgroundColor: '#e8e8e8',
        width: '100%',
        padding: 20,

    }
})