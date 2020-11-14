import React,{useState} from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Carousel,{Pagination} from 'react-native-snap-carousel';

const codewave= (prop) => {
  const DATA = require('../../Database/data.json');
  const[activeIndex, setactiveIndex] = useState(0);
  const[data, setdata] = useState(DATA);
  const[carouselItems, setcarouselItems] = useState(data.slice(0,4));

  const  shuffleDeck = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      }
    return setdata(array)
  };

    const renderItem = ({item,index}) => {        
        return (        
          <View>
            <TouchableOpacity onPress={() => console.log(index)}>
                <Image style={styles.ImageStyle} source={{uri: item.Poster}} />
                <Text style={styles.text}>{item.Title}</Text>
                <Text>{item.text}</Text>
            </TouchableOpacity>
          </View>
        )
    }

        return (
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.view}>
                <Carousel
                  layout={"default"}
                  ref={ref => carousel = ref}
                  data={carouselItems}
                  initialNumToRender={4}
                  onEndReached={() => shuffleDeck(DATA)}
                  onEndReachedThreshold={0.5}
                  sliderWidth={400}
                  itemWidth={300}
                  renderItem={renderItem}
                  onSnapToItem = { index => setactiveIndex(index) } />

            <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={activeIndex}
                    containerStyle={styles.containerStyle}
                    dotStyle={styles.dotStyle}
                    inactiveDotStyle={{
                        // Define styles for inactive dots here
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    />  
            </View>
          </SafeAreaView>
        );
    }

    export default codewave;


