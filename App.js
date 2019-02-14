import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search.js';
import Search2 from './components/Search2.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
      <Search />

      </View>
    );
  }
}

