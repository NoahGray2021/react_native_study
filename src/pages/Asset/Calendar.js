import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

class calendar extends Component {
    static navigationOptions = {
        title: 'calendar',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Calendar
                    current={'2018-12-27'}
                    
                />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default calendar;