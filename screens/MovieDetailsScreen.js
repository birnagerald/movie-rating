import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MovieDetailsScreen({ route }) {

    return (
        <View style={styles.container}>
            <Text >{route.params.movie.title}</Text>
            <Text >{route.params.movie.description}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    listMovie: {
        backgroundColor: '#e8e8e8',
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
    },
    container: {

        padding: 30
    },
});


