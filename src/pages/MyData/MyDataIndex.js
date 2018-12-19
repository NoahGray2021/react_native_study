import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MyDataIndex extends React.Component {
    static navigationOptions = {
        title: 'MyData Index',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MyData Index Page</Text>
                <Button 
                    title='second page'
                    onPress={() => this.props.navigation.navigate('CurationSecond')}
                />
            </View>
        )
    }
};

export default MyDataIndex;