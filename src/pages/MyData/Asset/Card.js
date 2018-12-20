import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Card extends Component {
    static navigationOptions = {
        title: 'Card',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>My Data > Asset: Card</Text>
            </View>
        );
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