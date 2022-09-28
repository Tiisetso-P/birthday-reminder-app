import * as React from 'react';
import {useState} from 'react'
import { Text, View, StyleSheet, SafeAreaView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import EventCalendar from 'react-native-events-calendar'

import DatePicker from 'react-native-modern-datepicker';


let {width} = Dimensions.get('window')

export default function App() {


  const [start, setStart] = useState('')

  const [end, setEnd] = useState('')

  const [title, setTitle] = useState('')

  const [summary, setSummary] = useState('')

 const [events, setEvents] = useState([
    {
      start: '2022-09-19',
      end: '2022-09-19 ',
      title: 'New Year Party',
      summary: 'xyz Location',
    },
   
  ]);


 const addTask = (() =>{
    setEvents((events) => [...events, {start:start, end:end, title:title, summary:summary}])
    console.log(events)
  })

    const eventClicked = (event) => {
    alert(JSON.stringify(event));
  };

  const TimePickerExample = () => {
  const [time, setTime] = useState('');

  return (
    <DatePicker
      mode="time"
      minuteInterval={3}
      onTimeChange={selectedTime => setTime(selectedTime)}
    />
  );
};

  return (
    <SafeAreaView>

    <View>
    <TextInput placeholder='Start date' onChangeText={(task) => setStart(task)}></TextInput>

     <TextInput placeholder='End date' onChangeText={(task) => setEnd(task)}></TextInput>

     <TextInput placeholder='Title' onChangeText={(task) => setTitle(task)}></TextInput>

     <TextInput placeholder='Summary' onChangeText={(task) => setSummary(task)}></TextInput>

    <Text></Text>

    <TouchableOpacity onPress={addTask}>Add</TouchableOpacity>

  
    </View>

    <View style={styles.container}>

  <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}
         
          scrollToFirst
        />

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

