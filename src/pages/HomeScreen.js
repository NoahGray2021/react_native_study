import React, { Component } from 'react';
import { View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'wELCOME!',
    };
    render () {
        const {navigate} = this.props.navigation;
        <View>
            Home Screen
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        </View>
    }   
}

