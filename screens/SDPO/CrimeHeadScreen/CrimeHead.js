import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../../../constants'
import Header from '../../../components/Header'

const CrimeHead = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

<Header title={"Crime Heads"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={()=>navigation.navigate('Notifications')} />

     
    </SafeAreaView>
  )
}

export default CrimeHead