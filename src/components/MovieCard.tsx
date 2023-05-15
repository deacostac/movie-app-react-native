import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/core';

interface Props{
    movie: Movie;
    height?: number,
    width?: number
}

export const MovieCard = ( { movie, height = 400, width = 250 }:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    const navigation = useNavigation()

  return (
   <TouchableOpacity 
        onPress={() => navigation.navigate('DetailScreen', movie)}
        activeOpacity={0.8}
        style={{
            width, 
            height, 
            marginHorizontal: 2,
            paddingBottom:20,
            paddingHorizontal:7
        }}>
            <View style={style.imageContainer}>
                <Image 
                    source={{ uri }}
                    style={style.image}
                />
            </View>
   </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 6.27,

        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    }
})