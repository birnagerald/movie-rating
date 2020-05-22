import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { fakeDataMovie } from '../config/FakeData'
import { MovieContext, MovieProvider } from '../hooks/MovieProvider'

export default function MovieList({props, navigation}) {

  const displayDetailForMovie = (movie) => {
    navigation.navigate('MovieDetails', {movie: movie});
  }


  return (
    <MovieContext.Consumer>

      {

        movie =>
          <View style={styles.container}>
            <ScrollView>
              {movie.movies.map((movie, index) =>
                <TouchableOpacity key={index} style={styles.listMovie} onPress={() => displayDetailForMovie(movie)}>
                  <Text >{movie.title}</Text>
                  <Text >{movie.description}</Text>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
      }

    </MovieContext.Consumer>
  );
}

MovieList.navigationOptions = {
  header: null,
};



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
