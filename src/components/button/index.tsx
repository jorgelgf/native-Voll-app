import React from 'react'
import { Button, TextButton } from './styles'

interface ButtonNativeProps {
  children: string
  onPress?: () => void;
  style?: { backgroundColor: string };
}

export const ButtonNative = ({ children, onPress, style }: ButtonNativeProps) => {

  return (
    <Button style={style} >
      <TextButton onPress={onPress} >{children}</TextButton>
    </Button>)
}