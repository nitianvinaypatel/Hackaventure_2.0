import { View, Text, Platform, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, icons } from '../../constants'
import ProfileScreen from '../../screens/PS/ProfileScreen';
import HomeNavigation from './HomeNavigation';




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
                name="HomeNavigation"
                component={HomeNavigation}
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

export default BottomTabNavigation;