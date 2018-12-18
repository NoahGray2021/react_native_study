import React, { Component } from 'react';
import { View } from 'react-native';

export default class AboutScreen extends Component {
    static navigationOptions = {
        title: 'WELCOME ABOUT',
    };
    render () {
        const {navigate} = this.props.navigation;
        <View>
            About Screen
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        </View>
    }
}

