import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Panel from './Panel';

export default class UserPanel extends Component {
  render() {
    return (
      <Panel>
        <View style={styles.userPanel}>
          <Avatar 
            rounded
            size="large"
            source={require('./../assets/img/matthieu.png')}
            containerStyle={styles.avatar} 
          />
          <View style={styles.userInfo}>
            <Text style={styles.userText}>Matthieu Faugere</Text> 
            <Text style={styles.userText}>30 ans</Text>  
            <Text style={styles.userText}>02/01/1989</Text>  
          </View>
        </View>
      </Panel>
    )
  }
}

const styles = StyleSheet.create({
  userPanel: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    borderWidth: 2, 
    borderColor:'white',
    alignSelf: 'center',
    shadowOffset: { width: 0,  height: 2 },
    shadowColor: 'rgb(0, 45, 64)',
    shadowOpacity: 0.05,
  },
  userInfo: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userText: {
    padding: 4,
    fontSize: 20
  }
})