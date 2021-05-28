import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function payment(props) {
  const {token, pin} = props.route.params;
  const [otp, setOtp] = useState();

  const handlePayment = () => {
    fetch('https://khalti.com/api/v2/payment/confirm/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        public_key: 'test_public_key_a8dca76336294808a12cbba3594ab1de',
        token: token,
        confirmation_code: otp,
        transaction_pin: pin,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        alert('Your payment has been received!');

        fetch('http://192.168.10.64:3000/payment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            token: responseJson.token,
            amount: responseJson.amount,
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('Hello');
          });
      })
      .catch((error) => {
        alert('Something went wrong');
      });
  };
  return (
    <View style={{backgroundColor: '#350457', flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={{width: 300, height: 150}}
            source={{
              uri: 'https://d7vw40z4bofef.cloudfront.net/static/img/logo1.png',
            }}
          />
        </View>
      </View>
      <View style={{flex: 1.5, backgroundColor: 'white', position: 'relative'}}>
        <View style={styles.khaltiWrapper}>
          <View style={{marginTop: 20}}>
            <View>
              <Text style={styles.textVerification}>OTP Code</Text>
              <Text
                style={{textAlign: 'center', color: 'grey', paddingTop: 10}}>
                We have sent 6 digit code in your device
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 30,
              }}>
              <TextInput
                style={styles.textbox}
                maxLength={6}
                keyboardType="numeric"
                onChangeText={(text) => setOtp(text)}
              />
              {/* <TextInput
                style={styles.textbox}
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.textbox}
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.textbox}
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.textbox}
                maxLength={1}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.textbox}
                maxLength={1}
                keyboardType="numeric"
              /> */}
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#452650',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  marginTop: 40,
                  borderRadius: 10,
                  marginBottom: 20,
                }}
                onPress={() => handlePayment()}>
                <Text
                  style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  khaltiWrapper: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    // borderWidth: 1,
    padding: 10,
    position: 'absolute',
    top: -50,
    left: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  textbox: {
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    marginTop: 10,
    color: 'black',
    paddingLeft: 10,
    marginRight: 10,
    width: 200,
    height: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10,
  },
  textVerification: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
