import * as React from 'react';

import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { Islider } from '../slider';

interface BackgroundProps {
  slider: Islider;
  scrollX: any;
  ITEM_SIZE: number;
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  picture: {
    position: 'absolute',
    width,
    height,
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    position: 'absolute',
  },
});
const Background = ({ slider, scrollX, ITEM_SIZE }: BackgroundProps) => (
  <View style={styles.container}>
    <Animated.View style={StyleSheet.absoluteFill}>
      <FlatList
        data={slider}
        keyExtractor={(item: Islider) => `${item.key}-backdrop`}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height }}
        bounces={false}
        renderItem={({ item, index }: any) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [width, 0],
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={[styles.image, { transform: [{ translateX }] }]}
            >
              <Image source={{ uri: item.backdrop }} style={styles.image} />
            </Animated.View>
          );
        }}
      />
    </Animated.View>
  </View>
);
export default Background;
