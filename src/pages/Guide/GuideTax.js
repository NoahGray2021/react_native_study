import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class GuideTax extends Component {
    static navigationOptions = {
        title: 'GuideTax',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>GuideTax</Text>
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

export default GuideTax;