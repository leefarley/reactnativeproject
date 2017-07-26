import { StackNavigator } from 'react-navigation';

import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';

const AppContainer = StackNavigator({
	Home: { screen: HomePage },
	Movies: { screen: MovieListPage }
});

export default AppContainer;
