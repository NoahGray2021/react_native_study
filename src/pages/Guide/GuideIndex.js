import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import GuideSecondPage from './GuideSecondPage';

class GuideIndex extends React.Component {
    static navigationOptions = {
        title: 'Guide Index',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Guide Index Page</Text>
                <Button 
                    title='second page'
                    onPress={() => this.props.navigation.navigate('GuideSecond')}
                />
            </View>
        )
    }
};



// const GuideNavigator = createStackNavigator({
//     Index: {
//         screen: GuideIndex,
//     },
//     Second: {
//         screen: GuideSecondPage,
//     }
// }, {
//     initialRouteName: 'Index',
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: 'pink',
//         },
//         headerTintColor: 'black',
//         headerTitleStyle: {
//             fontWeight: '500'
//         }
//     }
// }, {
//     headerMode: 'float',
// });

// export default createAppContainer(GuideNavigator);
export default GuideIndex;