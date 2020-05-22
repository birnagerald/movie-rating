import React from 'react';
import { ThemeProvider } from '@react-navigation/native';
import { fakeDataMovie } from '../config/FakeData'
const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {

    var newMovie = {
        title: "",
        description: "",
        rating: 0
    }

    const [movies, setMovies] = React.useState(fakeDataMovie.movies);

    const addMovieHandler = () => {
        newMovie.title = enteredMovieTitle;
        newMovie.description = enteredMovieDescription;
        setMovies(currentMovies => [...currentMovies, newMovie]);

    }


    const [enteredMovieTitle, setEnteredMovieTitle] = React.useState("");
    const [enteredMovieDescription, setEnteredMovieDescription] = React.useState("");

    const movieInputTitleHandler = (enteredTitle) => {
        setEnteredMovieTitle(enteredTitle);

    }

    const movieInputDescriptionHandler = (enteredDescription) => {
        setEnteredMovieDescription(enteredDescription);

    }

    var enteredTitle;
    var enteredDescription;
    return (
        <MovieContext.Provider value={{
            movies: movies,
            setMovie: setMovies,
            addMovie: addMovieHandler,
            enteredTitle: enteredTitle,
            enteredDescription: enteredDescription,
            titleMovieHandler: movieInputTitleHandler,
            descriptionMovieHandler: movieInputDescriptionHandler
        }}>
            {children}
        </MovieContext.Provider>

    );

}

export { MovieProvider, MovieContext };