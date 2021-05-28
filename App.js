//import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import Route from './route/Route';
//import * as api from './src/API/user.api';
//import {Provider} from 'react-redux';
//import {store} from './src/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

export default function App() {
  const {login} = useSelector((state) => state.user);

  console.log('login', login);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      subscribeToTopic('school');
    }
  }

  const subscribeToTopic = async (topic) => {
    await messaging()
      .subscribeToTopic(topic)
      .then(() => console.log('Subscribed to topic!'));
  };

  React.useEffect(() => {
    requestUserPermission();
  }, []);

  React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value) {
          dispatch({type: 'SET_LOGIN_STATUS', payload: true});
          // value previously stored
          console.log('my value ', value);
        }
      } catch (e) {
        // error reading value
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => fetchData;
  }, []);

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          style={{height: 80, width: 80}}
          source={require('./assets/loading.png')}
        />
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Route login={login} />;
}
