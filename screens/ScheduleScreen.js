import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {
  DateSelectionCalendar,
  DefaultTheme,
  Theme,
} from 'react-native-easy-calendar';
import moment from 'moment';
import Text from '../Text';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';

// import CalendarPicker from 'react-native-calendar-picker';

// const CustomTheme : Theme = {
//     ...DefaultTheme,
//     extraDayText: {
//       color: 'orange',
//     },
//   };
export default function schedule() {
  const [subject1, setSubject1] = useState('');
  const [sub1Time, setSub1Time] = useState('');

  const [subject2, setSubject2] = useState('');
  const [sub2Time, setSub2Time] = useState('');

  const [subject3, setSubject3] = useState('');
  const [sub3Time, setSub3Time] = useState('');

  const [subject4, setSubject4] = useState('');
  const [sub4Time, setSub4Time] = useState('');

  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));

  const [weekDay, setWeekDay] = useState('');

  const {faculty} = useSelector((state) => state.user);

  console.log(faculty);

  React.useLayoutEffect(() => {
    if (faculty.faculty === 'IT') {
      setSubject1('Database');
      setSubject2('Programming');
      setSubject3('Networking');
      setSubject4('Application Development');
    }
    if (faculty.faculty === 'BBA') {
      setSubject1('Business Law');
      setSubject2('Economics');
      setSubject3('Accounting');
      setSubject4('Marketing');
    }
    xyz(weekDay);
  }, []);

  const xyz = (weekDay) => {
    if (weekDay === 'Sunday') {
      setSub1Time('7:00-8:30');
      setSub2Time('9:00-10:30');
      setSub3Time('11:00-12:00');
      setSub4Time('1:30-3:00');
    } else if (weekDay === 'Monday') {
      setSub1Time('7:30-9:00');
      setSub2Time('9:30-11:00');
      setSub3Time('11:30-1:00');
      setSub4Time('1:30-3:00');
    } else if (weekDay === 'Tuesday') {
      setSub1Time('9:00-8:30');
      setSub2Time('9:00-10:30');
      setSub3Time('12:00-1:30');
      setSub4Time('2:00-3:00');
    } else if (weekDay === 'Wednesday') {
      setSub1Time('10:00-8:30');
      setSub2Time('9:00-10:30');
      setSub3Time('12:00-1:30');
      setSub4Time('2:00-3:00');
    } else if (weekDay == 'Thursday') {
      setSub1Time('11:00-8:30');
      setSub2Time('9:00-10:30');
      setSub3Time('12:00-1:30');
      setSub4Time('2:00-3:00');
    } else if (weekDay == 'Friday') {
      setSub1Time('12:00-8:30');
      setSub2Time('9:00-10:30');
      setSub3Time('12:00-1:30');
      setSub4Time('2:00-3:00');
    } else {
      setSub1Time('--');
      setSub2Time('--');
      setSub3Time('--');
      setSub4Time('--');
    }
  };

  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var d = new Date(currentDate);
  var day = () => setWeekDay(days[d.getDay()]);

  let onChangeDate = (date) => {
    day();
    setCurrentDate(date);

    xyz(weekDay);
  };
  return (
    <View>
      <DateSelectionCalendar
        onSelectDate={onChangeDate}
        selectedDate={currentDate}
      />
      <View style={styles.wrapper}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#1261A0',
            alignItems: 'center',
          }}>
          <Text style={styles.wrapperText}>
            Schedules for {faculty.faculty}
          </Text>
        </View>
        <View style={styles.detailsBar}>
          <Text style={styles.detailsText}>Time</Text>
          <Text style={styles.detailsText}>Subjects</Text>
        </View>

        <View style={styles.scheduleView}>
          <Text style={styles.scheduleText}>{sub1Time}</Text>
          <Text style={styles.scheduleText}>{subject1}</Text>
        </View>

        <View style={styles.scheduleView}>
          <Text style={styles.scheduleText}>{sub2Time}</Text>
          <Text style={styles.scheduleText}>{subject2}</Text>
        </View>

        <View style={styles.scheduleView}>
          <Text style={styles.scheduleText}>{sub3Time}</Text>
          <Text style={styles.scheduleText}>{subject3}</Text>
        </View>

        <View style={styles.scheduleView}>
          <Text style={styles.scheduleText}>{sub4Time}</Text>
          <Text style={styles.scheduleText}>{subject4}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scheduleView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#1261A0',
    padding: 5,
  },
  scheduleText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  wrapper: {
    backgroundColor: 'white',
    padding: 5,
  },
  wrapperText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  detailsBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    backgroundColor: '#1261A0',
  },
  detailsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
