import React from 'React';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import ActionsCreators from '../../actions/index';
import * as nav from 'react-navigation';

interface Actions {
	addMovie(): void;
}
interface Data {
	movieCount: number;
}
interface Props {
	actions: Actions;
	data: Data;
	navigation: nav.NavigationScreenProp<nav.NavigationRoute<string>, nav.NavigationAction>;
}

class HomePage extends React.Component<Props> {
	static navigationOptions = {
		title: 'Home'
	};

	addMovie() {
		this.props.actions.addMovie();
	}

	render() {
		return (
			<View>
				<Text>Hello, This is the home page maybe!</Text>
				<Text>Movie Count: { this.props.data.movieCount }</Text>
				<View style={{ padding: 10, alignItems: 'center' }}>
					<Button
						onPress={() => this.addMovie() }
						title='Add Movie' />
				</View>
				<View style={{ padding: 10, alignItems: 'center' }}>
					<Button
						onPress={() => this.props.navigation.navigate('Movies') }
						title='Go to Movies page' />
				</View>
			</View>);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: {
			addMovie: () => dispatch(ActionsCreators.addMovie())
		} as Actions
		};
}
function mapStateToProps(state) {
	return { data:
		{
			movieCount: state.addMovie.movieCount
		} as Data
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
