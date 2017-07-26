import React from 'react';
import { AppRegistry, View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';


class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};
	render() {
		return (
			<View>
				<Text>Hello, Chat App!</Text>
				<Button
					onPress={() => this.props.navigation.navigate('Chat', { user: 'Bill' })}
					title="Chat with Lucy"
				/>
			</View>
		);
	}
}

class ChatScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerRight: <Button title="info" style={{ margin: 5 }} onPress={() => { }} />,
		title: `Chat with ${navigation.state.params.user}`
	});
	render() {
		return (
			<View>
				<Text>Chat with {this.props.navigation.state.params.user}</Text>
			</View>
		);
	}
}
class RecentChatsScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>List of recent chats</Text>
				<Button
					onPress={() => this.props.navigation.navigate('Chat', { user: 'Bill' })}
					title="Chat with Bill" />
			</View>)
	}
}

class AllContactsScreen extends React.Component {
	render() {
		return (
			<View>
				<Text>List of all contacts</Text>

				<Button
					onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
					title="Chat with Lucy"
				/>
			</View>)
	}
}

const MainScreenNavigator = TabNavigator({
	Recent: { screen: RecentChatsScreen },
	All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
	title: 'My Chats',
};

const SimpleApp = StackNavigator({
	Home: { screen: MainScreenNavigator },
	Chat: { screen: ChatScreen }
});

AppRegistry.registerComponent('ReactNativeProject', () => SimpleApp);
