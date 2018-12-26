import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Drive extends Component {
    static navigationOptions = {
        title: 'Drive',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>Drive</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default Drive;