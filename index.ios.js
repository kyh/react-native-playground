/**
 * iOS entry point
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/containers/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header title="Albums" />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
