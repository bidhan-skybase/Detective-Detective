import {Image, SafeAreaView, View} from 'react-native';
import globalStyles from '../global_styles.tsx';
import CustomText from '../components/customTextComponent.tsx';
import ButtonComponent from '../components/ButtonComponent.tsx';

export default function HomePage() {
  return (
    <SafeAreaView style={globalStyles.main}>
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
        <ButtonComponent></ButtonComponent>
      </View>
    </SafeAreaView>
  );
}
