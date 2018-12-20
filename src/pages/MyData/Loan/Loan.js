import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

class Loan extends Component {
    static navigationOptions = {
        title: 'My Data Loan',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loan</Text>
            </View>
        );
    }
};

export default Loan;