import React from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import {COLORS,SIZES,FONTS,SHADOWS} from "../constants";

export const CircleButton = ({imgUrl,handlePress,...props}) => {
    return (
        <TouchableOpacity
            style={{
                width:40,
                height:40,
                backgroundColor:COLORS.white,
                position:"absolute",
                borderRadius:SIZES.extraLarge,
                alignItems:"center",
                justifyContent:"center",
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image style={{
                width:24,
                height:24
            }} source={imgUrl} resizeMode="contain"/>
        </TouchableOpacity>

    );
}

export const RectButton = ({handlePress,minWidth,fontSize}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor:COLORS.primary,
                borderRadius:SIZES.extraLarge,
                minWidth,
                padding:SIZES.small
            }}
            onPress={handlePress}
        >
            <Text style={{fontFamily:FONTS.semiBold, fontSize,color:COLORS.white,textAlign:'center'}}>Place in bid</Text>
        </TouchableOpacity>
    );
}
