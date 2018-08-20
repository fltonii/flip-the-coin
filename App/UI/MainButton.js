import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import MainText from './MainText';

const MainButton = props => (
  <View {...props} style={[styles.container, props.style]}>
    <TouchableOpacity style={styles.button} onPress={()=> props.handleTouch()}>
      <MainText>
        <Text>
          {props.label}
        </Text>
      </MainText>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MainButton;
