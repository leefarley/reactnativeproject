import * as types from './types';
// import _ from 'lodash';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';

export function addMovie() {
	return { type: types.ADD_MOVIE };
}

function searchedMoviesSuccess(movies) {
	return {
		type: types.SEARCHED_MOVIES_SUCCESS,
		searchedMovies: movies
	};
}

function isLoading() {
	return { type: types.SEARCHED_MOVIES_REQUEST };
}

export function searchMovies() {
	return (dispatch) => {
		dispatch(isLoading());
	};
}

interface IMovie {
	name: string;
	releaseYear: string;
}
interface IMovieResponse {
	movies: IMovie[];
}

export const fetchMoviesEpic = action$ =>
	action$.ofType(types.SEARCHED_MOVIES_REQUEST)
		.mergeMap(() =>
			Observable.ajax.getJSON<IMovieResponse>(`https://facebook.github.io/react-native/movies.json`)
				.map(response => searchedMoviesSuccess(response.movies))
);
