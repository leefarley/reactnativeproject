import React from 'React';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, ActivityIndicator, TouchableHighlight } from 'react-native';

import ActionsCreators from '../../actions/index';

interface IMovie {
	title: string;
	releaseYear: number;
}
interface Actions {
	searchMovies(): void;
}
interface Data {
	movies: IMovie[];
	isLoading: boolean;
}
interface Props {
	actions: Actions;
	data: Data;
}

interface State {
	input: string;
}

class MovieListPage extends React.Component<Props, State> {
	static navigationOptions = {
		title: 'Movies'
	};

	constructor(props: Props) {
		super(props);
		this.state = { input: '' };
	}

	componentWillMount() {
		this.searchMovies();
	}

	searchMovies() {
		this.props.actions.searchMovies();
	}

	render() {

		let movieList = this.props.data.movies
			.map((movie) =>
			<View key={movie.title}
				style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
				<Text>{movie.title} ({movie.releaseYear})</Text>
			</View>);

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
				);
		}

		return(
			<View>
				<View>
					<TextInput onChangeText={(text) => this.setState({input: text})} style={{flex: 8}} value={ this.state.input } />
					<TouchableHighlight onPress={ () => this.searchMovies() }  disabled={ this.props.data.isLoading }>
						<View style={{flex: 2}}>
							<Text>Search</Text>
						</View>
					</TouchableHighlight>
				</View>
				{ view }
			</View>
);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			searchMovies: () => dispatch(ActionsCreators.searchMovies())
		} as Actions
	};
}

function mapStateToProps(state) {
	return { data:
		{
			movies: state.searchedMovies.movies,
			isLoading: state.searchedMovies.isLoading
		} as Data
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListPage);
