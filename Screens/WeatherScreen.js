import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Weather extends React.Component{
  render() {
    return(
      <Text style={styles.buttonText}> 
      Type Todays Wheater On Google And You Will Get Todays Wheater 
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  buttonText: {
    marginLeft:20,
    marginTop:100,
    marginRight:20,
  },
});
