import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Animated,
  Pressable, View,
} from 'react-native';
import CustomText from './customTextComponent.tsx';
import {AppColors} from '../constants/colors.ts';

type AnimatedContainerProps = {
  onPressOut: () => void;
}

const AnimatedCircle = (props:AnimatedContainerProps) => {
  const size = useRef(new Animated.Value(200)).current;
  const [, setIsPressed] = useState(false);

  // Animation configs
  const growTo = 600; // maximum size when pressed
  const animationDuration = 300; // duration in milliseconds

  const growCircle = () => {
    Animated.timing(size, {
      toValue: growTo,
      duration: animationDuration,
      useNativeDriver: false, // we can't use native driver for layout properties
    }).start();
  };

  const shrinkCircle = () => {
    Animated.timing(size, {
      toValue: 200,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  // Handler functions
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
    <Pressable
      onLongPress={() => {}}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={{alignItems:"center",marginTop:"50%"}}>
        <Animated.View
          style={[
            styles.circle,
            {
              height: size,
              width: size,
              justifyContent: "center",
              alignItems: "center",
            }
          ]}
        >
          <CustomText fontSize={22}>Hold and release</CustomText>
        </Animated.View>
      </View>

    </Pressable>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 2,
    borderRadius: 1000, // using a large value ensures it stays circular even when growing
    backgroundColor: AppColors.yellowAccentColor,
  },
});

export default AnimatedCircle;
