import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { 
  createAppContainer, 
  createStackNavigator, 
  StackActions, 
  NavigationActions, 
  createBottomTabNavigator,
} from 'react-navigation'; // Version can be specified in package.json

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./resources/home-icon.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button 
          onPress={() => alert('This is a menu list')}
          title="Menu"
          color="black"
        />
      ),
      headerLeft: (
        <Button 
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="#fff"
        />
      ),
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>HeaderLeft Count: {this.state.count}</Text>
        <Button
          title="Go to Details 1 - This cannot get params and back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ 
                  routeName: 'Details',
                  itemId: 86,
                  otherParam: 'Parameter for Detail Screen',
                })
              ],
            }))
          }}
        />
        <Button 
          title="Go to Details 2 - This working programmatically"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: 77,
              otherParam: 'Parameter 2',
            })
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen')
    };
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const itemId2 = this.props.itemId;
    const otherParam2 = this.props.otherParam;
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>item Id: {JSON.stringify(itemId)} {itemId2}</Text>
        <Text>other Param: {JSON.stringify(otherParam)} {otherParam2}</Text>

        <Button 
          title="Go back to the Home"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ 
                  routeName: 'Home', 
                  itemId: Math.floor(Math.random() * 100),
                })
              ],
            }))
          }}
        />
        <Button 
          title="Go back by programmatically"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button 
          title="Go to the First Screen"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button 
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ otherParam: 'Updated'})}
        />
        <Button 
          onPress={() => navigation.navigate('MyModal')}
          title="Modal"
          color="orange"
        />
        <Button 
          onPress={() => navigation.navigate('SettingsScreen')}
          title="setting screen"
        />
      </View>
    );
  }  
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    )
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>
          This is a modal
        </Text>
        <Button 
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'orange',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: '100'
      }
    }
});

const SecondNavigator = createStackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
  },
})

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     Settings: SettingsScreen,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { Home } = navigation.state;
//         let ... refer to the tutorial
//       })
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// );

export default createAppContainer(createBottomTabNavigator({
  RootStack,
  SecondNavigator,
}));