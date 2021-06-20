import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default class News extends React.Component{
  render() {
    return(
      <Text style={styles.buttonText}> 
      Science, crime, medicine, archaeology, nature — if it’s interesting news,      you’ll find it here. Stories like these may not always be the ones atop your news feed, but chances are they’re the ones you’ll actually want to read. Whether it’s stories of weird animals, grisly crimes, interstellar drama, or the just plain unbelievable, these are the most interesting news articles you’ll find anywhere. From a nine-year-old boy’s accidental uncovering of a previously-unknown human ancestor called Australopithecus sediba to new revelations about how the Ancient Egyptian pyramids were built, interesting news stories like these represent the discoveries that unlock the secrets of humanity’s past. And in addition to uncovering our past, these interesting current events furthermore chart the course of our present — from the serious all the way down to weird news of the “Florida man” variety — and our future — from the latest technological advances to the Jupiter pictures coming back from the outer reaches of our solar system. It could be awe-inspiring photos of celestial bodies, it could be the most bizarre story of mayhem down here on Earth… if it’s interesting news, All That’s Interesting has it covered. 
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