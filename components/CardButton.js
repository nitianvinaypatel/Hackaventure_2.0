import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CardButton = ({ title, imageSource, onPress }) => {
    return (
        <View >
            <TouchableOpacity style={styles.CardButton} onPress={onPress}>
                <Image
                    source={imageSource}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CardButton;

const styles = StyleSheet.create({
    CardButton: {
        margin:10,
        justifyContent: 'center',
        width: wp('40'),
        height: hp('20'), 
        backgroundColor: COLORS.gray,
        borderRadius: 20,
        alignItems: 'center',
        alignContent:'center'
         
    },
    image: {
        width: wp('20'),
        height: hp('10'), 
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign:'center'
       
    },
});
