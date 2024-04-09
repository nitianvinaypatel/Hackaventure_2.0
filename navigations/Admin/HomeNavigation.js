import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/ADMIN/HomeScreen'
import PSAccount from '../../screens/ADMIN/Accounts/PSAccount';
import SDPOAccount from '../../screens/ADMIN/Accounts/SDPOAccount';
import SPAccount from '../../screens/ADMIN/Accounts/SPAccount';
import DIGAccount from '../../screens/ADMIN/Accounts/DIGAccount';
import DGPIGPAccount from '../../screens/ADMIN/Accounts/DGPIGPAccount';
import ADMINAccount from '../../screens/ADMIN/Accounts/ADMINAccount'; 




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
                name="PS"
                component={PSAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SDPO"
                component={SDPOAccount}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SP"
                component={SPAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DIG"
                component={DIGAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DGPIGP"
                component={DGPIGPAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ADMIN"
                component={ADMINAccount}
                options={{ headerShown: false }}
            />
           
        </Stack.Navigator>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({})