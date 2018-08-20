import React from 'react';
import { StyleSheet, View } from 'react-native';
import Main from './App/Main';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08132f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
