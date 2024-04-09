import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../../constants'
import Header from '../../components/Header'

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

    <Header title={"Profile"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={()=>navigation.navigate('Notifications')} />
    
    <ScrollView>
     
      <View style={{margin:10}} >

      <View style={{flex:1, flexDirection:'row',marginBottom:10, padding:5, height:50, borderRadius:20, justifyContent:'space-between', alignItems:'center', backgroundColor:COLORS.gray}} >
        <Text style={{fontSize:18,fontWeight:600, marginLeft:10}} >User:</Text>
        <Text style={{fontSize:16,fontWeight:500, marginRight:10}} >SP</Text>
        </View>

        <View style={{flex:1, flexDirection:'row',marginBottom:10, padding:5, height:50, borderRadius:20, justifyContent:'space-between', alignItems:'center', backgroundColor:COLORS.gray}} >
        <Text style={{fontSize:18,fontWeight:600, marginLeft:10}} >ID:</Text>
        <Text style={{fontSize:16,fontWeight:500, marginRight:10}} >89897678</Text>
        </View>

        <View style={{flex:1, flexDirection:'row',marginBottom:10,  padding:5, height:50, borderRadius:20, justifyContent:'space-between', alignItems:'center', backgroundColor:COLORS.gray}}>
        <Text style={{fontSize:18,fontWeight:600, marginLeft:10}} >Name:</Text>
        <Text style={{fontSize:16,fontWeight:500, marginRight:10}} >Manoj Kumar</Text>
        </View>

        <View style={{flex:1, flexDirection:'row',marginBottom:10,  padding:5, height:50, borderRadius:20, justifyContent:'space-between', alignItems:'center', backgroundColor:COLORS.gray}}>
        <Text style={{fontSize:18,fontWeight:600, marginLeft:10}} >Mobile No:</Text>
        <Text style={{fontSize:16,fontWeight:500, marginRight:10}} >+91-9784987893</Text>
        </View>

        <View style={{flex:1, flexDirection:'row', marginBottom:10, padding:5, height:50, borderRadius:20, justifyContent:'space-between', alignItems:'center', backgroundColor:COLORS.gray}}>
        <Text style={{fontSize:18,fontWeight:600, marginLeft:10}} >Email:</Text>
        <Text style={{fontSize:16,fontWeight:500, marginRight:10}} >Manoj@google.com</Text>
        </View>

        <View style={{flex:1, flexDirection:'row',marginBottom:10,  padding:5, height:50 , borderRadius:20, justifyContent:'space-between', alignItems:'center', backgroundColor:COLORS.gray}} >
        <Text style={{fontSize:18,fontWeight:600, marginLeft:10}} >Address:</Text>
        <Text style={{fontSize:16,fontWeight:500, marginRight:10}} >Chaltlang, Aizawl, Mizoram</Text>
        </View>
      
      </View>
    </ScrollView>
         
        </SafeAreaView>
  )
}

export default ProfileScreen