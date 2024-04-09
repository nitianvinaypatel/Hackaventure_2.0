import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';


const Stack = createNativeStackNavigator();

const DGPIGPNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="DrawerNavigation"
                    component={DrawerNavigation}
                    options={{ headerShown: false}}
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

export default DGPIGPNavigation;
