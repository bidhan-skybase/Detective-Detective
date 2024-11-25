import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Animated, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { AppColors } from '../constants/colors';
import {CategoryItem} from '../type';
import CustomText from './customTextComponent.tsx';

type AnimatedContainerProps = {
  defaultSize: number;
  growBy: number;
  onPressOut: () => void;
  items: CategoryItem[];
  currentPlayer: number;
  totalPlayers: number;
}

const AnimatedCircle = (props: AnimatedContainerProps) => {
  const size = useRef(new Animated.Value(props.defaultSize)).current;
  const [isPressed, setIsPressed] = useState(false);
  const [item, setItem] = useState(() => props.items[Math.floor(Math.random() * props.items.length)]);
  const [isLiar, setIsLiar] = useState(false);
  const liarPlayerRef = useRef<number>(0);

  // Reset game state when component gains focus
  useFocusEffect(
    React.useCallback(() => {
      setItem(props.items[Math.floor(Math.random() * props.items.length)]);
      // Randomly select a player to be the liar (1 to totalPlayers)
      liarPlayerRef.current = Math.floor(Math.random() * props.totalPlayers) + 1;
    }, [props.items, props.totalPlayers])
  );

  useEffect(() => {
    if (!isPressed) {
      size.setValue(props.defaultSize);
    }
    // Check if current player is the liar
    setIsLiar(props.currentPlayer === liarPlayerRef.current);
  }, [isPressed, props.defaultSize, size, props.currentPlayer]);

  const growCircle = () => {
    Animated.timing(size, {
      toValue: props.defaultSize + props.growBy,
      duration: 300,
      useNativeDriver: false,
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

  const renderContent = () => {
    if (!isPressed) return <CustomText fontSize={22}>Hold and release</CustomText>;

    if (isLiar) {
      return (
        <View style={styles.contentContainer}>
          <CustomText
            style={{ textAlign: 'center', color: 'red' }}
            fontSize={36}
            fontWeight={'Medium'}>
            You are the LIAR!
          </CustomText>
          <CustomText
            style={{ textAlign: 'center', color: 'grey', marginTop: 8 }}
            fontSize={24}
            fontWeight={'Medium'}>
            Try to blend in!
          </CustomText>
        </View>
      );
    }

    return (
      <View style={styles.contentContainer}>
        <Image
          source={item?.image}
          style={styles.itemImage}
        />
        <CustomText
          style={{ textAlign: 'center', color: 'green' }}
          fontSize={36}
          fontWeight={'Medium'}>
          {item?.name}
        </CustomText>
      </View>
    );
  };

  return (
    <View>
      <Pressable
        onLongPress={() => {}}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View style={{ marginTop: '10%', alignItems: 'center' }}>
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
            {renderContent()}
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
    backgroundColor: AppColors.purpleAccentColor,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  itemImage: {
    height: 160,
    width: 160,
    objectFit: 'cover',
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: 'black',
  },

});

export default AnimatedCircle;
