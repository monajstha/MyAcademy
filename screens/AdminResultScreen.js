import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as api from '../src/API';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Text from '../Text';

const FACULTIES = [
  {
    faculty_name: 'BBA',
    subjects: [
      {
        id: 1,
        name: 'Accounting',
        grade: '',
      },
      {
        id: 2,
        name: 'Economics',
        grade: '',
      },
      {
        id: 3,
        name: 'Marketing',
        grade: '',
      },
      {
        id: 4,
        name: 'Business law',
        grade: '',
      },
    ],
  },
  {
    faculty_name: 'IT',
    subjects: [
      {
        id: 11,
        name: 'Programming',
        grade: '',
      },
      {
        id: 12,
        name: 'Database',
        grade: '',
      },
      {
        id: 13,
        name: 'Networking',
        grade: '',
      },
      {
        id: 14,
        name: 'Application Development',
        grade: '',
      },
    ],
  },
];

export default function adminResult(props) {
  const [username, setUsername] = React.useState('');

  const [faculties, setFaculties] = useState(FACULTIES);

  // React.useEffect(() => {
  //   setLoading(true);
  //   api.getStudentsList().then((response) => {
  //     console.log('response', response);
  //     setStudentsData(response);
  //     console.log('Students Data', studentsData);
  //   });
  // }, []);

  const PickerGradeFunction = ({onSelectGrade, grade}) => {
    const [selectedGrade, setSelectedGrade] = useState(grade || 'A+');

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
          style={{
            height: 50,
            width: 100,
            paddingLeft: 30,
            borderWidth: 2,
            borderColor: 'blue',
          }}
          selectedValue={selectedGrade}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedGrade(itemValue);
            onSelectGrade(itemValue);
          }}>
          <Picker.Item label="A+" value="A+" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B+" value="B+" />
          <Picker.Item label="B" value="B" />
          <Picker.Item label="C" value="C" />
          <Picker.Item label="D" value="D" />
        </Picker>
      </View>
    );
  };

  const [selectedFaculty, setSelectedFaculty] = useState('IT');
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
          style={{
            height: 40,
            // width: 100,
            marginLeft: 10,
          }}
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

  // const [selectedStudent, setSelectedStudent] = useState();
  // const PickerFacultyFunction = () => {
  //   return (
  //     <View
  //       style={{
  //         borderWidth: 1,
  //         marginLeft: 20,
  //         marginTop: 10,
  //         // backgroundColor: 'black',
  //         borderColor: 'black',
  //         borderRadius: 10,
  //       }}>
  //       <Picker
  //         style={{
  //           height: 40,
  //           // width: 100,
  //           marginLeft: 10,
  //         }}
  //         selectedValue={selectedStudent}
  //         onValueChange={(itemValue, itemIndex) => {
  //           setSelectedStudent(itemValue);
  //         }}>
  //           {Object.keys(studentsData).map(item=>({

  //           })}
  //           {Object.keys(studentsData).map(item=>{<Picker.Item label="IT" value="IT" />}

  //       </Picker>
  //     </View>
  //   );
  // };

  const ITPickerBlock = ({selectedValue}) => {
    const [selectedITSubject, setSelectedITSubject] = useState(selectedValue);

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
          style={{height: 50, width: 220, paddingLeft: 30}}
          selectedValue={selectedITSubject}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedITSubject(itemValue);
            // onAddITSubject(itemValue);
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

  const BBAPickerBlock = ({selectedValue}) => {
    const [selectedBBASubject, setSelectedBBASubject] = useState(selectedValue);

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

  const FacultyChoice = ({value}) => {
    if (selectedFaculty === 'IT') {
      return <ITPickerBlock selectedValue={value} />;
    } else {
      return <BBAPickerBlock selectedValue={value} />;
    }
  };

  const onAdd = () => {
    if (username === '') {
      alert('Username cannot be empty!');
    } else {
      let result = {
        username: username,
        sub1: selectedSubjects[0].grade,
        sub2: selectedSubjects[1].grade,
        sub3: selectedSubjects[2].grade,
        sub4: selectedSubjects[3].grade,
      };
      api
        .addresultPost(result)
        .then((response) => {
          if (response.status === 422) {
            alert('Result already exists!');
            return;
          }
          alert('Result has been added!');
          console.log('result data', response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    /* if (username === ''){
      alert('Please enter students username!');
    }
    else{
       
      console.log(selectedSubjects[1].grade);
    }*/
  };

  React.useEffect(() => {
    let topIndex = faculties.findIndex(
      (faculty) => faculty.faculty_name === selectedFaculty,
    );
    setSelectedSubjects(faculties[topIndex]?.subjects);
  }, [selectedFaculty]);
  const [selectedSubjects, setSelectedSubjects] = React.useState([]);

  const onChangeGrade = (index, grade) => {
    setFaculties((prevState) => {
      let topIndex = faculties.findIndex(
        (faculty) => faculty.faculty_name === selectedFaculty,
      );
      prevState[topIndex].subjects[index].grade = grade;

      return prevState;
    });
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F3F1F1'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#1261A0',
          paddingTop: 100,
          padding: 20,
          borderBottomRightRadius: 200,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#F3F1F1',
            fontSize: 20,
            paddingLeft: 10,
            marginTop: 40,
          }}>
          Add result for students!
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <View style={styles.textInputView1}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter Student Username'}
              onChangeText={(text) => {
                setUsername(text);
              }}></TextInput>
          </View>

          <View style={styles.textInputView1}>
            <Text style={styles.labelText}>Select the student's faculty</Text>
            <PickerFacultyFunction />
          </View>

          {selectedSubjects.map((item, index) => (
            <View key={index} style={styles.textInputView}>
              <FacultyChoice value={item.name} />
              <PickerGradeFunction
                value={item.grade}
                onSelectGrade={(grade) => onChangeGrade(index, grade)}
              />
            </View>
          ))}

          <View style={styles.buttonsView}>
            <View style={styles.addButtonView}>
              <TouchableOpacity style={styles.addButton} onPress={onAdd}>
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
    paddingLeft: 0,
    paddingRight: 10,
    backgroundColor: '#F3F1F1',
  },
  secondContainer: {
    backgroundColor: '#F3F1F1',
    marginBottom: 10,
    paddingTop: 0,
    paddingLeft: 20,
    paddingBottom: 10,
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

  labelText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10,
    paddingLeft: 10,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 0,
  },
  textInputView1: {
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    paddingTop: 10,
    //paddingLeft: 100,
  },
  addButton: {
    backgroundColor: 'black',
    width: 150,
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
    paddingLeft: 30,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    width: 150,
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
