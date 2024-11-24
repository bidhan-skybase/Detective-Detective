import {StyleSheet, View,Pressable} from 'react-native';
import {AppColors} from '../constants/colors.ts';
import CustomText from './customTextComponent.tsx';
import React from 'react';
import PlayIcon from '../assets/icons/playIcon.tsx';
import globalStyles from '../global_styles.tsx';

type ButtonProps={
  title:string,
  callback:()=>void,
}

export default function ButtonComponent(props:ButtonProps) {
  return (<View>
    <Pressable onPress={props.callback}>
    <View style={[styles.buttonStyle,globalStyles.row,globalStyles.shadowProp]}>
      <PlayIcon />
      <CustomText fontWeight={'SemiBold'} fontSize={20} >{props.title}
      </CustomText>
    </View>
    </Pressable>

  </View>);

}

 const  styles = StyleSheet.create({
buttonStyle:{
  // height:40,
  backgroundColor:AppColors.tealAccentColor,
  marginBottom:'100%',
  justifyContent:'center',
  alignItems:'center',
  width:300,
  borderRadius:12,
  borderColor:AppColors.primaryTextColor,
  borderWidth:2,
  borderBottomWidth:6,
  padding: 10,
},
});
