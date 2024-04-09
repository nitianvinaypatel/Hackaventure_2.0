import { View, Text, } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserComponent from '../../components/UserComponent'
import { ScrollView } from 'react-native-gesture-handler'
import HeaderWithBack from '../../components/HeaderWithBack'

const TrackReport = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

    <HeaderWithBack title={"Track Reports"} imageSource={icons.back} onPress={() => navigation.goBack()} />

    <ScrollView  >
    <UserComponent title1="Report 1" title2="346478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 2" title2="446478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 3" title2="546478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 4" title2="646478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 5" title2="746478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 6" title2="846478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 7" title2="946478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 8" title2="78478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 9" title2="97346478587" imageSource={icons.reports}/>
    <UserComponent title1="Report 1" title2="986478587" imageSource={icons.reports}/>
    </ScrollView>
    
    
    </SafeAreaView>
  )
}

export default TrackReport
