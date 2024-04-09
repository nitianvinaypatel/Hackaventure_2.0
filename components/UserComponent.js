import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../constants'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const UserComponent = ({ title1, title2,imageSource }) => {
    return (
        <View>
            <TouchableOpacity style={styles.CardButton}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30 }}>
                    <Image
                        source={imageSource}
                        resizeMode='contain'
                        style={{
                            height: 48,
                            width: 48,
                            margin: 10,
                            tintColor: COLORS.black
                        }}
                    />
                    <View style={{justifyContent:'center', alignItems:'flex-end'}}>
                        <Text style={styles.text}>
                            {title1}
                        </Text>

                        <Text style={styles.text2}>
                           ID: {title2}
                        </Text>
                        <Text style={styles.text2}>
                           Cases: {title2}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>

        </View>
    )
}

export default UserComponent


const styles = StyleSheet.create({
    CardButton: {
        margin: 5,
        width: wp('100'),
        height: hp('10'),
        backgroundColor: '#ECF0F4',
        borderRadius: 20,

    },
    image: {
        width: '50%',
        height: '50%',

        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    text: {
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    text2: {
        fontSize: 16,

    },
});