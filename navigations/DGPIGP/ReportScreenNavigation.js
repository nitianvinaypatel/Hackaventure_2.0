import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ReportScreen from '../../screens/DGPIGP/ReportScreen/ReportScreen'
import DLDailyReport from '../../screens/DGPIGP/ReportScreen/DLDailyReport'
import DLArrested from '../../screens/DGPIGP/ReportScreen/DLArrested'
import WLArrested from '../../screens/DGPIGP/ReportScreen/WLArrested';
import MLArrested from '../../screens/DGPIGP/ReportScreen/MLArrested';
import WLWeeklyReport from '../../screens/DGPIGP/ReportScreen/WLWeeklyReport'
import MLMonthlyReport from '../../screens/DGPIGP/ReportScreen/MLMonthlyReport'



const Stack = createStackNavigator();

const ReportScreenNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Reports"
                component={ReportScreen}
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

export default ReportScreenNavigation

const styles = StyleSheet.create({})