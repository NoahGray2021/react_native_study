import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AccounterCard from './AccounterCard';


class CurationHome extends Component {
    static navigationOptions = {
        title: 'Curation Index',
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
                <TouchableOpacity style={{ position: 'absolute', width: 50, height: 50, backgroundColor: "blue", right: 20, bottom: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                    <Text style={{ color: '#fff', fontSize: 40}}>?</Text>
                </TouchableOpacity>             
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

export default CurationHome;