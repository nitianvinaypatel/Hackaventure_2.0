import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardButton from '../../components/CardButton'
import Header from '../../components/Header'



const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: COLORS.white }}>

      <Header title={"Admin Dashboard"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={() => navigation.navigate('Notifications')} />

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 700, margin: 16 }}>Create Account For:</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <CardButton title={"Police Station"} imageSource={icons.PS} onPress={() => navigation.navigate('PS')} />
          <CardButton title={"SDPO"} imageSource={icons.SDPO} onPress={() => navigation.navigate('SDPO')}/>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <CardButton title={"SP"} imageSource={icons.SP} onPress={() => navigation.navigate('SP')}/>
          <CardButton title={"DIG"} imageSource={icons.DIG} onPress={() => navigation.navigate('DIG')} />
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <CardButton title={"DGP-IGP"} imageSource={icons.DGPIGP} onPress={() => navigation.navigate('DGPIGP')} />
          <CardButton title={"ADMIN"} imageSource={icons.ADMIN} onPress={() => navigation.navigate('ADMIN')} />
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})