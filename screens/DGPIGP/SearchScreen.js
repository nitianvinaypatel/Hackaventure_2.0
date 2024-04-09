import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet ,TextInput} from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../../constants'
import Header from '../../components/Header'
import { Ionicons } from "@expo/vector-icons";


const SearchScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    alert("You Searched: " + searchText)
  };
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>

      <Header title={"Search Reports"} imageSource={icons.menu} onPress1={() => navigation.toggleDrawer()} onPress2={() => navigation.navigate('Notifications')} />

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={text => setSearchText(text)}
          value={searchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
   
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: COLORS.gray,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});