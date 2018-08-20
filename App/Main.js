import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import MainButton from './UI/MainButton';
import MainText from './UI/MainText';

export default class MyComponent extends Component {
  constructor(props){
    super(props);
    // face true = face, face false = crown
    this.state = { isFlipped: false, flipValue: new Animated.Value(0) };
    this.interpolateFront = this.state.flipValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.interpolateBack = this.state.flipValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  handleTouch(){
    const { isFlipped, flipValue } = this.state;
    let rotationConfig = {
      friction: 6,
      tension: 20,
      useNativeDriver: true,
    };

    if(isFlipped) {
      rotationConfig = {
        ...rotationConfig,
        toValue: 0,
      };
    } else {
      rotationConfig = {
        ...rotationConfig,
        toValue: 180,
      };
    }
    Animated.spring(flipValue, rotationConfig).start();
    this.setState({ isFlipped: !isFlipped} );
  }

  render() {
    const frontStyle = {
      transform: [
        {rotateY: this.interpolateFront}
      ]
    };
    const backStyle = {
      transform: [
        {rotateY: this.interpolateBack}
      ]
    };
    const coin = (
      <View>
        <Animated.View style={[styles.flipFront, frontStyle]}>
          <MainText style={{fontSize: 18}}>Face</MainText>
        </Animated.View>

        <Animated.View style={[styles.flipFront, styles.backFlip, backStyle]}>
          <MainText style={{fontSize: 18}}>
            Crown
          </MainText>
        </Animated.View>
      </View>
    );
    return (
      <View style={styles.container}>
        {coin}
        <MainButton label='flip' handleTouch={() => this.handleTouch()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'

  },
  flipFront: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'rgb(50, 190, 152)',
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backFlip: {
    backgroundColor: 'rgb(128, 96, 99)',
    position: 'absolute',
    top: 0,
  }
});
