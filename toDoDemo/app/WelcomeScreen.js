import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '<Tap To Next screen>',
    }
  }

  OnBUttonPress = () => {
      this.props.navigator.push({
        id: 'ScreenSecond'
      })
  }

  render = () => {
    return (
        <View>
            <Text>Welcome To Navigator Sample</Text>
            <TouchableHighlight onPress={this.OnBUttonPress}>
              <Text>{this.state.text}</Text>
            </TouchableHighlight>
       </View>
    );
  }
}
