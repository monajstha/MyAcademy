import React, {useState} from 'react';
import {Image} from 'react-native';
import {StyleSheet, FlatList} from 'react-native';
import {View} from 'react-native';
import * as api from '../src/API';
import {Picker} from '@react-native-picker/picker';
import Text from '../Text';
import {Linking} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
// import CalendarPicker from 'react-native-calendar-picker';

// const renderItem = ({item}) => (
//   <Item
//     name={item.full_name}
//     faculty={item.faculty}
//     username={item.username}
//     email={item.email}
//     phoneNum={item.phone_number}
//     address={item.address}
//   />
// );

// const Item = ({name, faculty, username, email, phoneNum, address}) => (
//   <View style={{backgroundColor: 'gray', margin: 10}}>
//     <View
//       style={{
//         backgroundColor: 'white',
//         borderBottomRightRadius: 20,
//         padding: 0,
//       }}>
//       <View style={{backgroundColor: '#1261A0', alignItems: 'center'}}>
//         <Text
//           style={{
//             color: 'white',
//             fontSize: 18,
//             fontWeight: 'bold',
//             padding: 10,
//             borderRadius: 80,
//           }}>
//           {name}
//         </Text>
//       </View>
//       <View style={{padding: 10, marginLeft: 5, justifyContent: 'center'}}>
//         <Text style={{fontSize: 15, padding: 5}}>Faculty: {faculty}</Text>
//         <Text style={{fontSize: 15, padding: 5}}>Username: {username}</Text>
//         <Text style={{fontSize: 15, padding: 5}}>Address: {address}</Text>
//         <View style={{flexDirection: 'row'}}>
//           <TouchableOpacity
//             onPress={() => {
//               Linking.openURL('tel:', phoneNum);
//             }}>
//             <Image
//               style={{height: 30, width: 30}}
//               source={require('../assets/call.png')}
//             />
//           </TouchableOpacity>
//           <Text style={{fontSize: 15, padding: 5}}>{phoneNum}</Text>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <TouchableOpacity
//             onPress={() => {
//               Linking.openURL('mailto:', phoneNum);
//             }}>
//             <Image
//               style={{height: 30, width: 30}}
//               source={require('../assets/gmail.png')}
//             />
//           </TouchableOpacity>
//           <Text style={{fontSize: 15, padding: 5}}>{email}</Text>
//         </View>
//       </View>
//     </View>
//   </View>

// );

export default function viewStudents() {
  const [isLoading, setLoading] = useState(true);
  const [studentsData, setStudentsData] = useState([]);

  const renderItem = ({item}) => (
    <Item
      name={item.full_name}
      faculty={item.faculty}
      username={item.username}
      email={item.email}
      phoneNum={item.phone_number}
      address={item.address}
    />
  );

  const Item = ({name, faculty, username, email, phoneNum, address}) => (
    <View style={{backgroundColor: 'gray', margin: 10}}>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomRightRadius: 20,
          padding: 0,
        }}>
        <View style={{backgroundColor: '#1261A0', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              padding: 10,
              borderRadius: 80,
            }}>
            {name}
          </Text>
        </View>
        <View style={{padding: 10, marginLeft: 5, justifyContent: 'center'}}>
          <Text style={{fontSize: 15, padding: 5}}>Faculty: {faculty}</Text>
          <Text style={{fontSize: 15, padding: 5}}>Username: {username}</Text>
          <Text style={{fontSize: 15, padding: 5}}>Address: {address}</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`tel:${phoneNum}`);
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../assets/call.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 15, padding: 5}}>{phoneNum}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`mailto:${email}`);
              }}>
              <Image
                style={{height: 30, width: 30}}
                source={require('../assets/gmail.png')}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 15, padding: 5}}>{email}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  React.useEffect(() => {
    setLoading(true);
    api.getStudentsList().then((response) => {
      console.log('response', response);
      setStudentsData(response);
      console.log('Students Data', studentsData);
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F3F1F1'}}>
      <FlatList
        data={studentsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
  },
  wrapper: {
    flexDirection: 'row',
  },
  labelText: {
    fontSize: 15,
    paddingRight: 10,
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
  },
});
