import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/PS/HomeScreen'
import GenerateDailyReport from '../../screens/PS/ReportScreen/GenerateDailyReport';
import GenerateArrestedPerson from '../../screens/PS/ReportScreen/GenerateArrestedPerson';
import DailyReport1 from '../../screens/PS/ReportScreen/DailyReport1';
import DailyReport2 from '../../screens/PS/ReportScreen/DailyReport2';
import DailyReport3 from '../../screens/PS/ReportScreen/DailyReport3';
import DailyReport4 from '../../screens/PS/ReportScreen/DailyReport4';
import DailyReport5 from '../../screens/PS/ReportScreen/DailyReport5';
import DailyReport6 from '../../screens/PS/ReportScreen/DailyReport6';
import DailyReport7 from '../../screens/PS/ReportScreen/DailyReport7';
import DailyReport8 from '../../screens/PS/ReportScreen/DailyReport8';
import DLDailyReport from '../../screens/PS/ReportScreen/DLDailyReport'
import DLArrested from '../../screens/PS/ReportScreen/DLArrested'
import WLArrested from '../../screens/PS/ReportScreen/WLArrested';
import MLArrested from '../../screens/PS/ReportScreen/MLArrested';
import WLWeeklyReport from '../../screens/PS/ReportScreen/WLWeeklyReport'
import MLMonthlyReport from '../../screens/PS/ReportScreen/MLMonthlyReport'







const Stack = createStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GenerateDailyReport"
                component={GenerateDailyReport}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GenerateArrestedPerson"
                component={GenerateArrestedPerson}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport1"
                component={DailyReport1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport2"
                component={DailyReport2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport3"
                component={DailyReport3}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport4"
                component={DailyReport4}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport5"
                component={DailyReport5}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport6"
                component={DailyReport6}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport7"
                component={DailyReport7}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DailyReport8"
                component={DailyReport8}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DLArrested"
                component={DLArrested}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DLDailyReport"
                component={DLDailyReport}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="WLArrested"
                component={WLArrested}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MLArrested"
                component={MLArrested}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="WLWeeklyReport"
                component={WLWeeklyReport}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MLMonthlyReport"
                component={MLMonthlyReport}
                options={{ headerShown: false }}
            />

           
        </Stack.Navigator>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({})