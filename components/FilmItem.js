import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

export default class FilmItem extends React.Component {


 render() {
	return(
		<View style={{flex:1}}>
			<Image style={{width: 50, height: 'auto'}} />
			<View style={{flex:1, flexDirection:'column'}}>

				<View style={{flex:1}}>
					<Text 
						style={{
							flex:3, 
							fontSize: 20, 
							fontWeight: 'bold', 
							color:'black',
							textAlign: 'left'}}>
					{this.props.movie.title}</Text>
					<Text style={{flex:1, fontSize: 20, color:'grey', textAlign: 'right'}}>
					{this.props.movie.vote_average}</Text>
				<View>

				<View style={{flex:2}}>
					<Text style={{color:'grey', textAlign: 'left'}}>{this.props.movie.overview}</Text>
				</View>

				<View style={{flex:1}}>
					<Text style={{color:'black', textAlign: 'right'}}>Sorti le {this.props.movie.release_date}</Text>
				</View>

			</View>

		</View>
			);
	}


}

