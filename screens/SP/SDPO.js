import { View, Text, } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'
import Header from '../../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserComponent from '../../components/UserComponent'
import { ScrollView } from 'react-native-gesture-handler'


const SDPO = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

    <Header title={"SDPOs"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={()=>navigation.navigate('Notifications')} />
    
    <ScrollView style={{marginBottom:60}} >
    <UserComponent title1="Lucky Singh" title2="346478587" imageSource={icons.DIG}/>
    <UserComponent title1="Naivedya" title2="446478587" imageSource={icons.DIG}/>
    <UserComponent title1="Atul Kumar" title2="546478587" imageSource={icons.DIG}/>
    <UserComponent title1="Sibtan" title2="646478587" imageSource={icons.DIG}/>
    <UserComponent title1="Ravi Kumar" title2="746478587" imageSource={icons.DIG}/>
    <UserComponent title1="Tanmay Kumar" title2="846478587" imageSource={icons.DIG}/>
    <UserComponent title1="Rohit Kumar" title2="946478587" imageSource={icons.DIG}/>
    <UserComponent title1="Manoj Kumar" title2="78478587" imageSource={icons.DIG}/>
    <UserComponent title1="Subham Kumar" title2="97346478587" imageSource={icons.DIG}/>
    <UserComponent title1="Pawan Kumar" title2="986478587" imageSource={icons.DIG}/>
    <UserComponent title1="Amit Kumar" title2="096478587" imageSource={icons.DIG}/>
    </ScrollView>

    </SafeAreaView>
  )
}

export default SDPO
