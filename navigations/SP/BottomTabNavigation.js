import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../../constants'
import { FontAwesome6 } from '@expo/vector-icons';

import HomeScreen from '../../screens/SP/HomeScreen';
import SearchScreen from '../../screens/SP/SearchScreen';
import ProfileScreen from '../../screens/SP/ProfileScreen';
import ReportScreenNavigation from './ReportScreenNavigation';
import SDPO from '../../screens/SP/SDPO';


const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === "ios" ? 90 : 60,
                    backgroundColor: COLORS.white
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Image
                                source={focused ? icons.home : icons.homeOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                                <Text style={{ fontSize: 10, color: "#16247d",marginTop:5  }}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="ReportScreenNavigation"
                component={ReportScreenNavigation}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <FontAwesome6 name="file-contract" size={25} color={focused ? "#16247d" :"#999FA4"} />
                                <Text style={{ fontSize: 10, color: "#16247d" ,marginTop:5 }}>Reports</Text>
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#16247d",
                            width: Platform.OS == "ios" ? 50 : 60,
                            height: Platform.OS == "ios" ? 50 : 60,
                            top: Platform.OS == "ios" ? -10 : -20,
                            borderRadius: Platform.OS == "ios" ? 25 : 30 }}>
                                <Image
                                source={focused ? icons.search : icons.searchOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.white : COLORS.white
                                }}
                            />
                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name="SDPOs"
                component={SDPO}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                               <Image
                                source={focused ? icons.SDPO_Outline : icons.SDPO}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                }}
                            />
                                <Text style={{ fontSize: 10, color: "#16247d", marginTop:5  }}>SDPO</Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                               <Image
                                source={focused ? icons.user : icons.userOutline}
                                resizeMode='contain'
                                style={{
                                    height: 24,
                                    width: 24,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                                <Text style={{ fontSize: 10, color:"#16247d" ,marginTop:5  }}>Profile</Text>
                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation