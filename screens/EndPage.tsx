import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CustomText from '../components/customTextComponent.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppColors} from '../constants/colors.ts';
import RestartIcon from '../assets/icons/restartIcon.tsx';
import CategoriesIcon from '../assets/icons/categoriesIcon.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'RestartPage'>;

export default function RestartPage({ navigation }: Props) {
  return (
    <SafeAreaView style={[globalStyles.main, {backgroundColor: 'transparent'}]}>
      <View
        style={[globalStyles.row, {marginTop: 40, justifyContent: 'center'}]}>
        <CustomText
          fontSize={26}
          fontWeight={'SemiBold'}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          Who is the liar?
        </CustomText>
      </View>
      <Text style={{fontSize:40,textAlign:"center",marginTop:40}}>🕵️</Text>
      <View
        style={[
          globalStyles.row,
          globalStyles.rowWithSpaceBetween,
          {marginHorizontal: 16,marginTop:100},
        ]}>

        <View style={[styles.container]}>
          <Pressable onPress={() => navigation.goBack()}>
            <View style={
              globalStyles.row
            }>
              <View style={[styles.circle, {marginHorizontal: 12,}]}>
                <RestartIcon />
              </View>

              <CustomText>Restart</CustomText>
            </View>


          </Pressable>
        </View>
        <View style={[styles.container]}>
          <Pressable onPress={()=>{ navigation.reset({
            index:0,
            routes:[{name:'CategoryPage'}]
          }) }}>
            <View style={
              globalStyles.row
            }>
              <View style={[styles.circle, {marginHorizontal: 12,backgroundColor: AppColors.tealAccentColor}]}>
                <CategoriesIcon />
              </View>

              <CustomText>Categories</CustomText>
            </View>


          </Pressable>
        </View>


      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: AppColors.primaryTextColor,
    width: '48%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    borderBottomWidth: 4,
    marginBottom: 12,
  },
  circle: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.yellowAccentColor,
  },
});
