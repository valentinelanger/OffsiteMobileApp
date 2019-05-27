import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import AppleHealthKit from  'rn-apple-healthkit';

export default class ButtonComponent extends Component {

  getDataFromHealthKit() {
    let options = {
      permissions: {
          read: ["Height", "Weight", "StepCount", "DateOfBirth", "BodyMassIndex", "ActiveEnergyBurned", "HeartRate", "RespiratoryRate", "BiologicalSex"]
      }
    };

    let finalResult = {
      birthDate: undefined,
      age: undefined, 
      weight: undefined,
      weightSample: [],
      heartRateSamples: []
    }
    

    AppleHealthKit.initHealthKit(options, (err, results) => {
      if (err) {
          console.log("error initializing Healthkit: ", err);
          return;
      }
      // birthDate
      AppleHealthKit.getDateOfBirth(null, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (results && results.value) {
          finalResult.birthDate = results.value;
        }
        if (results && results.value) {
          finalResult.age = results.age;
        }

        // LatestHeight
        AppleHealthKit.getLatestHeight(null, (err, results) => {
          if (results && results.value) {
            finalResult.weight = results.value;
          }
        
          // WeightSamples
          let optionsWeightSamples = {
            unit: 'kg', // optional; default 'pound'
            startDate: (new Date(2016,4,27)).toISOString(), // required
            endDate: (new Date()).toISOString(), // optional; default now
            ascending: false,	// optional; default false
            limit:10, // optional; default no limit
          };
          AppleHealthKit.getWeightSamples(optionsWeightSamples, (err, results) => {
            if (err) {
              return;
            }
            finalResult.weightSample = results;

            // HeartRate
            let optionsHeartRateSamples = {
              unit: 'bpm', // optional; default 'bpm'
              startDate: (new Date(2016,4,27)).toISOString(), // required
              endDate: (new Date()).toISOString(), // optional; default now
              ascending: false, // optional; default false
              limit:10, // optional; default no limit
            };
            AppleHealthKit.getHeartRateSamples(optionsHeartRateSamples, (err, results) => {
              // if (this._handleHealthkitError(err, 'getDateOfBirth')) {
              //   console.log(err)
              //   return;
              // }
              console.log(err);
              finalResult.heartRateSamples = results;

              console.log('finalResult:', finalResult);
              this.setState({data: finalResult});
              this.postDataToApi();
            });
          });
        });
      });
    });
  };

  postDataToApi() {
    console.log("IN POST DATA API");
    console.log('this.state in post data', this.state.data);
    return fetch('https://paddo-backend.lifen.fr/submit-form', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.data)
    })
    .then((response) => {
      
      console.log(response)
      if (response && response.status) {
        if (response.status == '200') {
          this.setState({ sendStatus: 'success'})
        } else {
          this.setState({ sendStatus: 'error'})
        }
        
      }
      // this.setState({loading: false})
       
      return;
    })
    .catch((error) => {
      // this.setState({loading: false})
      // console.log('console.log(this.state.loading) error : ', this.state.loading)  
      console.log(error);
      this.setState({ sendStatus: 'error'})
      return;
    });
  };


  render() {
    return (
      <Button
        onPress={() => this.getDataFromHealthKit()}
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