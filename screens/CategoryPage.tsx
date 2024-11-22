import {SafeAreaView, View} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CustomText from '../components/customTextComponent.tsx';
import TextFieldComponent from '../components/TextInputComponent.tsx';
import CategoryButtonComponent from '../components/CategoryButtonComponent.tsx';
import {GameCategories} from '../constants/categories.ts';



export default function CategoriesPage() {
  return (
    <SafeAreaView style={globalStyles.main}>
      <View
        style={[
          globalStyles.row,
          {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            gap: 10,
            marginBottom: 40,
          },
        ]}>
        <CustomText fontSize={22} fontWeight={'Bold'}>
          Number of Players
        </CustomText>
        <TextFieldComponent
          placeholder={''}
          style={{width: 50}}></TextFieldComponent>
      </View>
      <CustomText fontSize={20} fontWeight={'SemiBold'} style={{marginBottom:20}}>
        Choose a Category
      </CustomText>
      <View style={{ flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'space-between',
        padding: 10, }}>
        {
          GameCategories.map((category,index)=>(
            <CategoryButtonComponent
              category={category.category}
              id={category.id}
              color={category.color}
              icon={category.icon}
              key={index}
            ></CategoryButtonComponent>
          ))
        }
      </View>
    </SafeAreaView>
  );
}
