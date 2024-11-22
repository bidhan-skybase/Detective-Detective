import React from 'react';
import { Text, TextProps } from 'react-native';
import { AppColors } from '../constants/colors';

type FontWeightType = 'Regular' | 'Bold' | 'Light' | 'Medium' | 'SemiBold' | 'ExtraBold';

interface CustomTextProps extends TextProps {
  fontWeight?: FontWeightType;
  fontSize?: number;
  fontColor?: string;
  children: React.ReactNode;
  paddingTop?: number;
}

export default function CustomText({
                                     fontWeight = 'Regular',
                                     fontSize = 14,
                                     fontColor = AppColors.primaryTextColor,
                                     style,
                                     children,
                                     ...rest
                                   }: CustomTextProps) {
  const getFontFamily = (weight: FontWeightType) => {
    const fontMap = {
      'Regular': 'Parkinsans-Regular',
      'Bold': 'Parkinsans-Bold',
      'Light': 'Parkinsans-Light',
      'Medium': 'Parkinsans-Medium',
      'SemiBold': 'Parkinsans-SemiBold',
      'ExtraBold': 'Parkinsans-ExtraBold',
    };
    return fontMap[weight];
  };

  return (
    <Text
      style={[
        {
          fontSize,
          color: fontColor,
          fontFamily: getFontFamily(fontWeight),
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}
