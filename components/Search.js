import React from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import movies from '../helpers/filmData.js';
import FilmItem from '../components/FilmItem.js';
import {getMoviesFromAPI} from '../config/TMDBauth.js';

class Search extends React.Component
{
	state = {
		movies:[],
		search:'',
		animating:false,
		currentPage:0,
		totalPages:0,
		footAnimation:false
	}

	async componentDidMount()
	{
		//const movies = await getMoviesFromAPI('bob');
		//this.setState({movies:movies.results});
	}

	async searchMovie()
	{
		

		if(this.state.search.length >0)
		{
			this.setState({
				movies:[],
				animating: !this.state.animating });
			const movies = await getMoviesFromAPI(this.state.search);
			this.setState({
				movies:movies.results, 
				animating:false, 
				currentPage:movies.page,
				totalPages:movies.total_pages });
		}
		
		
	}

	async nextMovies()
	{
		if(this.state.currentPage < this.state.totalPages )
		{

			const nextPage = ++this.state.currentPage;
			this.setState({footAnimation:true});
			const movies = await getMoviesFromAPI(this.state.search, nextPage);
			this.setState({
				movies:[...this.state.movies,...movies.results], 
				animating:false, 
				currentPage:movies.page,
				totalPages:movies.total_pages,
				footAnimation:false });
		}
	}

	footAnimation() {

		if(this.state.footAnimation)
		{
		return(
			<View Style={styles.footAnimation} >
				<ActivityIndicator size="small" color="#329920" /> 
			</View>);
		}

	};


	changeText(text)
	{
		this.setState({search:text})
	}

	_onPressMovie = (id) => {
		console.log('navigation to id:'+ id); 
		this.props.navigation.navigate('FilmDetail', {idMovie:id}); }

	render()
	{
		return(
			<View style={styles.container} > 
				<TextInput placeholder="search a movie" 
				style={styles.input} 
				onChangeText={this.changeText.bind(this)}
				onSubmitEditing={ () => this.searchMovie() } />

				<Button title="Search" onPress={this.searchMovie.bind(this)} />
				
					{this.state.animating ? 
					<View style={styles.ActivityIndicator}>
						<ActivityIndicator size="large" color="#329920" /> 
					</View>: null}
				
				
				{this.state.movies && <FlatList
				  style={{marginTop:20}}
				  data={this.state.movies}
				  keyExtractor={(item) => item.id.toString() }
				  renderItem={({item}) => <FilmItem onPress={this._onPressMovie.bind(this, item.id)} movie={item} />}
				  onEndReachedThreshold={0.2}
				  onEndReached={() => this.nextMovies()}
				/>}
				
				{this.footAnimation()}

			</View>
			);
	}

}

// const mapStateToProps = state => ({
//   favMovies: state.favMovies
// })

// const mapDispatchToProps = dispatch => ({
//     addMovieToFav: id => dispatch(addMovieToFavoris(id)),
//     removeMovieFromFav: id => dispatch(removeMovieFromFavoris(id))
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Search)

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:10
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
  ActivityIndicator:
  {
  	flex:1,
  	justifyContent:'center'
  },
  footAnimation:{
 
  }

});

export default Search;