import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, icons } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../components/HeaderWithBack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';





const DailyReport3 = ({ navigation }) => {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const formatTime = (inputTime) => {
    // Ensure time input is in HH:MM format
    if (inputTime.length === 2 && time.length < 3) {
      setTime(inputTime + ':');
    } else if (inputTime.length === 5 && time.length === 3) {
      setTime(inputTime.slice(0, 3) + ':' + inputTime.slice(3));
    } else {
      setTime(inputTime);
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderWithBack title={"Daily Report"} imageSource={icons.back} onPress={() => navigation.goBack()} />

      <ScrollView style={{ flex: 1, marginBottom: 60 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '700', marginHorizontal: 10, textAlign: 'center' }}>Important Incidents/Developments</Text>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10, marginTop: 20 }}>Type of Incident:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter type of Incident"
            placeholderTextColor={COLORS.black}

          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10, marginTop: 10 }}>Place of Occurrence:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Place of Occurrence"
            placeholderTextColor={COLORS.black}

          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Date of Occurrence:</Text>
          <TextInput
            style={styles.input}
            placeholder="YYYY-MM-DD"
            keyboardType="numeric"
            maxLength={10}
            value={date}
            onChangeText={setDate}
            placeholderTextColor={COLORS.black}

          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Time of Occurrence:</Text>
          <TextInput
            style={styles.input}
            placeholder="HH:MM"
            placeholderTextColor={COLORS.black}
            value={time}
            onChangeText={formatTime}
            maxLength={8}

          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>No. of Casualty/loss to life/property if any (with particulars)/Victim with particulars:</Text>
          <TextInput
            style={[styles.input, { textAlignVertical: 'top' }]}
            placeholder="Enter Number of Casualty/loss to life/property if any (with particulars)/Victim with particulars."
            placeholderTextColor={COLORS.black}
            multiline={true}
            numberOfLines={3}
          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Any other information & Remarks:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter any other information & Remarks."
            placeholderTextColor={COLORS.black}
            
          />
        </View>


        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Generate Report</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, height: 50 }}>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default DailyReport3


const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontWeight: '400',
    color: COLORS.black,
    borderWidth: 0.5,

  },
  loginButton: {
    marginTop: 16,
    marginHorizontal: 10,
    height: hp('6'),
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});