import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AccounterCard = ({ onPress, name, children }) => {
    const { container, leftSide, rightSide, photo } = styles;

    return (
        <TouchableOpacity style={ container } onPress={ onPress }>
            <View style={ leftSide }>
                <View style={ photo }>
                    <Text>Photo</Text>
                </View>
                <View>
                    <Text>견적 알아보기</Text>
                </View>
            </View>
            <View style={ rightSide }>
                <View></View>
                <View>
                    <Text>{name} 세무사</Text>
                </View>
                <View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {x: 0, y: 5},
        padding: 10
    },
    leftSide: {
        color: 'blue'
    },
    rightSide: {
        color: 'brown'
    },
    photo: {
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        borderRadius: 50,
    }
})

export default AccounterCard;