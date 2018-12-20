import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';

class ChatBot extends Component {
    static navigationOptions = {
        headerTitle: 'Chat Bot',
    }

    render() {
        return (
            <View>
                <Text>
                    Chat Bot
                </Text>
            </View>
        )
    }
}

export default ChatBot;