import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../Text';
import * as api from '../src/API';
import {useSelector} from 'react-redux';

export default function fees(props) {
  const {username} = useSelector((state) => state.user);

  const [month, setMonth] = useState('');
  const [monthlyfee, setMonthlyfee] = useState();
  const [duefee, setDuefee] = useState();
  const [discount, setDiscount] = useState();
  const [totalfee, setTotalfee] = useState();
  const [feeUsername, setFeeUsername] = useState();

  React.useEffect(() => {
    api.getFee(username.username).then((response) => {
      console.log('std fee username', username.username);
      console.log('response', response);
      setMonth(response[0].month);
      setMonthlyfee(response[0].monthlyfee);
      setDuefee(response[0].duefee);
      setDiscount(response[0].discount);
      setTotalfee(response[0].totalfee);
      setFeeUsername(response[0].username);
    });
  });

  return (
    <View
      style={{
        backgroundColor: '#1261A0',
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            // backgroundColor: 'green',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 20,
              paddingLeft: 30,
              marginTop: 40,
            }}>
            Fee details for the month of {month}
          </Text>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: 'white', position: 'relative'}}>
        <View style={styles.khaltiWrapper}>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>Username</Text>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              {feeUsername}
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Monthly Fee
            </Text>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Rs {monthlyfee}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>Due Fee</Text>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Rs {duefee}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Discount amount
            </Text>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Rs {discount}
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Total Fee
            </Text>
            <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Rs {totalfee}
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              marginLeft: 10,

              // justifyContent: 'space-around',
              // alignItems: 'center',
              // flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => props.navigation.navigate('PaymentScreen')}>
              <Text style={styles.loginText}>Payment</Text>
            </TouchableOpacity>
            {/* <Text style={{fontWeight: 'bold', color: '#452650'}}>
              Total Fee
            </Text> */}
          </View>
        </View>
      </View>
    </View>

    // <View style={styles.container}>
    //   <View style={styles.headerView}>
    //     <Text style={styles.headerText}>
    //       Fee Details for the month of: {month}
    //     </Text>
    //   </View>

    //   <View style={styles.optionalView}></View>

    //   <View style={styles.wrapper}>
    //     <Text style={styles.wrapperText}>Monthly Fee: {monthlyfee}</Text>
    //   </View>

    //   <View style={styles.wrapper}>
    //     <Text style={styles.wrapperText}>Due Fee: {duefee}</Text>
    //   </View>

    //   <View style={styles.wrapper}>
    //     <Text style={styles.wrapperText}>Discount: {discount}</Text>
    //   </View>

    //   <View style={styles.wrapper}>
    //     <Text style={styles.wrapperText}>Total: {totalfee}</Text>
    //   </View>

    //   <View style={styles.loginView}>
    //     <TouchableOpacity
    //       style={styles.loginButton}
    //       onPress={() => props.navigation.navigate('PaymentScreen')}>
    //       <Text style={styles.loginText}>Payment</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 7,
  },
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
  headerView: {
    backgroundColor: 'dodgerblue',
    height: 35,
    width: '100%',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 20,
  },
  optionalView: {
    height: 200,
    borderWidth: 1,
    borderColor: 'dodgerblue',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    backgroundColor: '#0080ff',
  },
  wrapperText: {
    fontSize: 20,
    paddingLeft: 10,
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#1261A0',
    width: 290,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  loginView: {
    paddingTop: 30,
    paddingLeft: 90,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
});
