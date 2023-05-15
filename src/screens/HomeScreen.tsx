import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useMovies } from '../hooks/useMovies';
import { MovieCard } from '../components/MovieCard';
import { FlatMovie } from '../components/FlatMovie';

const windowsWidth = Dimensions.get('window').width

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
  const { top } = useSafeAreaInsets()

 if (isLoading){
  return(
    <View style={{
      flex:1, justifyContent: 'center', alignContent: 'center'
    }}>
      <ActivityIndicator color="red" size={100} />
    </View>
  )
 }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20}}>
        {/* Main Carousel */}
        <View style={{ height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={ ({ item }: any) => <MovieCard movie={ item }/> }
            sliderWidth={windowsWidth}
            itemWidth={250}
            inactiveSlideOpacity={0.9}
          />
        </View>
        <FlatMovie moviesList={popular} title='Populares'/>
        <FlatMovie moviesList={topRated} title='Aclamadas'/>
        <FlatMovie moviesList={upcoming} title='Proximamente'/>
      </View>
    </ScrollView>
  )
}
