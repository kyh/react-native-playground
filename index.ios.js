/**
 * iOS entry point
 * @flow
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default function App() {
  return (
    <View>
      <Header title="Albums" />
      <AlbumList />
    </View>
  );
}

AppRegistry.registerComponent('albums', () => App);
