import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, Animated, Pressable, View, Image} from 'react-native';
import CustomText from './customTextComponent.tsx';
import {AppColors} from '../constants/colors.ts';
import {Animals} from '../constants/animals.ts';
import globalStyles from '../global_styles.tsx';
import {useFocusEffect} from '@react-navigation/native';

type AnimatedContainerProps = {
  defaultSize:number;
  growBy:number;
  onPressOut: () => void;

}

const AnimatedCircle = (props:AnimatedContainerProps) => {
  const size = useRef(new Animated.Value(props.defaultSize)).current;
  const [isPressed, setIsPressed] = useState(false);
  const [item, setItem] = useState(() => Animals[Math.floor(Math.random() * Animals.length)]);

  useFocusEffect(
    React.useCallback(() => {
      setItem(Animals[Math.floor(Math.random() * Animals.length)]);
    }, [])
  )
  useEffect(() => {
    if (!isPressed) {
      size.setValue(props.defaultSize);
    }
  }, [isPressed, props.defaultSize, size]);

  const growCircle = () => {
    Animated.timing(size, {
      toValue: props.defaultSize + props.growBy,
      duration: 300,
      useNativeDriver: false, // we can't use native driver for layout properties
    }).start();
  };

  const shrinkCircle = () => {
    Animated.timing(size, {
      toValue: props.defaultSize,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressIn = () => {
    setIsPressed(true);
    growCircle();
  };

  const handlePressOut = () => {
    setIsPressed(false);
    shrinkCircle();
    props.onPressOut();
  };

  return (
    <View>
      {
        isPressed ? <View
          style={[
            globalStyles.row,
            {
              justifyContent: 'center',
              marginTop: '20%',
              gap: 4,
            },
          ]}>

          <Image
            source={item?.image}
            style={{
              height:160,
              width: 160,
              objectFit: 'cover',
              borderRadius: 1000,
              borderWidth:2,
              borderColor:'black',
            }}
          />
          <CustomText
            style={{textAlign: 'center', color: 'green'}}
            fontSize={36}
            fontWeight={'Medium'}>
            {isPressed ? item?.name : ''}
          </CustomText>
        </View> : null
      }
      <Pressable
        onLongPress={() => {}}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View style={{marginTop: '10%', alignItems: 'center'}}>
          <Animated.View
            style={[
              styles.circle,
              {
                height: size,
                width: size,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <CustomText fontSize={22}>Hold and release</CustomText>
          </Animated.View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 2,
    borderRadius: 1000,
    backgroundColor: AppColors.yellowAccentColor,
  },
});

export default AnimatedCircle;
