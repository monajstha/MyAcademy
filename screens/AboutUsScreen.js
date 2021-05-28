import React, {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import Text from '../Text';
// import CalendarPicker from 'react-native-calendar-picker';

export default function aboutUs() {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require('../assets/logo-owl.png')} />
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          MyAcademy is an application dedicated to help students and the faculty
          members. It aims to help both parties by sharing information.
        </Text>
        <Text style={styles.text}>
          It aims to provide important informations, regarding thier studies, on
          time.{' '}
        </Text>
        <Text style={styles.copyrightText}>
          © 2021 MyAcademy. All rights reserved.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'skyblue',
  },
  logoView: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
  },
  textWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderTopStartRadius: 5,
    borderTopRightRadius: 25,
    marginBottom: 190,
  },
  logo: {
    height: 180,
    width: 180,
    backgroundColor: 'white',
    borderRadius: 150,
  },
  text: {
    fontSize: 18,
    paddingBottom: 10,
  },
  copyrightText: {
    paddingTop: 150,
    paddingLeft: 30,
  },
});
