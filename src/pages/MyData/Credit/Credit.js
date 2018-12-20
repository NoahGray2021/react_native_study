import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Credit extends Component {
    static navigationOptions = {
        title: 'My Data Credit',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Credit</Text>
            </View>
        );
    }
};

export default Credit;