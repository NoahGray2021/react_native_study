import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class ServiceIndex extends Component {
    
    render() {
        const { navigate } =  this.props.navigation;
        const { container, serviceList, serviceItem, textStyle } = styles;

        return (
            <View style={ container }>
                <Text>Service Modal</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
                <View style={ serviceList }>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('MyData')}>
                        <Text style={ textStyle }>My Data</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('Guide')}>
                        <Text style={ textStyle }>Guide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('Platform')}>
                        <Text style={ textStyle }>Platform</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('Curation')}>
                        <Text style={ textStyle }>Curation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('')}>
                        <Text style={ textStyle }>Something</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('')}>
                        <Text style={ textStyle }>Something</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('')}>
                        <Text style={ textStyle }>Something</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('')}>
                        <Text style={ textStyle }>Something</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ serviceItem } onPress={() => navigate('')}>
                        <Text style={ textStyle }>Something</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 80,
        padding: 40,
    },
    serviceList: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    serviceItem: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 3,
        margin: 15,
        justifyContent: 'center',
    },
    textStyle: {
        alignSelf: 'center',
    }

})

export default ServiceIndex;