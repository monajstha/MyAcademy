//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../Text';
import {useDispatch, useSelector} from 'react-redux';
import * as api from '../src/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import user from '../src/store/reducers/user.reducer';
import {setUsername1} from '../src/store/actions/user.action';

export default function profile() {
  const {username} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const signOut = () => {
    AsyncStorage.removeItem('user', () => {
      dispatch({type: 'SET_LOGIN_STATUS', payload: false});
    });
  };
  // console.log('repeat100');

  // console.log('Profile username', username.username);
  // console.log('username', username);
  // console.log('repeat!');
  const [username1, setUsername] = useState('');
  const [name, setName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const [studentDetails, setStudentDetails] = useState();

  React.useEffect(() => {
    //setUsername(username.username);
    //console.log('username1', username1);
    api.getStudentDetails(username.username).then((response) => {
      console.log('username', username.username);
      console.log('response', response);
      //setStudentDetails(response);
      //console.log('student details: ', studentDetails);
      setAddress(response[0].address);
      setName(response[0].full_name);
      setEmail(response[0].email);
      setFaculty(response[0].faculty);
      setPhoneNumber(response[0].phone_number);
      setUsername(response[0].username);
    });
  }, []);
  //console.log('student details:', studentDetails);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.profileDetails}>
            <Image
              style={styles.image}
              source={require('../assets/profile.png')}
            />
            <Text style={styles.textName}>{name}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerContent}>
            <View style={styles.bottomTweak}>
              <View>
                <Text style={styles.bottomText}>Faculty</Text>
              </View>
            </View>
            <View style={styles.detailsCheck}>
              <View>
                <Text style={styles.bottomText}>{faculty}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainerContent}>
            <View style={styles.bottomTweak}>
              <View>
                <Text style={styles.bottomText}>Phone number</Text>
              </View>
            </View>
            <View style={styles.detailsCheck}>
              <View>
                <Text style={styles.bottomText}>{phoneNumber}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainerContent}>
            <View style={styles.bottomTweak}>
              <View>
                <Text style={styles.bottomText}>Username</Text>
              </View>
            </View>
            <View style={styles.detailsCheck}>
              <View>
                <Text style={styles.bottomText}>{username1}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainerContent}>
            <View style={styles.bottomTweak}>
              <View>
                <Text style={styles.bottomText}>Address</Text>
              </View>
            </View>
            <View style={styles.detailsCheck}>
              <View>
                <Text>{address}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainerContent}>
            <View style={styles.bottomTweak}>
              <View>
                <Text style={styles.bottomText}>Email</Text>
              </View>
            </View>
            <View style={styles.detailsCheck}>
              <View>
                <Text style={styles.bottomText}>{email}</Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
              <Text style={styles.signOutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signOutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  image: {
    height: 115,
    width: 115,
    borderRadius: 100,
  },

  iconImage: {
    height: 30,
    width: 30,
    backgroundColor: 'deeppink',
  },

  botttomIconImage: {
    height: 30,
    width: 30,
  },

  textName: {
    marginTop: 20,
    color: 'white',
    fontSize: 25,
  },
  textAddress: {
    color: 'white',
    fontSize: 20,
  },
  topContainer: {
    flex: 1,
    paddingTop: 50,

    paddingBottom: 30,
    justifyContent: 'center',
    backgroundColor: '#1261A0',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 5,
  },
  bottomTweak: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomContainerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bottomText: {
    fontSize: 15,
    paddingLeft: 10,
  },
  iconView: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  profileDetails: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  followStats: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  followStatsText: {
    color: 'white',
    fontSize: 17,
  },
  detailsCheck: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  arrowIcon: {
    height: 15,
    width: 15,
    paddingLeft: 30,
  },
  signOutButton: {
    backgroundColor: 'black',
    width: 150,

    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonView: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
