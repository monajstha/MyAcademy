import React from 'react';
import {
  Button,
  Image,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Text from '../Text';
import data from '../db.json';
import {useDispatch} from 'react-redux';
import * as api from '../src/API';
import {
  setFaculty,
  setUser,
  setUsername1,
} from '../src/store/actions/user.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { CardStyleInterpolators } from '@react-navigation/stack';
//import { setUser } from '../src/store/actions/user.action';

const appHeight = Dimensions.get('window').height;
const appWidth = Dimensions.get('window').width;
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export default function loginPage(props) {
  //const user = useSelector(state => state.login)
  //console.log('user', user);

  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginClick = () => {
    if (username === '') {
      alert('Username cannot be empty!');

      return;
    } else if (password === '') {
      alert('Password cannot be empty!');

      return;
    } else {
      api
        .login(username, password)
        .then((response) => {
          setData(response);
          console.log(response);
          console.log('Faculty', response[0].faculty);

          if (response.length > 0) {
            console.log(response[0].username);
            dispatch(setUsername1(response[0].username));
            dispatch(setFaculty(response[0].faculty));
            storeData(data);
            dispatch(setUser(true));
          } else {
            alert('Please enter correct username and password!');
          }
        })
        .catch((error) => {
          console.log('error', error);
          alert('Please enter correct credentials!');
        });
    }
  };

  //   if (username=='manoj' && password=='manoj'){
  //     storeData('user', username);
  //     dispatch({type:'SET_LOGIN_STATUS', payload: true})
  //   }
  //   else{
  //     alert('Wrong Credentials!')
  //   }
  // }

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#1261A0'}}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-owl.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            paddingBottom: 5,
            height: appHeight / 2.5,
            marginTop: 120,
          }}>
          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Username"
              onChangeText={(text) => setUsername(text)}></TextInput>
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Enter Your Password"
              onChangeText={(text) => setPassword(text)}></TextInput>
          </View>

          <View style={styles.loginView}>
            <TouchableOpacity style={styles.loginButton} onPress={loginClick}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.options}>
            <Text style={styles.displayText}>Continue as Admin?</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AdminLoginScreen');
              }}>
              <Text style={styles.signUpText}>Click</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'skyblue',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    marginLeft: 10,
    padding: 0,
    borderRadius: 5,
  },
  container: {
    flex: 1,

    padding: 15,
    paddingTop: 20,
    backgroundColor: '#1261A0',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: 'dodgerblue',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  options: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 90,
  },
  displayText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  logo: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 250,
  },
  logoView: {
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 15,
  },
  icon: {
    height: 40,
    width: 40,
    marginTop: 5,
  },
  labelText: {
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'black',
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  loginView: {
    paddingTop: 30,
    paddingLeft: 90,
  },
});
