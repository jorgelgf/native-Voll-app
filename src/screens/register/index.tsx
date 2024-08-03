import React, { useState } from 'react';
import { ButtonNative, FormNative, Header } from '../../components/index';
import { Themes } from '../../themes/styles';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import {
  Box, BoxButton, Container, ContainerCheckBox, HelpBox, LinksBoxRegister,
  TextCheckBox, TextLinkBold, TextLinkDefault,
  TitleSelectCheckBox
} from './styles';
import { sessions } from '../../utils/register';

export const Register = () => {
  const navigation = useNavigation();
  const [session, setSession] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const [state, setState] = useState({
    Sulamerica: false,
    Unimed: false,
    Bradesco: false,
    Amil: false,
    Biosaude: false,
    Outros: false,
    NotPlan: false,
  });

  const handleValueChange = (key, newValue) => {
    setState(prevState => ({
      ...prevState,
      [key]: newValue
    }));
  };

  const nextSessions = () => {
    (session < sessions.length - 1) ?
      setSession(session + 1) :
      console.log('excedeu')
  }

  const backSessions = () => {
    (session > 0) ? setSession(session - 1) : console.log('excedeu')
  }
  const HandleLinksLogin = () => {
    return navigation.navigate('Login');
  }
  return (


    <Container >
      <Box>
        <Header styleColor={Themes.colors.gray[500]}>{sessions[session].Tittle}</Header>
        {sessions[session].data.map((e) => {
          return <FormNative
            key={e.id}
            placeholder={e.placeholder}
            placeholderTextColor={Themes.colors.gray[150]}
            info={e.info}
            value='' onChangeText={function (t: string): void {
              throw new Error('Function not implemented.');
            }} />

        })}

        {session > 1 && <TitleSelectCheckBox>Selecione o Plano </TitleSelectCheckBox>}
        {session > 1 && (
          sessions[session].checkbox?.map((checkbox) => {
            return <ContainerCheckBox key={checkbox.id}>

              <CheckBox
                disabled={false}
                value={state.Sulamerica}
                tintColors={{ true: Themes.colors.blue[500], false: Themes.colors.gray[300] }}
                onValueChange={(newValue) => handleValueChange(checkbox.value, newValue)} />
              <TextCheckBox>
                {checkbox.value}
              </TextCheckBox>
            </ContainerCheckBox>

          }))
        }
        {session > 0 && <BoxButton><ButtonNative
          style={{ backgroundColor: Themes.colors.gray[300] }}
          onPress={backSessions}
          children='voltar' /></BoxButton>}

        <BoxButton>
          <ButtonNative
            style={{ backgroundColor: Themes.colors.blue[800] }}
            onPress={nextSessions}
            children='Avançar' />
        </BoxButton>

        <HelpBox>
          <LinksBoxRegister >
            <TextLinkDefault>Já tem cadastro? </TextLinkDefault>
            <TextLinkBold onPress={HandleLinksLogin}>Volte para tela de Login</TextLinkBold>
          </LinksBoxRegister>
        </HelpBox>
      </Box>

    </Container >)
}
