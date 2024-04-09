import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, icons } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../components/HeaderWithBack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const DailyReport7 = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderWithBack title={"Daily Report"} imageSource={icons.back} onPress={() => navigation.goBack()} />

      <ScrollView style={{ flex: 1, marginBottom: 60 }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: '700', marginHorizontal: 10, textAlign: 'center' }}>Any Other Important Information/Remarks</Text>
          <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10, marginTop: 20 }}>Status:</Text>
          <TextInput
            style={[styles.input, { textAlignVertical: 'top' }]}
            placeholder="Enter status of any Other Important Information/Remarks."
            placeholderTextColor={COLORS.black}
            multiline={true}
            numberOfLines={3}
            

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

export default DailyReport7


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