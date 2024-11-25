import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Pressable} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CloseIcon from '../assets/icons/closeIcon.tsx';
import {AppColors} from '../constants/colors.ts';
import CustomText from '../components/customTextComponent.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AnimatedCircle from '../components/AnimatedContainer.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'GamePage'>;

const GamePage = ({navigation, route}: Props) => {
  const [currentCount, setCount] = useState(1);
  const {categoryTile, playersCount} = route.params || {};
  function increment() {
    if (currentCount < playersCount!) {
      setCount(currentCount + 1);
    } else {
      setCount(1);
      navigation.navigate('RestartPage');
    }
  }

  return (
    <ScrollView
      style={[
        globalStyles.main,
        {backgroundColor: 'transparent', marginTop: 80, marginHorizontal: 0},
      ]}>
      <View
        style={[
          globalStyles.row,
          {
            alignItems: 'center',
            position: 'relative',
            marginTop: 10,
            marginHorizontal: 16,
          },
        ]}>
        <CustomText
          fontSize={24}
          fontWeight={'SemiBold'}
          style={{flex: 1, textAlign: 'center'}}>
          {categoryTile}
        </CustomText>

        <Pressable
          style={{position: 'absolute', right: 0}}
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
      <CustomText
        fontSize={18}
        fontWeight={'Medium'}
        style={{textAlign: 'center', marginTop: '10%', color: 'grey'}}>
        Players
      </CustomText>
      <View style={[globalStyles.row, {justifyContent: 'center'}]}>
        <CustomText fontSize={30} fontWeight={'Medium'}>
          {currentCount}
        </CustomText>
        <CustomText fontSize={20} fontWeight={'Medium'}>
          {' '}
          out of{' '}
        </CustomText>
        <CustomText fontSize={30} fontWeight={'SemiBold'}>
          {playersCount}
        </CustomText>
      </View>
      <AnimatedCircle defaultSize={300} growBy={300} onPressOut={increment} />
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
