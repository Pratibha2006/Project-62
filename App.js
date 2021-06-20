import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppHeader from './components/AppHeader';
import HomeScreen from './Screens/HomeScreen';
import Weather from './Screens/WeatherScreen';
import Joke from './Screens/JokeScreen';
import News from './Screens/NewsScreen';
import HoroScope from './Screens/HoroScope';

export default class App extends React.Component {
  render() {
    return(
      <View>
      <AppHeader/>
      <AppContainer />
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen : HomeScreen,
  Weather :Weather,
  Joke : Joke,
  News : News,
  HoroScope : HoroScope,
});

const AppContainer = createAppContainer(AppNavigator);
