import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export default function CustomText({type, children, style}){
    return(
        <Text style={{...styles[type],  ...style}}>
            {children}
        </Text>
            
    )
}
const styles=StyleSheet.create({
    regular:{
        fontFamily:'Roboto-Regular',
    },
    bold:{
        fontFamily:'Roboto-Bold',
    },
    boldItalic:{
        fontFamily:'Roboto-BoldItalic',
    },
    medium:{
        fontFamily:'Roboto-Medium',
    },
    
})
CustomText.defaultProps = {
    type:'regular'
}