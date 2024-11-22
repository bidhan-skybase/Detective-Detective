import {StyleSheet, View} from 'react-native';
import {AppColors} from '../constants/colors.ts';
import CustomText from './customTextComponent.tsx';
import React from 'react';
import PlayIcon from '../assets/icons/playIcon.tsx';
import globalStyles from '../global_styles.tsx';

export default function ButtonComponent() {
  return (<View>
    <View style={[styles.buttonStyle,globalStyles.row,globalStyles.shadowProp]}>
      <PlayIcon />
      <CustomText fontWeight={'SemiBold'} fontSize={20} >
        Start Game
      </CustomText>
    </View>

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
