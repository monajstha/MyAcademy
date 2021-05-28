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
import {useDispatch} from 'react-redux';
import * as api from '../src/API';

const appHeight = Dimensions.get('window').height;
const appWidth = Dimensions.get('window').width;

export default function adminLogin(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = () => {
    if (username == '') {
      alert('Username cannot be empty!');

      return;
    } else if (password == '') {
      alert('Password cannot be empty!');

      return;
    } else {
      api
        .adminLogin(username, password)
        .then((response) => {
          console.log(response);
          if (
            response[0].username === username &&
            response[0].password === password
          ) {
            console.log('response', response[0].username);
            props.navigation.navigate('AdminHomeScreen');
          } else {
            alert('Wrong credentials!');
          }
        })
        .catch((error) => {
          console.log('error', error);
          alert('Please enter correct credentials!');
        });

      // if (username == 'admin' && password == 'admin123') {
      //   props.navigation.navigate('AdminHomeScreen');
      // } else {
      //   alert('Wrong Credentials!');
      // }
    }
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#1261A0'}}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-owl.png')}
          />
        </View>

        <View style={styles.secondContainer}>
          <View>
            <Text style={styles.welcomeLabel}>Welcome Admin!</Text>
          </View>

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
            <TouchableOpacity style={styles.loginButton} onPress={login}>
              <Text style={styles.loginText}>Login</Text>
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
    // marginBottom: 5,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#1261A0',
    padding: 15,
    paddingTop: 20,
  },
  secondContainer: {
    //alignItems:'center',
    height: appHeight / 2.5,
    marginTop: 120,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  options: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  displayText: {
    fontSize: 16,
    color: 'white',
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
  icon: {
    height: 40,
    width: 40,
    marginTop: 5,
  },
  labelText: {
    fontSize: 15,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  welcomeLabel: {
    fontSize: 25,
    paddingBottom: 20,
    fontWeight: 'bold',
    color: 'skyblue',
    alignItems: 'center',
    paddingLeft: 80,
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
    paddingLeft: 80,
  },
});
