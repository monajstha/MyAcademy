import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Text from '../Text';
import * as api from '../src/API';
import {Picker} from '@react-native-picker/picker';

export default function signupPage(props) {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [selectedFaculty, setSelectedFaculty] = React.useState('IT');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // const emptyFields = () => {
  //   setName('');
  //   setAddress('');
  //   setPhone('');
  //   setEmail('');
  //   setUsername('');
  //   setPassword('');
  //   setConfirmPassword('');
  // };

  const PickerFacultyFunction = () => {
    return (
      <View
        style={{
          borderWidth: 1,
          marginLeft: 20,
          marginTop: 10,
          // backgroundColor: 'black',
          borderColor: 'black',
          borderRadius: 10,
        }}>
        <Picker
          style={{height: 30, width: 120, marginLeft: 20}}
          selectedValue={selectedFaculty}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedFaculty(itemValue);
          }}>
          <Picker.Item label="IT" value="IT" />
          <Picker.Item label="BBA" value="BBA" />
        </Picker>
      </View>
    );
  };

  const onPressSubmit = () => {
    if (name === '') {
      alert('Please enter students full name!');
    } else if (address === '') {
      alert('Address is empty!');
    } else if (phone.length < 10) {
      alert('Please enter a valid phone number!');
    } else if (email === '') {
      alert('Phone is empty!');
    } else if (username === '') {
      alert('Please set a username!');
    } else if (password.length < 5) {
      alert('Password is not valid!');
    } else if (confirmPassword === '') {
      alert('Field cannot be empty!');
    } else {
      if (password !== confirmPassword) {
        alert('Password does not match!');
      } else {
        let signupData = {
          full_name: name,
          address: address,
          phone_number: phone,
          email: email,
          faculty: selectedFaculty,
          username: username,
          password: password,
          confirm_password: confirmPassword,
        };
        //console.log(signupData);
        //api;
        // .getAllUsername(username)
        // .then((response) => {
        //   if (response.length > 0) {
        //     alert('User already exists!');
        //     return;
        //   } else {
        api
          .createPost(signupData)
          .then((response) => {
            if (response.status === 422) {
              alert('Username already exists!');
              return;
            }
            alert('Sign up Successful!');
            // emptyFields();
            //navigation.navigate('AdminHomeScreen');
          })
          .catch((error) => {
            console.log('Error', error);
          });
        //   }
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
      }
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F3F1F1'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#1261A0',
          paddingTop: 50,
          padding: 20,
          borderBottomRightRadius: 160,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
            paddingLeft: 10,
            marginTop: 40,
          }}>
          Register a new student!
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.textInputView}>
          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Full Name</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Full name"
              onChangeText={(text) => setName(text)}></TextInput>
          </View>

          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Address"
              onChangeText={(text) => setAddress(text)}></TextInput>
          </View>

          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              placeholder="Phone Number"
              onChangeText={(text) => setPhone(text)}></TextInput>
          </View>

          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={styles.textInput}
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}></TextInput>
          </View>

          <View style={styles.facultyView}>
            <Text style={styles.labelText}>Faculty</Text>
            <PickerFacultyFunction style={styles.pickerStyle} />
          </View>

          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}></TextInput>
          </View>

          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}></TextInput>
          </View>

          <View style={styles.iconTextInputView}>
            <Text style={styles.labelText}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder=" Confirm Password"
              onChangeText={(text) => setConfirmPassword(text)}></TextInput>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.submitButton} onPress={onPressSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => props.navigation.navigate('AdminHomeScreen')}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,

    backgroundColor: '#F3F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headingText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
  facultyView: {
    flexDirection: 'row',
  },

  labelText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10,
    paddingLeft: 5,
  },
  textInput: {
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    height: 40,
    width: 350,
    marginLeft: 5,
  },

  submitText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  iconTextInputView: {
    borderWidth: 0,
    borderColor: 'white',
  },

  submitButton: {
    backgroundColor: 'black',
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 12,
  },
  cancelButton: {
    backgroundColor: 'red',
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },

  buttonView: {
    flexDirection: 'row-reverse',
    paddingTop: 20,
  },
});
