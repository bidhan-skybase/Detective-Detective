import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Pressable} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CloseIcon from '../assets/icons/closeIcon.tsx';
import {AppColors} from '../constants/colors.ts';
import CustomText from '../components/customTextComponent.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'GamePage'>;

const GamePage = ({navigation, route}: Props) => {
  const [currentCount, setCount] = useState(1);
  const {categoryTile, playersCount} = route.params || {};
  function incremenet(){
    if(currentCount < playersCount!){
      setCount(currentCount + 1);
    }else{
      navigation.navigate('RestartPage');
    }
  }

  return (
    <ScrollView
      style={[
        globalStyles.main,
        {backgroundColor: 'transparent', marginTop: 60},
      ]}>
      <View style={[globalStyles.row, { alignItems: 'center', position: 'relative',marginTop:10 }]}>
        <CustomText
          fontSize={24}
          fontWeight={'SemiBold'}
          style={{ flex: 1, textAlign: 'center' }}>
          {categoryTile}
        </CustomText>

        <Pressable
          style={{ position: 'absolute', right: 0 }}
          onPress={() => {
            navigation.goBack();
          }}>
          <View
            style={[
              styles.circle,
              {
                backgroundColor: AppColors.purpleAccentColor,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <CloseIcon height={15} />
          </View>
        </Pressable>
      </View>

      <View style={[globalStyles.row, {justifyContent: 'center',marginTop:"10%"}]}>
        <CustomText
          fontSize={30}
          fontWeight={'Medium'}
         >
          {currentCount}
        </CustomText>
        <CustomText fontSize={20} fontWeight={'Medium'}>
          {' '}
          out of{' '}
        </CustomText>
        <CustomText fontSize={38} fontWeight={'SemiBold'}>
          {playersCount}
        </CustomText>
      </View>
      <Pressable onLongPress={ ()=>{
       incremenet()
      }}>
        <View style={{justifyContent:"center",alignItems:"center",marginTop:"30%"}}>
          <View style={[styles.circle,{height: 200,width: 200,justifyContent:"center",alignItems:"center"}]}>
            <CustomText fontSize={22}>Press and hold</CustomText>
          </View>
        </View>
      </Pressable>


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
