import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icon } from "@up-shared/components";


export default class MapPage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Icon name="store-24" size={150} color="black"/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
