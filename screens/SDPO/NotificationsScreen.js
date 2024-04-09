import React from 'react'
import { COLORS, icons } from '../../constants'
import HeaderWithBack from '../../components/HeaderWithBack'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';



// Dummy data for notifications
const notificationsData = [
  { id: 1, title: 'Notification 1', description: 'Description of notification 1' },
  { id: 2, title: 'Notification 2', description: 'Description of notification 2' },
  { id: 3, title: 'Notification 3', description: 'Description of notification 3' },
  // Add more notifications as needed
];

// Notification component to render each notification item
const NotificationItem = ({ title, description }) => {
  return (
    <View style={styles.notificationContainer}>
      <Ionicons name="notifications" size={24} color="black" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};



const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <HeaderWithBack title={"Notifications"} imageSource={icons.back} onPress={() => navigation.goBack()} />

      <FlatList
        data={notificationsData}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />


    </SafeAreaView>
  )
}

export default NotificationScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 4,
  },
});