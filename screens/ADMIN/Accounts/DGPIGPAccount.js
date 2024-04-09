import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderWithBack from '../../../components/HeaderWithBack'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DGPIGPAccount = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white,  }}>

      <HeaderWithBack title={"DIG-IGP"} imageSource={icons.back} onPress={() => navigation.goBack()} />

      <ScrollView style={{ flex: 1, marginBottom: 60}}>

<View >
      <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 ,marginTop:10}}>Name of DGP-IGP:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name of DGP-IGP"
        placeholderTextColor={COLORS.black}
        
      />
    </View>

    <View >
      <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        placeholderTextColor={COLORS.black}
        
      />
    </View>

    <View >
      <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Email Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email Address"
        placeholderTextColor={COLORS.black}
        
      />
    </View>

    <View >
      <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Create ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Unique ID"
        placeholderTextColor={COLORS.black}
        
      />
    </View>

    
    <View >
      <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 10 }}>Create Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Unique Password"
        placeholderTextColor={COLORS.black}
        
      />
    </View>



     <TouchableOpacity style={styles.loginButton}>
    <Text style={styles.loginButtonText}>Create Account</Text>
  </TouchableOpacity>
    
    <View style={{flex:1, height:50}}></View>

</ScrollView>


    </SafeAreaView>
  )
}

export default DGPIGPAccount

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
    fontSize: 16,
  },
});