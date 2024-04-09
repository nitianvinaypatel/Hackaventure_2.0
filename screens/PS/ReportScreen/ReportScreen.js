import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../../../constants'
import CardButton from '../../../components/CardButton'
import Header from '../../../components/Header'

const ReportScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: COLORS.white}}>
    
    <Header title={"Reports"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={()=>navigation.navigate('Notifications')} />

      
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>


        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize: 24, fontWeight: 700, margin:8 }}>Download Report</Text>
        </View >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center',alignItems:'center'  }}>
          <CardButton title={"Download Daily Report"} imageSource={icons.GenerateDailyReport} />
          <CardButton title={"Download Arrested Persons Report"} imageSource={icons.arrested_person} />
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize: 24, fontWeight: 700, margin:8 }}>Download Report</Text>
        </View >
       

      </ScrollView>
    </SafeAreaView>
  )
}

export default ReportScreen;