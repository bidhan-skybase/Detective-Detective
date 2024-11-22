import React from 'react';
import { StyleSheet, TextInput, TextInputProps, ViewStyle } from "react-native";

interface TextFieldProps extends TextInputProps {
  style?: ViewStyle;
}

export default function TextFieldComponent({
                                             placeholder = "Default placeholder",
                                             value,
                                             onChangeText,
                                             style, // Destructure the custom style prop
                                             ...rest // Spread remaining TextInputProps for additional flexibility
                                           }: TextFieldProps) {
  return (
    <TextInput
      style={[styles.textFieldStyle, style]} // Merge default styles with custom styles
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...rest} // Pass down additional TextInputProps
    />
  );
}

const styles = StyleSheet.create({
  textFieldStyle: {
    height: 48,
    borderRadius: 8,     // Text color
    fontWeight: "bold",  // Text weight (bold in this case)
    borderWidth: 2,
    borderColor: "black",
    paddingLeft: 16,
    fontFamily: "Parkinsans-SemiBold",
    fontSize:20,
  },
});
