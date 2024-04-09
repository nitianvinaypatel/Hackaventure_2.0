import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { COLORS, icons } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../components/HeaderWithBack';

const WLWeeklyReport = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderWithBack title={"Weekly Report"} imageSource={icons.back} onPress={() => navigation.goBack()} />
      <View style={{flexDirection:'column'}}>
        <Image
          source={require('../../../assets/images/report.jpg')} // Replace with your image path
          style={{width:400, height:600,resizeMode:'contain'}}
        />
        <TouchableOpacity style={{ justifyContent:'center',alignItems:'center', backgroundColor: COLORS.primary,
        paddingHorizontal: 20,marginHorizontal:30,paddingVertical: 10,borderRadius: 10,
      }}>
          <Text style={{color:COLORS.white}}>Download Pdf</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WLWeeklyReport;
