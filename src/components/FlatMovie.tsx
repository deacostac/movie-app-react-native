import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MovieCard } from './MovieCard';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    moviesList:Movie[],
    title?: string
}

export const FlatMovie = ( {moviesList, title}:Props) => {

  return (
    <View style={{ height: (title ? 260 : 230)}}>
        {title &&
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft:10}}>
                {title}
            </Text>
        }
        <FlatList
        data={moviesList}
        renderItem={ ({ item }: any) => (
            <MovieCard movie={ item } width={140} height={200}/>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
    />
  </View>
  )
}
