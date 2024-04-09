import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, icons } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationScreen from "../../screens/SDPO/NotificationsScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import LoginScreen from "../../screens/AUTH/LoginScreen";



const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.user}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 999,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLORS.white,
                  marginBottom: 6,
                }}
              >
                Bawngkawn PS
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                }}
              >
                ID:  89897678
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Drawer"
        options={{
          drawerLabel: "Home",
          title: "Home",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />

      <Drawer.Screen
        name="Notifications"
        options={{
          drawerLabel: "Notifications",
          title: "Notifications",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={NotificationScreen}
      />

      <Drawer.Screen
        name="Logout"
        options={{
          drawerLabel: "logout",
          title: "logout",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={LoginScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
