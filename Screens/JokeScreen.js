import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default class Joke extends React.Component{
  render() {
    return(
      <View style={styles.buttonText}> 
      <Text> Teacher : Can A Kangarro Jump Higher Than A Eiffel Tower </Text>
      <Text> Student : Yes, Sir </Text>
      <Text> Teacher : How </Text>
      <Text> Student : Eiffel Tower Can Not Jump😂😂 </Text>
      </View>
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