import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class CurationSecondPage extends Component {
    static navigationOptions = {
        title: 'Curation Second Page'
    };

    render() {
        return (
            <View>
                <Text>Curation Second Page</Text>
                <Button
                    title="Go Back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button 
                    title="My Data"
                    onPress={() => this.props.navigation.navigate('MyData')}
                />
            </View>
        )
    }
}

export default CurationSecondPage;