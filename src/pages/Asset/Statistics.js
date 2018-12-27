import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Statistics extends Component {
    static navigationOptions = {
        title: 'Statistics',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>Statistics</Text>
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

export default Statistics;