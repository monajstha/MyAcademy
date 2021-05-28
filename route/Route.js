import 'react-native-gesture-handler';
import React from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OptionsMenu from 'react-native-option-menu';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ResultScreen from '../screens/ResultScreen';
import FeesScreen from '../screens/FeesScreen';
import TabNavigation from '../screens/TabNavigation';
import AdminScheduleScreen from '../screens/AdminScheduleScreen';
import AdminLoginScreen from '../screens/AdminLoginScreen';
import AdminHomeScreen from '../screens/AdminHomeScreen';
import AdminResultScreen from '../screens/AdminResultScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import MapScreen from '../screens/MapScreen';
import AdminFeeScreen from '../screens/AdminFeeScreen';
import AdminViewStudentsScreen from '../screens/AdminViewStudentsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentScreen2 from '../screens/PaymentScreen2';

const MoreIcon = require('../assets/more.png');
/*<OptionsMenu
    button={MoreIcon}
    buttonStyle={{ width: 32, height: 8, margin: 7.5, resizeMode: "contain" }}
    destructiveIndex={1}
    options={["Edit", "Delete", "Cancel"]}/>*/

const Stack = createStackNavigator();
export default function Route({login}) {
  // console.log(login);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!login ? (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{title: 'Login', header: () => null}}
            />
            <Stack.Screen
              name="AdminLoginScreen"
              component={AdminLoginScreen}
              options={{title: 'Admin Login', header: () => null}}
            />
            <Stack.Screen
              name="AdminHomeScreen"
              component={AdminHomeScreen}
              options={{title: 'Home'}}
            />
            <Stack.Screen
              name="AdminScheduleScreen"
              component={AdminScheduleScreen}
              options={{title: 'Add Schedule'}}
            />
            <Stack.Screen
              name="AdminResultScreen"
              component={AdminResultScreen}
              options={{title: 'Add Result', header: () => null}}
            />

            <Stack.Screen
              name="AdminFeeScreen"
              component={AdminFeeScreen}
              options={{title: 'Add Fee', header: () => null}}
            />

            <Stack.Screen
              name="AdminViewStudentsScreen"
              component={AdminViewStudentsScreen}
              options={{title: 'Students List'}}
            />

            <Stack.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{title: 'Add student', header: () => null}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="TabNavigation"
              component={TabNavigation}
              options={({navigation, route}) => ({
                headerStyle: {
                  backgroundColor: '#1261A0',
                },

                headerTintColor: 'white',
                headerTitleStyle: {
                  marginLeft: 0,
                },
                headerRight: () => (
                  <OptionsMenu
                    customButton={
                      <Image
                        source={MoreIcon}
                        style={{width: 30, height: 30, paddingLeft: 30}}
                      />
                    }
                    options={['Contact us', ' About us', '']}
                    actions={[
                      () => navigation.navigate('ContactUsScreen'),
                      () => navigation.navigate('AboutUsScreen'),
                      () => navigation.navigate('ContactUsScreen'),
                    ]}
                  />
                ),
              })}
            />

            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={({navigation, route}) => ({
                headerStyle: {
                  backgroundColor: 'white',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textAlign: 'center',
                  marginLeft: 50,
                  flex: 1,
                },

                headerLeft: null,
              })}
            />

            <Stack.Screen
              name="ScheduleScreen"
              component={ScheduleScreen}
              options={{title: 'Schedules'}}
            />
            <Stack.Screen
              name="ResultScreen"
              component={ResultScreen}
              options={{title: 'Result'}}
            />
            <Stack.Screen
              name="FeesScreen"
              component={FeesScreen}
              options={{title: 'Fees'}}
            />

            <Stack.Screen
              name="PaymentScreen"
              component={PaymentScreen}
              options={{title: 'Payment'}}
            />

            <Stack.Screen
              name="PaymentScreen2"
              component={PaymentScreen2}
              options={{title: 'Payment'}}
            />

            <Stack.Screen
              name="ContactUsScreen"
              component={ContactUsScreen}
              options={{title: 'Contact Us'}}
            />
            <Stack.Screen
              name="AboutUsScreen"
              component={AboutUsScreen}
              options={{title: 'About Us'}}
            />

            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{title: 'Location'}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
