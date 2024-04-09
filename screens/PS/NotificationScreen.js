import { View, Text, } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'
import HeaderWithBack from '../../components/HeaderWithBack'
import { SafeAreaView } from 'react-native-safe-area-context'



const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <HeaderWithBack title={"Notifications"} imageSource={icons.back} onPress={() => navigation.goBack()} />


    </SafeAreaView>
  )
}

export default NotificationScreen;