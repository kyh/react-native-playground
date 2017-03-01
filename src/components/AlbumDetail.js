import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default function AlbumDetail(props) {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
}
