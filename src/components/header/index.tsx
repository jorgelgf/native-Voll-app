import React from 'react';
import { LogoImage, HeaderBox, TextHeader } from './styles';
import Logo from '../../assets/Logo.png'
import { Tittle } from '../Tittle';
type HeaderProps = {
  children: string;
  styleColor?: string;

};

export const Header = ({ children, styleColor }: HeaderProps) => {
  return (
    <HeaderBox>
      <LogoImage source={Logo} alt='Logo Voll' />
      <Tittle styleColor={styleColor}>{children}</Tittle>
    </HeaderBox>)
}