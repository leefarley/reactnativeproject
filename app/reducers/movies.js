import createReducer from '../lib/createReducer';
import * as types from '../actions/types';


export const searchedMovies = createReducer({ movies: [], isLoading: false },
	{
		[types.SET_SEARCHED_MOVIES](state, action){
			return {
				movies: action.searchedMovies, isLoading: false };
		},
		[types.IS_LOADING](state, action) {
				return { ...state, isLoading: true};
		}
	});

export const addMovie = createReducer({ movieCount: 0 },
{
	[types.ADD_MOVIE](state, action){
		return Object.assign({}, state, { movieCount: ++state.movieCount} ); 
	} 
});

