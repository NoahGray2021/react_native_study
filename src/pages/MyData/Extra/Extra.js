import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class Extra extends Component {
    static navigationOptions = {
        title: 'My Data Extra',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Extra</Text>
            </View>
        );
    }
};

export default Extra;