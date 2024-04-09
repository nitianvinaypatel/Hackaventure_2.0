import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, icons } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../components/HeaderWithBack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';





const DailyReport4 = ({ navigation }) => {

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
          <Text style={{ fontSize: 20, fontWeight: '700', marginHorizontal: 10, textAlign: 'center' }}>Natural Calamities Within the District</Text>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10, marginTop: 20 }}>Place of Occurrence:</Text>
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
        <View >
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Type of Calamity:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter type of Calamity"
            placeholderTextColor={COLORS.black}

          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>No. of Casualty/Victim with Particulars:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Number of Casualty/Victim"
            placeholderTextColor={COLORS.black}

          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Particulars of damage caused by calamity with rough estimate of cases/properties/detais etc:</Text>
          <TextInput
            style={[styles.input, { textAlignVertical: 'top' }]}
            placeholder="Enter Particulars of damage caused by calamity with rough estimate of cases/properties/detais etc."
            placeholderTextColor={COLORS.black}
            multiline={true}
            numberOfLines={5}

          />
        </View>

        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Assistance made by Govt. bodies/NGOs etc:</Text>
          <TextInput
            style={[styles.input, { textAlignVertical: 'top' }]}
            placeholder="Enter Assistance made by Govt. bodies/NGOs etc"
            placeholderTextColor={COLORS.black}
            multiline={true}
            numberOfLines={3}
          />
        </View>


        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Expected time of Clearence in case of road blocks:</Text>
          <TextInput
            style={[styles.input, { textAlignVertical: 'top' }]}
            placeholder="Expected time of Clearence"
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

export default DailyReport4


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
    marginTop: 10,
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