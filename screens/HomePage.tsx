import {Image, SafeAreaView, View} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CustomText from '../components/customTextComponent.tsx';
import ButtonComponent from '../components/ButtonComponent.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomePage({navigation }: Props) {
  return (
    <SafeAreaView style={[globalStyles.main,{backgroundColor:'transparent'}]}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}>
        <CustomText fontWeight={'Bold'} fontSize={32} style={{marginTop: 50}}>
          Detective Detective
        </CustomText>
        <Image
          source={require('../assets/images/detectiveHolder.png')}
          style={{
            height: '50%',
            width: '100%',
            objectFit: 'contain',
          }}
        />
        <ButtonComponent
        title={"Start Game"}
       callback={()=>{
         navigation.navigate('CategoryPage');
       }}

        ></ButtonComponent>
      </View>
    </SafeAreaView>
  );
}
