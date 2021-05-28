import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {useSelector} from 'react-redux';
import Text from '../Text';
import * as api from '../src/API';
import user from '../src/store/reducers/user.reducer';

export default function result() {
  const {faculty} = useSelector((state) => state.user);
  const {username} = useSelector((state) => state.user);
  //const [username1, setUsername1] = useState('');
  //console.log('username1', username.username);
  const [subject1, setSubject1] = useState('');

  const [subject2, setSubject2] = useState('');

  const [subject3, setSubject3] = useState('');

  const [subject4, setSubject4] = useState('');

  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');
  const [result4, setResult4] = useState('');

  const [tableHead, setTableHead] = useState(['S.N', 'Subject', 'Grade']);
  const [tableData, setTableData] = useState([
    ['1', subject1, 'B'],
    ['2', subject2, 'C'],
    ['3', subject3, 'B+'],
    ['4', subject4, 'A'],
  ]);

  React.useEffect(() => {
    if (faculty.faculty === 'IT') {
      setSubject1('Programming');
      setSubject2('Database');
      setSubject3('Networking');
      setSubject4('Application Development');
    }
    if (faculty.faculty === 'BBA') {
      setSubject1('Business Law');
      setSubject2('Economics');
      setSubject3('Accounting');
      setSubject4('Marketing');
    }
    // setUsername1(username.username);
    // console.log(username.username);
    // console.log('username100', username1);
    api.getResult(username.username).then((response) => {
      console.log('username', username.username);
      console.log('hello', response.data[0].subject1);
      // console.log('hello2', response[0].sub1);
      setResult1(response.data[0].subject1);
      setResult2(response.data[0].subject2);
      setResult3(response.data[0].subject3);
      setResult4(response.data[0].subject4);
      // console.log('Subject1 result', result1);
    });
  }, []);

  const subjectsObj = {subject1, subject2, subject3, subject4};
  //console.log(subjectsObj);
  const subjects = [
    ['1', subject1, result1],
    ['2', subject2, result2],
    ['3', subject3, result3],
    ['4', subject4, result4],
  ];

  //console.log("Result faculty:",faculty);
  return (
    <View style={{flex: 1, backgroundColor: '#1261A0'}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 25,
              paddingLeft: 40,
              marginTop: 40,
            }}>
            Result of {username.username} for {faculty.faculty}
          </Text>
        </View>
      </View>
      <View style={{flex: 2, backgroundColor: 'white', position: 'relative'}}>
        <View style={styles.khaltiWrapper}>
          <View style={{marginTop: 10}}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#1261A0'}}>
              <Row
                data={tableHead}
                widthArr={[50, 170, 80]}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows
                data={subjects}
                widthArr={[50, 170, 80]}
                textStyle={styles.text}
              />
            </Table>
          </View>
        </View>
      </View>
    </View>

    // <View style={styles.container}>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-evenly',
    //       alignItems: 'center',
    //       padding: 0,
    //     }}>
    //     <Text style={styles.impText}>Username: </Text>
    //     <Text style={styles.impText}>{username.username}</Text>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-evenly',
    //       alignItems: 'center',
    //       padding: 5,
    //     }}>
    //     <Text style={styles.impText}>Faculty: </Text>
    //     <Text style={styles.impText}>{faculty.faculty}</Text>
    //   </View>
    //   <View>
    //     <Table borderStyle={{borderWidth: 1, borderColor: 'dodgerblue'}}>
    //       <Row
    //         data={tableHead}
    //         widthArr={[50, 200, 100]}
    //         style={styles.head}
    //         textStyle={styles.text}
    //       />
    //       <Rows
    //         data={subjects}
    //         widthArr={[50, 200, 100]}
    //         textStyle={styles.text}
    //       />
    //     </Table>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    fontSize: 15,
    margin: 6,
    fontWeight: 'bold',
    color: '#452650',
  },
  impText: {
    fontSize: 20,
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
});

//  export default class result extends React.Component{
//      constructor(props){
//          super(props);
//          this.state = {
//             tableHead: ['S.N', 'Subject', 'Grade'],
//             tableData: [
//               ['1', 'Maths',  'B'],
//               ['2', 'Science', 'C'],
//               ['3', 'Social', 'B+'],
//               ['4', 'English',  'A']
//             ]
//           }
//      }
//      render(){
//          const state = this.state;
//          return(
//             <View style={styles.container}>
//             <Table borderStyle={{borderWidth: 1, borderColor: 'dodgerblue'}}>
//               <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//               <Rows data={state.tableData} textStyle={styles.text}/>
//             </Table>
//           </View>

//          );
//      }
