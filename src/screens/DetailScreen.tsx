import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons'


const screenHeight = Dimensions.get('screen').height

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{}

export const DetailScreen = ( {route, navigation}: Props) => {

  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

  const { isLoading, cast, movieFull} = useMovieDetail(movie.id)

  return (
    <ScrollView>
      <View style={ styles.imageContainer}>
          <View style={ styles.borderImage}>
            <Image 
              source={{ uri }}
              style={ styles.posterImage}
            />
          </View>
      </View>
      <View style={ styles.marginContainer}>
        <Text style={ styles.subtitle}>{movie.original_title}</Text>
        <Text style={ styles.title}>{movie.title}</Text>
      </View>
  
        {
          isLoading 
            ? <ActivityIndicator size={ 35 } color='grey' style={{ marginTop: 20 }}/>
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }
         <TouchableOpacity
         style={ styles.backButton} 
          onPress={() => navigation.pop()}
          >
          <Icon 
            name='arrow-back-outline'
            color='white'
            size={70}            
          />
              
          </TouchableOpacity>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 6.27,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
  },
  borderImage: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25
  },
  posterImage: {
    flex: 1
  },
  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left:5
  }
})