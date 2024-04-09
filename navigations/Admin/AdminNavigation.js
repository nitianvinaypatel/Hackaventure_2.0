import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '../Admin/BottomTabNavigation';
import DrawerNavigation from '../Admin/DrawerNavigation';





const Stack = createNativeStackNavigator();

const AdminNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="DrwerNavigation"
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

export default AdminNavigation;
