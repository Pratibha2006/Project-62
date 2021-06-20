import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default class HoroScope extends React.Component{
  render() {
    return(
      <Text style={styles.buttonText}> 
      Luckiest Sign In 2021 Are Aries, Leo, Virgo, And Capricorn 
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