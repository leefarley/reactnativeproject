import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedMovies = createReducer({ movies: [], isLoading: false },
	{
		[types.SEARCHED_MOVIES_SUCCESS](state, action) {
			return {...state, movies: action.searchedMovies, isLoading: false };
		},
		[types.SEARCHED_MOVIES_REQUEST](state) {
				return { ...state, isLoading: true };
		}
	});

export const addMovie = createReducer({ movieCount: 0 },
{
	[types.ADD_MOVIE](state) {
		return { ...state, movieCount: ++state.movieCount };
	}
});
