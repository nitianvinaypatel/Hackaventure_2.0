import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import React from 'react'

const Dashboard = ({ title, imageSource, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={styles.CardButton} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    CardButton: {
        margin: 10,
        width: wp('90'),
        height: hp('9'),
        backgroundColor: '#ECF0F4',
        borderRadius: 20,

    },
    image: {
        width: '50%',
        height: '50%',
        margin:10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
        textAlign:'center'
    },
});