import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Report extends Component {
    static navigationOptions = {
        title: 'Report',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>Report</Text>
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

export default Report;