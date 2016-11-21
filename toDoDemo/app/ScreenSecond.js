import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '<Your welcome in Second Screen>',
      textBack: '<Tap to Go Back to First Screen>'
    }
  }
  OnBUttonPress = () => {
      this.props.navigator.push({
        id: 'WelcomeScreen'
      })
  }

  render = () => {
    return (
        <View>
            <Text>{this.state.text}</Text>
            <TouchableHighlight onPress={this.OnBUttonPress}>
              <Text>{this.state.textBack}</Text>
            </TouchableHighlight>
       </View>
    );
  }
}
