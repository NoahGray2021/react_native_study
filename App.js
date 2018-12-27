import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { 
  createAppContainer, 
  createStackNavigator, 
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
  AsyncStorage,
} from 'react-navigation'; // Version can be specified in package.json

import AuthLoadingScreen from './src/pages/Auth/AuthLoadingScreen';

import SignUp from './src/pages/Auth/SignUp';
import SignIn from './src/pages/Auth/SignIn';
import Oauth from './src/pages/Auth/Oauth';
import SimplePassword from './src/pages/Auth/SimplePassword';
import SimplePasswordConfirm from './src/pages/Auth/SimplePasswordConfirm';

import NiceToMeetYou from './src/pages/Onboarding/NiceToMeetYou';

// Main menu 1: 마이데이터 
import MyData from './src/pages/MyData/MyData';

// Main menu 2: 자산관리 / 가계부
import Asset from './src/pages/Asset/Asset';

import ExpertDetail from './src/pages/Curation/ExpertDetail';

import Solution from './src/pages/Solution/SolutionHome';
import CurationHome from './src/pages/Curation/CurationHome';

import ServiceIndex from './src/pages/Service/ServiceIndex';

class InitialScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>MyD</Text>
        </View>
        <TextInput style={styles.inputStyle} placeholder='ID' />
        <TextInput style={styles.inputStyle} placeholder='Password' />        
        <Button title="로그인" onPress={() => this.props.navigation.navigate('MyDataIndex')} />
        <Button title="가입하기" onPress={() => this.props.navigation.navigate('SignUp')} />
        <Button title="비회원으로 이용하기" onPress={() => this.props.navigation.navigate('MyDataIndex')} />
      </View>
    );
  }
  
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    height: 200
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: 250,
    height: 40,
    padding: 5,
    paddingLeft: 10,
    marginBottom: 5
  }
})

// const Intro = createStackNavigator({
//   Initial: InitialScreen,
//   SignIn: SignIn,
//   SignUp: SignUp,
// }, {
//   initialRouteName: 'Initial',
//   headerMode: 'none'
// });


const Curation = createStackNavigator({
  CurationHome: CurationHome,
  ExpertDetail: ExpertDetail,
}, {
  initialRouteName: "CurationHome",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'pink'
    }
  }
});

// const Service = () => {
//   console.log(this.props)
//   return(
//     <Button title="Service" onPress="MyData" />
//   )
// }

const Service = createStackNavigator({
  ServiceIndex
})

const AppStack = createBottomTabNavigator(
  {
    MyData,
    Asset,
    Solution,
    Curation,
    Service,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

const AuthStack = createStackNavigator({
  Initial: InitialScreen,
  SignIn: SignIn,
  SignUp: SignUp,
  Oauth: Oauth,
  SimplePassword: SimplePassword,
  SimplePasswordConfirm: SimplePasswordConfirm,
  NiceToMeetYou: NiceToMeetYou,
}, {
  initialRouteName: 'Initial',
  headerMode: 'none'
})

export default createAppContainer(createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none'
  }
));