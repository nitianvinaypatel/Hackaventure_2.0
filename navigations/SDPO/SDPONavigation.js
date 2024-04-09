import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import BottomTabNavigation from './BottomTabNavigation';



const Stack = createNativeStackNavigator();

const SDPONavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BottomTabNavigation"
                    component={BottomTabNavigation}
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SDPONavigation;
