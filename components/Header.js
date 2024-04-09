import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../constants'

const Header = ({ title, imageSource, onPress1, onPress2}) => {
  return (
    <View style={{
        backgroundColor: COLORS.white,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={onPress1}
          style={{
            height: 45,
            width: 45,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.gray
          }}
        >
          <Image
            source={imageSource}
            resizeMode='contain'
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.black
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 700 }}>{title}</Text>
        <TouchableOpacity
          onPress={onPress2}
          style={{
            height: 45,
            width: 45,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.gray
          }}
        >
          <Image
            source={icons.bell}
            resizeMode='contain'
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.black
            }}
          />
        </TouchableOpacity>

      </View>
  )
}

export default Header;

const styles = StyleSheet.create({})