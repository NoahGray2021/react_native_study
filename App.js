import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { 
  createAppContainer, 
  createStackNavigator, 
  createBottomTabNavigator,
} from 'react-navigation'; // Version can be specified in package.json

import SignUp from './src/pages/SignIn/SignUp';
import SignIn from './src/pages/SignIn/SignIn';

import MyDataIndex from './src/pages/MyData/MyDataIndex';

import PlatformIndex from './src/pages/Platform/PlatformIndex';
import PlatformSecondPage from './src/pages/Platform/PlatformSecondPage';

import GuideIndex from './src/pages/Guide/GuideIndex';
import CurationIndex from './src/pages/Curation/CurationIndex';
import GuideSecondPage from './src/pages/Guide/GuideSecondPage';
import CurationSecondPage from './src/pages/Curation/CurationSecondPage';

class InitialScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'MyD',
      headerRight: (
        <Button 
          onPress={() => alert('This is a menu list')}
          title="?"
          color="black"
        />
      ),
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.title}>MyD</Text>
        </View>
        <TextInput 
          style={styles.inputStyle}
          placeholder='ID'
        />
        <TextInput 
          style={styles.inputStyle}
          placeholder='Password'
        />        
        <Button 
          title="로그인"
          onPress={() => this.props.navigation.navigate('MyDataIndex')}
        />
        <Button 
          title="가입하기"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Button
          title="비회원으로 이용하기"
          onPress={() => this.props.navigation.navigate('MyDataIndex')}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
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

const Intro = createStackNavigator({
  Initial: InitialScreen,
  SignIn: SignIn,
  SignUp: SignUp,
}, {
  initialRouteName: 'Initial',
  headerMode: 'none'
});

const MyData = createStackNavigator({
  Initial: Intro,
  MyDataIndex: MyDataIndex
}, {
  initialRouteName: 'Initial',
});

const Guide = createStackNavigator({
  GuideIndex:  GuideIndex,
  GuideSecond: GuideSecondPage,
}, {
  initialRouteName: "GuideIndex",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'skyblue'
    }
  }
});

const Platform = createStackNavigator({
  PlatformIndex: PlatformIndex,
  PlatformSecond: PlatformSecondPage,
}, {
  initialRouteName: "PlatformIndex",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'pink'
    }
  }
});

const Curation = createStackNavigator({
  CurationIndex: CurationIndex,
  CurationSecond: CurationSecondPage,
}, {
  initialRouteName: 'CurationIndex',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'purple'
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    MyData,
    Guide,
    Platform,
    Curation,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

// export default createAppContainer(Intro)
export default createAppContainer(TabNavigator);