import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

export default class ButtonComponent extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          // do nothing
        }}
        title="Envoyer"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonContainer}
      >
          Envoyer
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#3F61AA',
    width: 280,
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 40
  }
})