import React, {useState} from 'react';
import {View} from 'react-native';
import Text from '../Text';
// import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Linking} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function contactUs(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          style={styles.buildingImage}
          source={{uri: 'https://wallpaperaccess.com/full/859072.jpg'}}
        />
      </View>

      <View style={styles.mapView}>
        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => {
            props.navigation.navigate('MapScreen');
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            View Map
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerContent}>
          <View style={styles.bottomTweak}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('tel:9806684908');
                }}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../assets/call.png')}
                />
              </TouchableOpacity>
              {/* <Text>myacademy2016@gmail.com</Text> */}
            </View>
          </View>
          <View style={styles.detailsCheck}>
            <View>
              <Text style={styles.bottomText}>Call Us!</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainerContent}>
          <View style={styles.bottomTweak}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('mailto:myacademy2020@gmail.com');
                }}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../assets/gmail.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsCheck}>
            <View>
              <Text style={styles.bottomText}>Mail Us!</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.connectView}>
          <Text style={{fontSize: 15, padding: 5, fontWeight: 'bold'}}>
            Connect with us on:
          </Text>
          <View style={styles.iconView}>
            <TouchableOpacity
              style={{paddingRight: 15}}
              onPress={() => {
                Linking.openURL('https://www.facebook.com/stha.manoj.35');
              }}>
              <Image
                style={{height: 50, width: 50}}
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_facebook-256.png',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://www.instagram.com/manojsthaa/');
              }}>
              <Image
                style={{height: 50, width: 50}}
                source={{
                  uri:
                    'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  buildingImage: {
    height: 500,
    width: 500,
  },
  mapButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    borderRadius: 20,
  },
  mapView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 5,
  },
  bottomTweak: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomContainerContent: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bottomText: {
    fontSize: 15,
    paddingLeft: 10,
  },
  connectView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    flexDirection: 'row',
  },
});
