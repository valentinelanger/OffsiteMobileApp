import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    height: 70,
    shadowOffset:{  width: 0,  height: -1  },
    shadowColor: 'rgb(0, 45, 64)',
    shadowOpacity: 0.1,
    backgroundColor: '#ffffff'
  }
})