import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Text from '../Text';

export default function home(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.secondRowWrapper}>
            <TouchableOpacity
              style={styles.topIconWrapper}
              onPress={() => props.navigation.navigate('ScheduleScreen')}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn0.iconfinder.com/data/icons/investing-and-finance-1/240/calendar-256.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>Schedules</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => props.navigation.navigate('FeesScreen')}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/personal-business-finance-set-2-1/64/b-75-512.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>Fee</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.secondRowWrapper}>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => props.navigation.navigate('ResultScreen')}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn4.iconfinder.com/data/icons/marketing-and-digital-marketing/32/business_marketing_advertising_result_clipboard-256.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>Result</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  secondContainer: {
    borderColor: '#1261A0',

    padding: 10,
    borderRadius: 0,
  },
  icon: {
    height: 150,
    width: 150,
  },
  topIconWrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1261A0',
    borderRadius: 10,
  },
  iconWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#1261A0',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  contentWrapper: {
    backgroundColor: 'skyblue',
  },
  secondRowWrapper: {
    marginTop: 10,
  },
  titleView: {
    backgroundColor: '#1261A0',
    width: '100%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
});
