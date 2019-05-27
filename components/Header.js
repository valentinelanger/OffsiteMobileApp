import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { Image } from 'react-native-elements';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require('./../assets/img/lifen-logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 10,
    height: 70,
    borderBottomColor: '#e9ecef',
    borderBottomWidth: 1,
    // shadowOffset:{  width: 0,  height: 2  },
    // shadowColor: 'rgb(0, 45, 64)',
    // shadowOpacity: 0.1,
    backgroundColor: '#ffffff'
  }
})



