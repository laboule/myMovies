import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import {poster_path, getImageFromPath} from '../config/TMDBauth.js';
import moment from 'moment'

export default class FilmItem extends React.Component {

 render() {
 	const { onPress, movie } = this.props;
 	
	return(
		<TouchableOpacity onPress={onPress} style={styles.container}>

			<Image style={styles.image} source={{uri: getImageFromPath(movie.poster_path)}}/>

			<View style={{flex:1, flexDirection:'column', margin:5}}>

				<View style={{flex:3, flexDirection:'row'}}>
					<Text style={styles.title}>
					{movie.title}
					</Text>
					<Text style={styles.vote}>
					{movie.vote_average}</Text>
				</View>

				<View style={{flex:7, paddingBottom:5}}>
					<Text numberOfLines={6} style={styles.text}>
					{movie.overview}</Text>
				</View>

				<View style={{flex:1}}>
					<Text style={styles.date}>Sorti le {moment(new Date(movie.release_date),"YYYY-MM-DD").format('DD/MM/YYYY')}</Text>
				</View>

			</View>

		</TouchableOpacity >
			);
	}


}

const styles = StyleSheet.create({
	container:{
		height:190,
		flexDirection:'row',
		marginHorizontal:10, 
		marginBottom:10},

	image:{
		    width: 120,
		    height: 180,
		    margin: 5,
		    backgroundColor: 'gray'
	},
	title:{
			flex:1,
			fontSize: 18, 
			fontWeight: 'bold', 
			color:'black',
			paddingRight:5,
			textAlign: 'left',
			
		},
	text:{
		color:'grey', 
		textAlign: 'left', 
		fontStyle:'italic'},
	vote:{
		
		fontSize: 20, 
		color:'grey', 
		textAlign: 'right'},
	date:{
		color:'black', 
		textAlign: 'right'}
	
});

