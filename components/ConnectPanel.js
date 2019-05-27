import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SwitchComponent from './SwitchComponent';
import Panel from './Panel';

export default class ConnectPanel extends Component {
  render() {
    return (
      <Panel styleContainer={{ height: 300, justifyContent: 'flex-start' }}>
        <Text style={styles.checkText}>Connectez vos données :</Text>
        <View>
          <View style={styles.connectedAppName}>
            <Text style={styles.appName}>Health</Text>
            <SwitchComponent checked={true} />
          </View>
          <View style={styles.connectedAppName}>
            <Text style={styles.appName}>Withings</Text>
            <SwitchComponent checked={false} />
          </View>
          <View style={styles.connectedAppName}>
            <Text style={styles.appName}>Runkeeper</Text>
            <SwitchComponent checked={false}/>
          </View>
        </View>
    </Panel>
    )
  }
}

const styles = StyleSheet.create({
  checkText: {
    fontSize: 20,
    marginLeft: '5%',
    marginBottom: '5%'
  },  
  connectedAppName: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appName: {
    margin: '5%', 
    alignSelf: 'center',
    fontSize: 18
  }
})