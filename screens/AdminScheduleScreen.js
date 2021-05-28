import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Text from '../Text';

export default function adminSchedule() {
  const [selectedFaculty, setSelectedFaculty] = useState('IT');
  const PickerFacultyFunction = () => {
    return (
      <View>
        <Picker
          style={{height: 50, width: 180, paddingLeft: 30}}
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

  const [selectedDay, setSelectedDay] = useState('Sunday');

  const Pickerfunction = () => {
    return (
      <View>
        <Picker
          style={{height: 50, width: 200, paddingLeft: 30}}
          selectedValue={selectedDay}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedDay(itemValue);
          }}>
          <Picker.Item label="Sunday" value="Sunday" />
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
        </Picker>
      </View>
    );
  };

  const ITBlock = () => {
    const [selectedITSubject, setSelectedITSubject] = useState('Programming');

    return (
      <View>
        <Picker
          style={{height: 50, width: 200, paddingLeft: 30}}
          selectedValue={selectedITSubject}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedITSubject(itemValue);
          }}>
          <Picker.Item label="Programming" value="Programming" />
          <Picker.Item label="Database" value="Database" />
          <Picker.Item label="Networking" value="Networking" />
          <Picker.Item
            label="Application Development"
            value="Application Development"
          />
        </Picker>
      </View>
    );
  };

  const BBABlock = () => {
    const [selectedBBASubject, setSelectedBBASubject] = useState('Marketing');

    return (
      <View>
        <Picker
          style={{height: 50, width: 200, paddingLeft: 30}}
          selectedValue={selectedBBASubject}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedBBASubject(itemValue);
          }}>
          <Picker.Item label="Marketing" value="Marketing" />
          <Picker.Item label="Accounting" value="Accounting" />
          <Picker.Item label="Economics" value="Economics" />
          <Picker.Item label="Business law" value="Business law" />
        </Picker>
      </View>
    );
  };

  // <DropDownPicker style={{width:150, backgroundColor:'white',position:'relative',zIndex:100}}
  //               open={open1}
  //               value={value1}
  //               items={Object.keys(exerise).map(l=>({
  //                 label:exerise[l].name,
  //                 value: exerise[l].name,
  //                 key: l
  //               }))}
  //               onChangeValue={(items)=>{
  //                 setExerType(items.label)
  //               }}
  //               setOpen={setOpen1}
  //               setValue={setValue1}
  //               setItems={setItems1}
  //               onChangeValue={(value) => {
  //                 setExerType(value)
  //               }}
  //               />

  const FacultyChoice = () => {
    if (selectedFaculty === 'IT') {
      return <ITBlock />;
    } else {
      return <BBABlock />;
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.textInputView}>
            <Text style={styles.labelDayText}>Day</Text>
            <Pickerfunction />
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelGradeText}>Faculty</Text>
            <PickerFacultyFunction />
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelTimeText}>7:00 - 8:30</Text>
            <FacultyChoice />
          </View>

          <View style={styles.textInputView}>
            <Text style={styles.labelNineText}>9:00 - 10:30</Text>
            <FacultyChoice />
          </View>

          <View style={styles.buttonsView}>
            <View style={styles.addButtonView}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  alert('Schedule has been added!');
                }}>
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.addButtonView}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 
         
         IF SELECTED VALUE IS BBA
         BBA VIEW RENDER
         ELSE IT RENDER

         {
           selectedFac === 'it' ? 

          <ITBLOCK>
           :

           <Vor
         }
         
         */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: 'white',
  },
  secondContainer: {
    backgroundColor: 'skyblue',
    margin: 0,
    paddingTop: 0,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 10,
    borderRadius: 20,
  },
  textInput: {
    borderColor: 'black',
    borderBottomWidth: 0,
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    marginLeft: 10,
    padding: 0,
    borderRadius: 5,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingLeft: 100,
  },
  labelGradeText: {
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 10,
    paddingRight: 60,
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
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
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
    paddingTop: 20,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',

    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cancelText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 25,
  },
});
