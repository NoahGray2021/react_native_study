import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AccounterCard from './AccounterCard';


class PlatformHome extends Component {
    static navigationOptions = {
        title: 'Platform Index',
    };

    onButtonPress() {
        this.props.navigation.navigate('ExpertDetail');
        console.log('clicked');
    }

    render() {
        const { container, searchBox, searchInput } = styles;

        return (
            <View style={ container }>
                <View style={ searchBox }>
                    <TextInput 
                        placeholder='search' 
                        style={ searchInput }
                    />
                </View>
                <AccounterCard 
                    onPress={this.onButtonPress.bind(this)} 
                    name="겨레겨레"
                />
                <AccounterCard 
                    onPress={this.onButtonPress.bind(this)} 
                    name="지윤지윤"
                />
                <AccounterCard 
                    onPress={this.onButtonPress.bind(this)} 
                    name="치완치완"
                />                
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 16
    },
    searchBox: {
        flex: 0.2,
        marginBottom: 20
    },
    searchInput: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }

})

export default PlatformHome;