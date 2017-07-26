import React from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, Button } from 'react-native';

import ActionsCreators from '../../actions/index';

class HomePage extends React.Component {
	static navigationOptions = {
		title: 'Home'
	};

	addMovie() {
		this.props.actions.addMovie();
	}

	render() {
		return (
			<View>
				<Text>Hello, This is the home page!</Text>
				<Text>Movie Count: { this.props.data.movieCount }</Text>
				<View style={{ padding: 10, alignItems: 'center' }}>
					<Button
						onPress={() => this.addMovie() }
						title="Add Movie" />
				</View>	
				<View style={{ padding: 10, alignItems: 'center' }}>
					<Button
						onPress={() => this.props.navigation.navigate('Movies')} 
						title="Go to Movies page" />
				</View>	
			</View>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(ActionsCreators, dispatch) };
}
function mapStateToProps(state) {
	return { data: { movieCount: state.addMovie.movieCount }}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
