import { View, Text, ScrollView ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../../constants'
import CardButton from '../../components/CardButton'
import Header from '../../components/Header'

const PSScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: COLORS.white}}>
    
    <Header title={"Police Station"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={()=>navigation.navigate('Notifications')} />

      
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
      
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize: 24, fontWeight: 700, margin:8 }}>Generate Report</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center',alignItems:'center'  }}>
          <CardButton title={"Generate Daily Report"} imageSource={icons.GenerateDailyReport} onPress={()=>navigation.navigate('GenerateDailyReport')}/>
          <CardButton title={"Generate Arrested Persons Report"} imageSource={icons.arrested_person} onPress={()=>navigation.navigate('GenerateArrestedPerson')}/>
        </View>

        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{ fontSize: 24, fontWeight: 700, margin:8 }}>Download Report</Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center',alignItems:'center'  }}>
          <CardButton title={"Daily Report"} imageSource={icons.GenerateDailyReport} onPress={()=>navigation.navigate('DLDailyReport')} />
          <CardButton title={"Daily Arrested Persons Report"} imageSource={icons.arrested_person} onPress={()=>navigation.navigate('DLArrested')}/>
          <CardButton title={"Weekly Report"} imageSource={icons.GenerateDailyReport} onPress={()=>navigation.navigate('WLWeeklyReport')} />
          <CardButton title={"Weekly Arrested Persons Report"} imageSource={icons.arrested_person} onPress={()=>navigation.navigate('WLArrested')}/>
          <CardButton title={"Monthly Report"} imageSource={icons.GenerateDailyReport} onPress={()=>navigation.navigate('MLMonthlyReport')} />
          <CardButton title={"Monthly Arrested Persons Report"} imageSource={icons.arrested_person} onPress={()=>navigation.navigate('MLArrested')}/>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default PSScreen

const styles = StyleSheet.create({})