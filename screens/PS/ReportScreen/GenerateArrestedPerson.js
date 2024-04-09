import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,TouchableOpacity} from 'react-native';
import { COLORS, icons } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithBack from '../../../components/HeaderWithBack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const GenerateArrestedPerson = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderWithBack title={"Arrested Person Report"} imageSource={icons.back} onPress={() => navigation.goBack()} />

        <ScrollView style={{ flex: 1, marginBottom: 60}}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>District:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter District Name"
              placeholderTextColor={COLORS.black}
              
            />
          </View>
          <View >
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Police Station:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Police Station Name"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>FIR No:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter FIR Number"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Relevent Act:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Relevent Act"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Applicable Section(s):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Applicable Section(s)"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Date Of Arrest:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Date"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Status Of Remand:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Status Of Remand"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Status Of Bail:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Status Of Bail"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Name of the Accused:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name of the Accused"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Age"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          
          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Alias:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Alias"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Mobile Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Mobile Number"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>ID Card Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Id Card Name"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>ID Card Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Id Card Number"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Nationality:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Nationality"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Present Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Present Address"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Parmanent Address:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Parmanent Address"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Religion:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Religion"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Gender:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Gender"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Height(in cm):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Height in Centimeters"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Weight(in Kg):</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Weight in Kilograms"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Build Type:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Build Type"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Complexion Type:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Complexion Type"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Face Type:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Face Type"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Forehead Type:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Forehead Type"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Other Identification Marks:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Other Identification Marks"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Occupation:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Occupation"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Economic Status:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Economic Status"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Educational Status:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Educational Status"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <View>
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Whether member of a criminal gang:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Yes or No"
              placeholderTextColor={COLORS.black}
              
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Generate Arrested Person Report</Text>
        </TouchableOpacity>
          
          <View style={{flex:1, height:50}}>

          </View>
          
        </ScrollView>
    </SafeAreaView>
  )
}

export default GenerateArrestedPerson;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontWeight: '400',
    color: COLORS.black,
    borderWidth: 0.5,

  },
  loginButton: {
    marginTop:20,
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
    fontSize: 18,
  },
});
