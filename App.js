import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

// could be loaded for our user from an API/DB we created, example via firebase
const initialState = {
	favMovies:[]
};

const store = createStore(rootReducer,initialState)

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={store}>
	      <View style={{flex:1}} >
		      <Navigation />      
	      </View>
        </Provider>
    );
  }
}

