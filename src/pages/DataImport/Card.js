import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Card extends Component {
    static navigationOptions = {
        title: 'Card',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>Card</Text>
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

export default Card;