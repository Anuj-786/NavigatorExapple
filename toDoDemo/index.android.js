/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ListView,
  Navigator,
} from 'react-native';

import WelcomeScreen from './app/WelcomeScreen';
import ScreenSecond from './app/ScreenSecond';

class toDoDemo extends Component {
  constructor (props) {
    super(props);
    this.state = { screen: 2 };
    this.state.transfer = {};
  }

  _renderScene = ( route, navigator ) => {
    _navigator = navigator;
    switch ( route.id ) {
      case 'WelcomeScreen':
        return(<WelcomeScreen navigator={navigator} title='First' />);
        break;
      case 'ScreenSecond':
        return(<ScreenSecond navigator={navigator} title="second" />);
        break;
      // case 'Card':
      //   return <Card navigator={navigator} title=''/>
      // break;
    }
  }

  render = () => {
    return (
      <Navigator
        initialRoute={{
          id: 'WelcomeScreen'
        }}
        renderScene={
          this._renderScene
        }
      />
    );
  }
}
AppRegistry.registerComponent('toDoDemo', () => toDoDemo);
