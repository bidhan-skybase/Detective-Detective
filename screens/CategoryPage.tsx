import {useState} from 'react';
import {SafeAreaView, StyleSheet, View,TouchableWithoutFeedback, Keyboard,TouchableOpacity} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CustomText from '../components/customTextComponent.tsx';
import TextFieldComponent from '../components/TextInputComponent.tsx';
import CategoryButtonComponent from '../components/CategoryButtonComponent.tsx';
import {GameCategories} from '../constants/categories.ts';
import {AppColors} from '../constants/colors.ts';
import ArrowUpIcon from '../assets/icons/arrowUpIcon.tsx';
import ArrowDownIcon from '../assets/icons/arrowDownIcon.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, "CategoryPage">;


export default function CategoriesPage({navigation}: Props) {
  const dismissKeyboard = () => Keyboard.dismiss();
  const [players,setPlayers] = useState('2');
  function increment(){
    var currentNumber = parseInt(players,10);
    var newNumber = currentNumber + 1;
    if(newNumber<26){
      setPlayers(newNumber.toString());

    }
  }
  function decerment(){
    var currentNumber = parseInt(players,10);
    var newNumber = currentNumber - 1;
    if(newNumber>1){
      setPlayers(newNumber.toString());
    }

  }
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={[globalStyles.main, { backgroundColor: 'transparent' }]}>
      <View
        style={[
          globalStyles.row,
          {
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 40,
            gap: 10,
            marginBottom: 40,

          },
        ]}>
        <CustomText fontSize={22} fontWeight={'Bold'}>
          Number of Players :
        </CustomText>
        <TouchableOpacity onPress={increment}>
          <View style={[styles.circle,{alignItems:'center',justifyContent:'center',paddingTop:8}]}>
            <ArrowUpIcon height={20}  />
          </View>
        </TouchableOpacity>

        <TextFieldComponent
          placeholder={players.toString()}
          onChangeText={(text)=>setPlayers(text)}
          value={players}
          selectTextOnFocus={false}
          editable={false}
          style={{width: 50}} />
        <TouchableOpacity onPress={decerment}>
          <View style={[styles.circle,{alignItems:'center',justifyContent:'center',paddingTop:8,backgroundColor: AppColors.tealAccentColor}]}>
            <ArrowDownIcon height={20}  />
          </View>
        </TouchableOpacity>

      </View>
      <CustomText fontSize={20} fontWeight={'SemiBold'} style={{marginBottom:20}}>
        Choose a Category
      </CustomText>
      <View style={{ flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10 }}>
        {
          GameCategories.map((category,index)=>(
            <CategoryButtonComponent
              title={category.category}
              color={category.color}
              icon={category.icon}
              onTap={() => {
                navigation.navigate('GamePage', {
                  categoryTile: category.category,
                  playersCount: parseInt(players, 10),
                });
              }}
              key={index}
             />
          ))
        }

      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  circle:{
    height: 40,
    width: 40,
    borderWidth: 2,
    borderRadius: 100,
    backgroundColor: AppColors.yellowAccentColor,
  },
});
