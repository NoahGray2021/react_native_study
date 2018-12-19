import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class CurationIndex extends React.Component {
    static navigationOptions = {
        title: 'Curation Index',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Curation Index Page</Text>
                <Button 
                    title='second page'
                    onPress={() => this.props.navigation.navigate('CurationSecond')}
                />
            </View>
        )
    }
};

export default CurationIndex;