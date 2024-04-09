import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView,TouchableOpacity} from 'react-native';
import { COLORS, icons } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../components/HeaderWithBack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DailyReport1 = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderWithBack title={"Daily Report"} imageSource={icons.back} onPress={() => navigation.goBack()} />

        <ScrollView style={{ flex: 1, marginBottom: 60}}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: '700', marginHorizontal: 10, textAlign:'center'}}>Crime Reports & Case Registered During the last 24 hours</Text>
            <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 , marginTop:20 }}>Name of PS/OP with Dist./Sub Div:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name of PS/OP with Dist./Sub Div"
              placeholderTextColor={COLORS.black}
              
            />
          </View>
          <View >
            <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Case Registered (FIR No.):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Case Registered (FIR No.)"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Sections of law booked against the Culprit:</Text>
            <TextInput
              style={styles.input}
              placeholder="Sections of law booked against the Culprit"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Gist of FIR:</Text>
            <TextInput
              style={[styles.input, { textAlignVertical: 'top' }]}
              placeholder="Enter Gist of FIR"
              placeholderTextColor={COLORS.black}
              multiline={true}
            numberOfLines={3}
            />
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 10 }}>Person(s) Arrested in C/W the Case with their Particulars:</Text>
            <TextInput
              style={[styles.input, { textAlignVertical: 'top' }]}
              placeholder="Enter Person(s) Arrested in C/W the Case with their Particulars."
              placeholderTextColor={COLORS.black}
              multiline={true}
              numberOfLines={3}
            />
          </View>

          <View>
            <Text style={{ fontSize: 16, fontWeight: '700', marginHorizontal: 20 }}>Action Taken:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Action Taken"
              placeholderTextColor={COLORS.black}
              
            />
          </View>


          <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Generate Report</Text>
        </TouchableOpacity>
          
          <View style={{flex:1, height:50}}>

          </View>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default DailyReport1


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
    marginTop:10,
    marginHorizontal:10,
    height:hp('6'),
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