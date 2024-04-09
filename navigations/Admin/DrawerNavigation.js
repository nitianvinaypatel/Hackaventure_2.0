import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, icons, images } from "../../constants";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationScreen from "../../screens/ADMIN/NotificationScreen";
import BottomTabNavigation from "./BottomTabNavigation";
import CreatedAccounts from "../../screens/ADMIN/CreatedAccounts";
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
                Vinay Patel
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                }}
              >
                12345678
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
            <Image
              source={icons.homeOutline}
              resizeMode='contain'
              style={{
                height: 24,
                width: 24,
              }}
            />
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
        name="Accounts"
        options={{
          drawerLabel: "Created Accounts",
          title: "Created Accounts",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Image
            source={icons.userOutline}
            resizeMode='contain'
            style={{
              height: 24,
              width: 24,
            }}
          />
          ),
        }}
        component={CreatedAccounts}
      />

<Drawer.Screen
        name="logout"
        options={{
          drawerLabel: "logout",
          title: "Logout",
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
