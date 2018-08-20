import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainText = props => (
  <Text {...props} style={[styles.main, props.style]} >
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  main: {
    fontFamily: 'monospace',
    fontSize: 30,
    color: '#d2d5dd',
  }
});

export default MainText;
