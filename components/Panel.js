import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

export default class Panel extends Component {
  render() {

    return (
      <View style={[styles.panel, this.props.styleContainer]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#ffffff'
  }
})