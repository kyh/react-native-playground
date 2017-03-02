import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhPhxugFWZr1Qgzow6Jk7DrfMydWNCm0M',
      authDomain: 'react-native-auth-2ac87.firebaseapp.com',
      databaseURL: 'https://react-native-auth-2ac87.firebaseio.com',
      storageBucket: 'react-native-auth-2ac87.appspot.com',
      messagingSenderId: '852670948118'
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
