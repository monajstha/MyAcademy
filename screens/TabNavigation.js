import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import {Image, StyleSheet} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: getFocusedRouteNameFromRoute(route),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'My Academy') {
            iconName = focused
              ? require('../assets/home-dark.png')
              : require('../assets/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('../assets/user-dark.png')
              : require('../assets/userWhite.png');
          }
          // else {
          //   iconName = focused

          //   ? require('../assets/notification-dark.png')
          //   : require('../assets/notification.png');
          // }

          return (
            <Image
              source={iconName}
              style={{width: 28, height: 28}}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'white',
        allowFontScaling: true,
        labelStyle: {
          fontSize: 13,
        },
        style: {
          backgroundColor: 'white',
          padding: 7,
        },
      }}>
      <Tab.Screen
        name="My Academy"
        component={HomeScreen}
        options={{title: 'MyAcademy'}}
      />
      {/* <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: 'Notification'}}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
  },
});
export default BottomTabNavigator;
