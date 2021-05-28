import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default function payment(props) {
  const [amount, setAmount] = useState();
  const [mobile, setMobile] = useState();
  const [pinNo, setPinNo] = useState();

  // const onDonate = () => {
  //   alert('Hello');
  //   fetch('https://khalti.com/api/v2/payment/initiate/', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       public_key: 'test_public_key_a8dca76336294808a12cbba3594ab1de',
  //       mobile: mobile,
  //       transaction_pin: pinNo,
  //       amount: amount * 100,
  //       product_identity: 'book/id-120',
  //       product_name: 'A Song of Ice and Fire',
  //       product_url: 'http://bookexample.com',
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       //if (responseJson.token) {
  //       props.navigation.navigate('PaymentScreen2', {
  //         token: responseJson.token,
  //       });
  //       console.log(responseJson);
  //       //}
  //     })
  //     .catch((error) => alert('Something went wrong'));
  // };

  const onDonate = () => {
    //Alert.alert('hahaha');
    // console.log('number', Number);
    fetch('https://khalti.com/api/v2/payment/initiate/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        public_key: 'test_public_key_a8dca76336294808a12cbba3594ab1de',
        mobile: mobile,
        transaction_pin: pinNo,
        amount: amount * 100,
        product_identity: 'book/id-120',
        product_name: 'A Song of Ice and Fire',
        product_url: 'http://bookexample.com',
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //if (responseJson.token) {
        props.navigation.navigate('PaymentScreen2', {
          token: responseJson.token,
          pin: pinNo,
        });
        console.log(responseJson);
        //}
      })
      .catch((error) => alert('Something went wrong'));
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
        <View style={styles.khatiWrapper}>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>Amount</Text>
            <TextInput
              placeholder="Enter amount"
              keyboardType="numeric"
              onChangeText={(text) => setAmount(text)}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#452650',
                marginTop: 5,
                padding: 10,
              }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Mobile number
            </Text>
            <TextInput
              placeholder="Enter mobile number"
              keyboardType="numeric"
              onChangeText={(text) => setMobile(text)}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#452650',
                marginTop: 5,
                padding: 10,
              }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>Pin No.</Text>
            <TextInput
              placeholder="Enter pin"
              secureTextEntry={true}
              keyboardType="numeric"
              onChangeText={(text) => setPinNo(text)}
              style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#452650',
                marginTop: 5,
                padding: 10,
              }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => onDonate()}
              style={{
                backgroundColor: '#452650',
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                marginTop: 40,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                Pay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  khatiWrapper: {
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
});
