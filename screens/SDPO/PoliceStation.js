import { View, Text, } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'
import Header from '../../components/Header'
import UserComponent from '../../components/UserComponent'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const PoliceStation = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <Header title={"Police Stations"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={() => navigation.navigate('Notifications')} />

    <ScrollView style={{marginBottom:60}} >
    <UserComponent title1="Aizawl PS" title2="346478587" imageSource={icons.PS_Outline}/>
    <UserComponent title1="Bawngkawn PS" title2="446478587" imageSource={icons.PS_Outline}/>
    <UserComponent title1="Kulikawn PS" title2="546478587" imageSource={icons.PS_Outline}/>
    <UserComponent title1="Vaivakawn PS" title2="646478587" imageSource={icons.PS_Outline}/>
    <UserComponent title1="Sairang PS" title2="746478587" imageSource={icons.PS_Outline}/>
    <UserComponent title1="Sialsuk PS" title2="846478587" imageSource={icons.PS_Outline}/>
    <UserComponent title1="Darlawn PS" title2="946478587" imageSource={icons.PS_Outline}/>
   
    </ScrollView>

  

    </SafeAreaView>
  )
}

export default PoliceStation

