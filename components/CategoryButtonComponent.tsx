import {AppColors} from '../constants/colors.ts';
import {View,StyleSheet,Pressable} from 'react-native';
import CustomText from './customTextComponent.tsx';
import React from 'react';


type CategoryButtonProps={
  title:string,
  onTap:()=>void,
  icon: React.ComponentProps<any>,
  color:string
}
export default function CategoryButtonComponent(props: CategoryButtonProps) {

  return (
    <Pressable style={styles.container} onPress={props.onTap}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: props.color,
          },
        ]}>
        <props.icon />
      </View>
      <CustomText fontWeight="Medium" >
        {props.title}
      </CustomText>
    </Pressable>
  );
}

const styles=StyleSheet.create({
  container:{
    alignItems: 'center',
    borderWidth: 2,
    borderColor: AppColors.primaryTextColor,
    width: '31%',
    height: 100,
    justifyContent: 'center',
    borderRadius: 8,
    borderBottomWidth:4,
    marginBottom:12,
  },

  circle:{
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor: AppColors.yellowAccentColor,
  },
});
