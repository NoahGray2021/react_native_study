import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class PlatformIndex extends React.Component {
    static navigationOptions = {
        title: 'Platform Index',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Platform Index Page</Text>
                <Button 
                    title='second page'
                    onPress={() => this.props.navigation.navigate('PlatformSecond')}
                />
            </View>
        )
    }
};

export default PlatformIndex;