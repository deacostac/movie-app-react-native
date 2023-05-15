import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons'
import { CastCard } from './CastCard';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = (  { movieFull, cast}:Props) => {
  return (
    <>
        {/* Movie full data */}
        <View style={{ marginHorizontal: 20}}>
            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name='star-outline'
                    color='grey'
                    size={ 16 }
                />
                <Text>{movieFull.vote_average}</Text>
                <Text style={{marginLeft: 5}}>
                    - {movieFull.genres.map( g => g.name ).join(', ') }
                </Text>
            </View>
            <View>
                <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
                    Historia
                </Text> 
                <Text style={{fontSize: 16}}>
                    {movieFull.overview}
                </Text>  
            </View>
        </View>
        {/* Casting Data */}
        <View style={{ marginTop: 10, marginBottom: 100}}>
            <Text style={{ fontSize:23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                Cast
            </Text>
            <FlatList 
                data={cast}
                renderItem={ ({ item }: any) => (
                    <CastCard actor={ item }/>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10, height: 70}}
            />
        </View>
    </>
  )
}
