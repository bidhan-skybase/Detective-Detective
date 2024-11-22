import {AppColors} from '../constants/colors.ts';
import {View,StyleSheet} from 'react-native';
import CustomText from './customTextComponent.tsx';

export  default function CategoryButtonComponent({category,
                                                   icon: Icon, // Destructure the icon
                                                   color,}:GameCategory) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.circle,
          {marginBottom: 4, backgroundColor: color,justifyContent:"center", alignItems:"center",},
        ]}>
       <Icon></Icon>
      </View>
      <CustomText fontWeight={'Medium'}>{category}</CustomText>
    </View>
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
    backgroundColor: AppColors.yellowAccentColor,
  },
});
