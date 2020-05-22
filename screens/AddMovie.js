import * as React from 'react';
import { StyleSheet, View, Button, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { MovieContext } from '../hooks/MovieProvider'

export default function addMovie({ navigation }) {

  return (
    <MovieContext.Consumer>

      {

        movie =>

          <View style={styles.container}>
            <TextInput
              placeholder="Movie Title"
              style={styles.input}
              onChangeText={movie.titleMovieHandler}
              value={movie.enteredTitle}
            />
            <TextInput
              placeholder="Movie Description"
              style={styles.input}
              onChangeText={movie.descriptionMovieHandler}
              value={movie.enteredDescription}
            />
            <Button title="ADD" onPress={() => {
              movie.addMovie();
              navigation.navigate('Movies');
            }} />
          </View>
      }
    </MovieContext.Consumer>

  );
}


const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  input: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
  }

});
