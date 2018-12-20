import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class MyDataIndex extends Component {
    static navigationOptions = {
        title: 'MyData Index',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MyData Index Page</Text>
                <Button title='second page' onPress={() => this.props.navigation.navigate('CurationSecond')} />
                <Button title="Sign Out" onPress={this._signOutAsync} />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
};

export default MyDataIndex;