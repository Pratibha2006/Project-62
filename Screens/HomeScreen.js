import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import database from '../Config';

 export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state={
      like:0,
      dislike:0
    }
  }

  incrementinglike=()=> {
    this.setState({like:this.state.like+1});
  }

  incrementingdislike=()=> {
    this.setState({dislike:this.state.dislike+1});
  }

  likeButton() {
    var likeCount = database.ref('buttons/like');
    var count=0;
      likeCount.update({
      count:count+1
    })
  }

  dislikeButton() {
    var dislikeCount = database.ref('buttons/dislike');
    var count=0; 
      dislikeCount.update({
      count:count+1
    })
  }

  goToJokeScreen=()=> {
    this.props.navigation.navigate('Joke');
   }

  goToHoroScope=()=> {
    this.props.navigation.navigate('HoroScope');
   }

  goToWheaterScreen=()=> {
    this.props.navigation.navigate('Wheater');
   }

  goToNewsScreen=()=> {
    this.props.navigation.navigate('News');
   }

  render() {
    return(
      <View> 

      <TouchableOpacity style={styles.button}
      onPress={() => {
      this.goToJokeScreen();
      }}> 
      <Text style={styles.buttonText}> Read A Joke </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => {
      this.goToHoroScope();
      }}> 
      <Text style={styles.buttonText}> Horo Scope </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => {
      this.goToWheaterScreen();
      }}> 
      <Text style={styles.buttonText}> Wheather </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
      onPress={() => {
      this.goToNewsScreen();
      }}> 
      <Text style={styles.buttonText}> Top News </Text> 
      </TouchableOpacity>

      <Text style = {[styles.buttonText, {marginTop:25}]}>Rate Us</Text>

        <TouchableOpacity
        onPress={() => {
          this.incrementinglike();
          this.likeButton();
        }}>
          <Image style = {{
            width: 50,
            height: 50,
            marginTop: 5,
            marginLeft: 90}} 
            source={require('../assets/thumbsup.png')}/>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => {
          this.incrementingdislike();
          this.dislikeButton();
        }}>
          <Image style = {{
            width: 50,
            height: 50,
            marginTop: -38,
            marginLeft: 200}} source={require('../assets/thumbsdown.png')}/>
        </TouchableOpacity>

        <Text style={{ marginLeft:100}}> {this.state.like} </Text>
        <Text style={{ marginTop:-20,marginLeft:200}}> {this.state.dislike} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    borderWidth: 2,
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 15,
    alignSelf: 'center',
  },

  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    fontFamily:'Comic Sans MS'
  },

});
