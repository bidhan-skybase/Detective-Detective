import React from 'react';
import {View, ScrollView, StyleSheet,Pressable} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CloseIcon from '../assets/icons/closeIcon.tsx';
import {AppColors} from '../constants/colors.ts';
import CustomText from '../components/customTextComponent.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, "GamePage">;

const GamePage = ({navigation}:Props) => {
  return (
    <ScrollView
      style={[
        globalStyles.main,
        {backgroundColor: 'transparent', marginTop: 60},
      ]}>

      <View style={[globalStyles.row,{justifyContent:'flex-end'}]}>
        <CustomText fontSize={24} fontWeight={'SemiBold'} style={{position:"absolute" ,left:"34%"}}>Category</CustomText>
        <Pressable onPress={()=>{navigation.goBack()}}>
          <View
            style={[
              styles.circle,
              {
                marginBottom: 4,
                backgroundColor: AppColors.purpleAccentColor,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <CloseIcon height={15}/>
          </View>
        </Pressable>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  circle: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: AppColors.yellowAccentColor,
  },
});
export default GamePage;
