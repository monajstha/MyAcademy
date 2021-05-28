import React, {useState} from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as api from '../src/API';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Text from '../Text';
//import {response} from 'express';

export default function adminFeeScreen(props) {
  const [username, setUsername] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('June');
  const [monthlyFee, setMonthlyFee] = useState();
  const [dueFee, setDueFee] = useState();
  const [discount, setDiscount] = useState();
  const [totalFees, setTotalFees] = useState();

  const MonthSelection = () => {
    return (
      <View
        style={{
          borderWidth: 1,
          marginLeft: 5,
          marginTop: 10,
          // backgroundColor: 'black',
          borderColor: 'black',
          borderRadius: 10,
        }}>
        <Picker
          style={{
            height: 40,
            // width: 180
            // marginRight: 50,
          }}
          selectedValue={selectedMonth}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedMonth(itemValue);
            //onAddITSubject(itemValue);
          }}>
          <Picker.Item label="January" value="January" />
          <Picker.Item label="February" value="February" />
          <Picker.Item label="March" value="March" />
          <Picker.Item label="April" value="April" />
          <Picker.Item label="May" value="May" />
          <Picker.Item label="June" value="June" />
          <Picker.Item label="July" value="July" />
          <Picker.Item label="August" value="August" />
          <Picker.Item label="September" value="September" />
          <Picker.Item label="October" value="October" />
          <Picker.Item label="November" value="November" />
          <Picker.Item label="December" value="December" />
        </Picker>
      </View>
    );
  };

  const calculation = () => {
    if (username === '') {
      alert('Please enter student Username!');
    } else if (monthlyFee === '') {
      alert('Please enter monthly fees!');
    } else if (dueFee === '') {
      alert('Please enter due fees!');
    } else if (discount === '') {
      alert('Please enter discount amount!');
    } else {
      let a = parseInt(monthlyFee);
      let b = parseInt(dueFee);
      let c = parseInt(discount);
      let sum = a + b - c;
      console.log('fee username', username);
      console.log('month', selectedMonth);
      console.log('sum', sum);
      setTotalFees(parseInt(sum));
    }
    console.log('totalfee', totalFees);
  };

  const operation = () => {
    if (username === '') {
      alert('Username cannot be empty!');
    } else {
      let feeData = {
        username: username,
        month: selectedMonth,
        monthlyFee: monthlyFee,
        dueFee: dueFee,
        discount: discount,
        totalFee: totalFees,
      };
      console.log('feeData', feeData);
      if (feeData.totalFee === 'undefined') {
        alert('Total fee is empty!');
      } else {
        api
          .addFeePost(feeData)
          .then((response) => {
            alert('Fee has been added!');
            // ToastAndroid.show('Fee has been added!');
            // ToastAndroid.SHORT;
            console.log('fee api response', response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F3F1F1'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#1261A0',
          paddingTop: 80,
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
          Add fee details for students!
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter Student Username'}
              onChangeText={(text) => setUsername(text)}></TextInput>
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Select a Month:</Text>
            <MonthSelection />
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Monthly Fees</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter monthly fee'}
              keyboardType="numeric"
              onChangeText={(text) =>
                setMonthlyFee(parseInt(text))
              }></TextInput>
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Due Fees</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Due fee till the date'}
              keyboardType="numeric"
              onChangeText={(text) => setDueFee(parseInt(text))}></TextInput>
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Discount</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter discount amount'}
              keyboardType="numeric"
              onChangeText={(text) => setDiscount(parseInt(text))}></TextInput>
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelText}>Total Fee:</Text>
            <Text style={styles.valueText}>{totalFees}</Text>
          </View>

          <View style={styles.buttonsView}>
            <View style={styles.addButtonView}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  calculation(), operation();
                }}>
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.addButtonView}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => {
                  props.navigation.navigate('AdminHomeScreen');
                }}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5,

    backgroundColor: '#F3F1F1',
  },
  secondContainer: {
    backgroundColor: '#F3F1F1',
    marginBottom: 10,
    paddingTop: 0,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingRight: 10,
    borderRadius: 20,
  },
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    marginLeft: 5,
    padding: 0,
    borderRadius: 5,
  },
  textInputView: {
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    paddingTop: 10,
    // paddingLeft: 100,
  },
  labelText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 5,
  },
  labelGradesText: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 10,
    paddingRight: 5,
  },
  labelDayText: {
    paddingRight: 50,
    fontSize: 20,
    paddingTop: 10,
    fontWeight: '400',
  },
  labelTimeText: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 10,
    paddingLeft: 0,
  },
  labelNineText: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 10,
    paddingLeft: 0,
  },
  addButton: {
    backgroundColor: 'black',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  addText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 25,
  },
  addButtonView: {
    paddingTop: 15,
    paddingLeft: 20,
  },
  buttonsView: {
    paddingTop: 0,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
  },
  cancelButton: {
    backgroundColor: 'red',

    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  cancelText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 25,
  },
  totalfeeText: {
    marginRight: 110,
    fontSize: 20,
  },
  valueText: {
    fontSize: 20,
    marginRight: 80,
  },
});
