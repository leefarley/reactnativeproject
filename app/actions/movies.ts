import * as types from './types';
import _ from 'lodash';

export function addMovie() {
	return { type: types.ADD_MOVIE };
}

function setSearchedMovies(movies) {
	return {
		type: types.SET_SEARCHED_MOVIES,
		searchedMovies: movies
	};
}

function isLoading() {
	return { type: types.IS_LOADING };
}

export function searchMovies() {
	return (dispatch) => {
		dispatch(isLoading());
		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				if (_.isArray(responseJson.movies)) {
					dispatch(setSearchedMovies(responseJson.movies));
				}
			});
		};
}
