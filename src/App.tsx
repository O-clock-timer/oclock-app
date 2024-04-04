import { registerRootComponent } from 'expo'; 
import { StatusBar } from 'expo-status-bar';
import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Swiper showsButtons={false}>
        <View style={styles.slide}>
          <Text style={styles.text}>First Page</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Second Page</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>Third Page</Text>
        </View>
      </Swiper>
    );
  }
}

registerRootComponent(App); 
