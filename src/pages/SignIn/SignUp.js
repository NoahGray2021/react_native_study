import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SignUp extends React.Component {
    static navigationOptions = {
        title: 'Sign Up',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Sign Up Page</Text>
                <Button 
                    title='second page'
                    onPress={() => this.props.navigation.navigate('PlatformSecond')}
                />
            </View>
        )
    }
};

export default SignUp;