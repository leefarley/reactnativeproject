import React from 'React';
import { connect } from 'react-redux';
import { View, Text, Button, ScrollView, ActivityIndicator } from 'react-native';

import ActionsCreators from '../../actions/index';

class MovieListPage extends React.Component{
	static navigationOptions = {
		title: 'Movies'
	};

	componentWillMount() {
		this.searchMovies();
	}

	searchMovies() {
		this.props.actions.searchMovies();
	}

	render() {

		let movieList = this.props.data.movies
			.map((movie) => <View key={movie.title} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}><Text>{movie.title} ({movie.releaseYear})</Text></View>)

		let view;
		if (this.props.data.isLoading) {
			view = (
				<View style={{ flex: 1, paddingTop: 40 }}>
					<ActivityIndicator />
				</View>
			);
		} else {
			view = (
					<ScrollView>
						{movieList}
					</ScrollView>
				)
		}

		return(
			<View>
				<View>
					<Button onPress={ () => this.searchMovies() } title="refresh" disabled={ this.props.data.isLoading }/>
				</View>
				{ view }
			</View>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return { 
		actions: {
			searchMovies: () => dispatch(ActionsCreators.searchMovies()) 
		}
	}
}

function mapStateToProps(state) {
	return { data: { movies: state.searchedMovies.movies, isLoading: state.searchedMovies.isLoading } }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListPage);
