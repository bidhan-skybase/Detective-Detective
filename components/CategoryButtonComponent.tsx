import {AppColors} from '../constants/colors.ts';
import {View,StyleSheet} from 'react-native';
import CustomText from './customTextComponent.tsx';

export  default function CategoryButtonComponent(){
  return(
    <View
      style={styles.container}>
      <View
        style={styles.circle}></View>
      <CustomText fontWeight={'Medium'}>Animals</CustomText>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    alignItems: 'center',
    borderWidth: 2,
    borderColor: AppColors.primaryTextColor,
    width: '24%',
    height: 100,
    justifyContent: 'center',
    borderRadius: 8,
    borderBottomWidth:4,
    gap: 8,
  },

  circle:{
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: AppColors.yellowAccentColor,
  }
})
