# Swiper-RN

## Installation
```sh
yarn
yarn start
yarn lint
```

## Run Project
```sh
yarn start
```

## Code Rules Check
```sh
yarn lint
```
## Demo Sample

[Swipe Sample](https://imgur.com/eoHuLOO)

## APK

[`Sample APK`](https://drive.google.com/file/d/1fQDV9X42V2OpujeCHrVvPtKzw0-KGz1a/view?usp=sharing)


## Extras

Overlap background interpolate
```js
 components/Background.tsx
 
 <FlatList
          data={slider.reverse()}
          ...
   
          const translateX = scrollX.interpolate({
              inputRange: [(index - 2) * ITEM_SIZE, (index-1) * ITEM_SIZE],
              outputRange: [0,width],
            });
           return (
            <Animated.View
                style={{
                  width: translateX
                  ...
                  
          
```
