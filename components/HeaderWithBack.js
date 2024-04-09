import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../constants'

const HeaderWithBack = ({ title, imageSource, onPress}) => {
  return (
    <View style={{
        backgroundColor: COLORS.white,
        padding: 16,
        flexDirection: 'row',
        justifyContent:'flex-start',
        gap:30,
        alignItems: 'center'
      }}>
        <TouchableOpacity
        onPress={onPress}
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
        <Text style={{ fontSize: 22, fontWeight: 700 }}>{title}</Text>
      </View>
  )
}

export default HeaderWithBack;

const styles = StyleSheet.create({})