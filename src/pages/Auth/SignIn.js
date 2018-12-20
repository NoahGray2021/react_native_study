import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Sign In',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Sign In Page</Text>
                <Button 
                    title='second page'
                    onPress={() => this.props.navigation.navigate('PlatformSecond')}
                />
            </View>
        )
    }
};

export default SignIn;