import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Text from '../Text';

export default function adminHome(props) {
  return (
    // <View style={{backgroundColor: '#F3F1F1', flex: 1}}>
    //   <View>
    //     <TouchableOpacity
    //       style={styles.iconWrapper}
    //       onPress={() => props.navigation.navigate('SignupScreen')}>
    //       <Image
    //         style={styles.icon}
    //         source={{
    //           uri:
    //             'https://cdn1.iconfinder.com/data/icons/random-115/24/person_add-256.png',
    //         }}
    //       />
    //       <View style={styles.titleView}>
    //         <Text style={styles.text}>Add Student</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.firstRowWrapper}>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => props.navigation.navigate('SignupScreen')}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn1.iconfinder.com/data/icons/random-115/24/person_add-256.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>Add Student</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => props.navigation.navigate('AdminResultScreen')}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn4.iconfinder.com/data/icons/marketing-and-digital-marketing/32/business_marketing_advertising_result_clipboard-256.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>Add Result</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.secondRowWrapper}>
            <TouchableOpacity
              style={styles.iconWrapper}
              onPress={() => props.navigation.navigate('AdminFeeScreen')}>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn3.iconfinder.com/data/icons/personal-business-finance-set-2-1/64/b-75-512.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>Add Fees</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconWrapper2}
              onPress={() =>
                props.navigation.navigate('AdminViewStudentsScreen')
              }>
              <Image
                style={styles.icon}
                source={{
                  uri:
                    'https://cdn2.iconfinder.com/data/icons/users-groups-2/64/x-23-512.png',
                }}
              />
              <View style={styles.titleView}>
                <Text style={styles.text}>View Students</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.thirdRowWrapper}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingRight: 10,
  },
  secondContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
  icon: {
    height: 150,
    width: 150,
  },
  topIconWrapper: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#1261A0',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  iconWrapper: {
    borderWidth: 1,
    borderColor: '#1261A0',
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 10,
    // height:200,
    // width:180,
    borderRadius: 15,
    alignItems: 'center',
  },
  iconWrapper2: {
    borderWidth: 1,
    borderColor: '#1261A0',
    backgroundColor: 'white',
    padding: 5,

    marginLeft: 10,
    //height:200,
    // width:180,
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  contentWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',

    paddingRight: 0,
  },

  firstRowWrapper: {
    // backgroundColor: 'white',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  secondRowWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  thirdRowWrapper: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
  },
  titleView: {
    backgroundColor: '#1261A0',
    width: '100%',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
});
