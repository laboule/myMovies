import React from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';
import movies from '../helpers/filmData.js';
//import FilmItem from 'FilmItem.js';


export default class Search extends React.Component
{

	render()
	{
		return(
			<View style={styles.container} > 
				<TextInput placeholder="search a movie" style={styles.input} />
				<Button title="Search" onPress={() => {alert(1);} } />
			
				<FlatList
				  data={movies}
				  keyExtractor={(item) => item.id.toString() }
				  renderItem={({item}) => <Text>{item.title}</Text>}
				/>
			</View>
			);
	}

}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex:1
  },
  input: {
    marginHorizontal:40, 
    marginBottom:10,
    height:40,
    borderColor:'#000000',
    borderStyle:'solid',
    borderWidth:1,
    borderRadius:2,
    paddingHorizontal:10,
    textAlign:'center'
  },

});