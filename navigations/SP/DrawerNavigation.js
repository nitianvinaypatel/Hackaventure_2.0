import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, icons } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import BottomTabNavigation from "./BottomTabNavigation";
import { SafeAreaView } from "react-native-safe-area-context";
import ReportScreen from '../../screens/SP/ReportScreen/ReportScreen';
import SearchScreen from '../../screens/SP/SearchScreen';
import NotificationScreen from "../../screens/SP/NotificationsScreen";
import MapScreen from "../../screens/SP/MapScreen";
import LoginScreen from "../../screens/AUTH/LoginScreen";
import TrackReport from "../../screens/SP/TrackReport";


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
                Manoj Kumar
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                }}
              >
                ID: 7494844
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
        name="Dashboard"
        options={{
          drawerLabel: "Dashboard",
          title: "Dashboard",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="Reports"
        options={{
          drawerLabel: "Reports",
          title: "Reports",
          headerShadowVisible: true,
          drawerIcon: () => (
            <Ionicons name="document-text-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={ReportScreen}
      />
      <Drawer.Screen
        name="Search"
        options={{
          drawerLabel: "Search",
          title: "Search",
          headerShadowVisible: true,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={SearchScreen}
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
        name="CrimeMap"
        options={{
          drawerLabel: "Crime Map",
          title: "Crime Map",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="locate-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={MapScreen}
      />
        <Drawer.Screen
        name="TrackReport"
        options={{
          drawerLabel: "Track Reports",
          title: "Track Report",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="locate-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={TrackReport}
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
