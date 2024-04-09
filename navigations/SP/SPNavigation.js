import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';


const Stack = createNativeStackNavigator();

const SPNavigation = () => {
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

export default SPNavigation;
