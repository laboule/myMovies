// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, ScrollView, Text, FlatList, ActivityIndicator, Image } from 'react-native'
import { findMovie, poster_path, getImageFromPath } from '../config/TMDBauth';
import moment from 'moment'
import timezone from 'moment-timezone'
import numeral from 'numeral'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      movie:{},
      isLoading:true
    };
    this.listDetails = [];

  }

  _displayLoadingIndicator = () => this.state.isLoading ?
      (<ActivityIndicator style={styles.loading} size="large" color="#329920" />) : null

  _displayMovie() {

    if(!this.state.isLoading) {
    const {movie} = this.state;
    return(
      <ScrollView style={{flex:1}}>
        <Image style={styles.image} source={{uri:getImageFromPath(movie.backdrop_path) }} />

      <Text style={styles.title}>{ movie.title }</Text>
      <Text style={styles.description}>{ movie.overview }</Text>
     

        <View style={styles.details}>
          <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={this.listDetails}
              renderItem={({item}) => <Text style={styles.text_detail}>{item}</Text>}
          />
        </View>
      </ScrollView>
      );
    }
     

  }

  async componentDidMount()
  {
    // call movie DB API
    const idMovie = this.props.navigation.getParam('idMovie');
    const movie = await findMovie(idMovie);
    
    const {
      release_date, 
      vote_average, 
      vote_count, budget, 
      genres, 
      production_companies} = movie;

      //

    this.listDetails =[
    'Sorti le '+ moment(new Date(release_date),"YYYY-MM-DD").format('DD/MM/YYYY'), 
    'Note : '+vote_average, 
    'Nombre de votes: '+vote_count, 
    'Budget : '+numeral(budget).format('0,0[.]00 $'), 
    'Genre(s) : '+genres.map((item)=>item.name).join(' / '),
    'Compagnie(s) : '+production_companies.map((item)=>item.name).join(' / ')
    ];

    this.setState({isLoading:false, movie:movie});
    console.log(this.state);
   
  }
  render() {

    return (
      <View style={styles.main_container}>
        { this._displayLoadingIndicator() }
        { this._displayMovie() } 
      </View>     
    )
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
// )(FilmDetail)

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection:'column'
  },
  loading:{
    alignSelf:'center'
  },
  image:{
    height: 170
  },
  title:{
    flex:1,
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'black',
    marginVertical:5,
    flexWrap:'wrap'

  },
  description:{
    flex:4,
    fontStyle:'italic',
    textAlign:'justify',
    color:'grey',
    margin:5
  },
  details:
  {
    flex:3,
    color:'black',
    textAlign:'left'
  },
  text_detail:
  {
    color:'black',
    textAlign:'left',
    fontSize:12,
  }
})

export default FilmDetail