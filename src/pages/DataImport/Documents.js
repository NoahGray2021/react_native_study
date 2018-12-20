import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Documents extends Component {
    static navigationOptions = {
        title: 'Documents',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>My Data > Asset: Documents</Text>
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

export default Documents;