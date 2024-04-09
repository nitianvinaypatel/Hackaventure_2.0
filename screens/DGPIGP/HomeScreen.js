import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../../constants'
import Header from '../../components/Header'
import CustomLineChart from '../../components/LineChart'
import CustomPieChart from '../../components/PieChart'
import CustomBarChart from '../../components/BarChart'
import SimpleLineChart from '../../components/SimpleLineChart'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <Header title={"Crime Statistics"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={()=>navigation.navigate('Notifications')} />

      <ScrollView style={{marginBottom:60}}>

        <View style={{ flexDirection: 'column', backgroundColor: COLORS.gray, borderRadius: 20, margin: 10 }}>
          <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 700, margin: 10 }}>Monthly Registered Cases</Text>
          <CustomLineChart />
        </View>


        <View style={{ flexDirection: 'column', backgroundColor: COLORS.gray, borderRadius: 20, margin: 10 }}>
          <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 700, margin: 10 }}>Crime Head Distribution</Text>
          <CustomPieChart />
        </View>

        <View style={{ flexDirection: 'column', backgroundColor: COLORS.gray, borderRadius: 20, margin: 10 }}>
          <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 700, margin: 10 }}>District Wise Cases</Text>
          <CustomBarChart />
        </View>


        <View style={{ flexDirection: 'column', backgroundColor: COLORS.gray, borderRadius: 20, margin: 10 }}>
          <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: 700, margin: 10 }}>Pending Cases</Text>
          <SimpleLineChart />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;