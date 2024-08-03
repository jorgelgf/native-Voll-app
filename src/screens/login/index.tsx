import React, { useState } from 'react';
import { ButtonNative, FormNative, Header } from '../../components/index';
import { Themes } from '../../themes/styles';
import { useNavigation } from '@react-navigation/native';

import { Box, BoxButton, Container, HelpBox, LinksBoxPass, LinksBoxRegister, TextLinkBold, TextLinkDefault } from './styles';
export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleLinksPass = () => {
    return console.log('Esqueci senha!');
  }

  const HandleLinksRegister = () => {
    return navigation.navigate('Register');
  }


  return (
    <Container >
      <Header styleColor={Themes.colors.gray[500]}>Faça login em sua conta</Header>

      <Box>

        <FormNative
          placeholder='Insira seu e-mail aqui'
          placeholderTextColor={Themes.colors.gray[150]}
          info='Email'
          value={email}
          onChangeText={(t: string) => setEmail(t)}
        />
        <FormNative
          placeholder='Insira sua senha'
          placeholderTextColor={Themes.colors.gray[150]}
          info='Senha'
          value={password}
          onChangeText={(t) => setPassword(t)}

        />
        <BoxButton>
          <ButtonNative
            onPress={() => navigation.navigate('Tabs')}
            style={{ backgroundColor: Themes.colors.blue[800] }}
            children='Entrar' />
        </BoxButton>
        <HelpBox>
          <LinksBoxPass onPress={HandleLinksPass}>
            <TextLinkDefault>Esqueceu sua senha?</TextLinkDefault>
          </LinksBoxPass>
          <LinksBoxRegister onPress={HandleLinksRegister}>
            <TextLinkDefault>Ainda não tem cadastro? </TextLinkDefault>
            <TextLinkBold >Faça seu cadastro!</TextLinkBold>
          </LinksBoxRegister>
        </HelpBox>

      </Box>

    </Container >)


}
