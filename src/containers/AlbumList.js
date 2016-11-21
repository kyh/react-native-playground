import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      return <Text>{album.title}</Text>;
    });
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}
