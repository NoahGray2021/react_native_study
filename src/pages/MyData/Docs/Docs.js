import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class Docs extends Component {
    static navigationOptions = {
        title: 'My Data Docs',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Docs</Text>
            </View>
        );
    }
};

export default Docs;