import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class PlatformSecondPage extends Component {
    static navigationOptions = {
        title: 'Guide Second Page'
    };

    render() {
        return (
            <View>
                <Text>Platform Second Page</Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button 
                    title="My Data"
                    onPress={() => this.props.navigation.navigate('MyData')}
                />
            </View>
        )
    }
}

export default PlatformSecondPage;