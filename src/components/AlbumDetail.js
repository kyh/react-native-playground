import React from 'react';
import { Text, View } from 'react-native';

export default function AlbumDetail(props) {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
}
