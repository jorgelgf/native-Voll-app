import React from 'react';
import { HeaderBox, TextHeader } from './styles';

type HeaderProps = {
  children: string
  styleColor?: string;
};

export const Tittle = ({ children, styleColor }: HeaderProps) => {
  return (
    <HeaderBox>
      <TextHeader style={{ color: styleColor }}>{children}</TextHeader>
    </HeaderBox>)
}