import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Loan extends Component {
    static navigationOptions = {
        title: 'Loan',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>My Data > Asset: Loan</Text>
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

export default Loan;