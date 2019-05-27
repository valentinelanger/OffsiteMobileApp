/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import UserPanel from './components/UserPanel';
import ConnectPanel from './components/ConnectPanel';
import ButtonComponent from './components/ButtonComponent';

export default class App extends Component {
  render() {
    return (  
      <View style={styles.container}>
        <Header />
        <UserPanel/>
        <View style={styles.separation} />
        
        <ConnectPanel />
        <ButtonComponent />
        
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    fontFamily: 'Roboto-Regular'
  },
  separation: {
    borderBottomColor: '#e9ecef',
    borderBottomWidth: 1,
    marginRight: 25,
    marginLeft: 25
  }

});
