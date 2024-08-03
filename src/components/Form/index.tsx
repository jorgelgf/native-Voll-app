import React from 'react';
import { InputStyle, Box, TextLabel } from './styles';

// Define a interface para as props
interface InputProps {
  placeholder: string;
  placeholderTextColor: string;
  info: string;
  value: string;
  onChangeText: (t: string) => void;
};
export const FormNative: React.FC<InputProps> = ({
  placeholder,
  placeholderTextColor,
  info,
  value,
  onChangeText
}) => {
  return (
    <Box>
      <TextLabel>{info}</TextLabel>
      <InputStyle
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText}
      />
    </Box>
  );
};
