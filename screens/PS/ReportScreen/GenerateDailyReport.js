import { StyleSheet, Text, View,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderWithBack from '../../../components/HeaderWithBack'

const GenerateDailyReport = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    
    <HeaderWithBack title={"Generate Daily Report"} imageSource={icons.back} onPress={() => navigation.goBack()} />

    <ScrollView style={{marginBottom:60}}>

    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport1')}>
          <Text style={styles.loginButtonText}>1. Crime Reports & Case Registered</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport2')}>
          <Text style={styles.loginButtonText}>2. Natural Calamities within the District</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport3')}>
          <Text style={styles.loginButtonText}>3. Important Incidents/Development</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport4')}>
          <Text style={styles.loginButtonText}>4.	Total No. of FIRs under Various Crime Heads</Text>
        </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport5')}>
          <Text style={styles.loginButtonText}>5.	Law & Order situation</Text>
        </TouchableOpacity>
    </View>

    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport6')}>
          <Text style={styles.loginButtonText}>6.	Agitation / Strike etc	</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport7')}>
          <Text style={styles.loginButtonText}>7.	Movement of VVIPs/VIPs</Text>
        </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('DailyReport8')}>
          <Text style={styles.loginButtonText}>8.Any other important information</Text>
        </TouchableOpacity>
    </View>

    </ScrollView>
    
    </SafeAreaView>
  )
}

export default GenerateDailyReport

const styles = StyleSheet.create({
  loginButton:{
    marginBottom:10,
    marginHorizontal:10,
    height: 80,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap:10,
  },
  loginButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center'
  },
})