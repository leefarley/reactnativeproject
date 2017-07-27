import { StackNavigator } from 'react-navigation';

import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';

const appContainer = StackNavigator({
	Home: { screen: HomePage },
	Movies: { screen: MovieListPage }
});

export default appContainer;
