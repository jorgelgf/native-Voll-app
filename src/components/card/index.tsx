import React from 'react';
import { Text, View } from 'react-native'
import { ButtonNative } from '../button'

import { BoxActions, BoxButton, BoxCard, Container, TextName } from './styles';
import { Avatar } from '../avatar';
import { Themes } from '../../themes/styles';

interface CardProps {
  name: string;
  specialty: string;
  date?: string;
  urlImage: string;
  action?: boolean
}

export const Card = ({ name, specialty, date, urlImage, action }: CardProps) => {
  let textButton = '' as string;

  const handleClick = () => action = !action;

  action ? textButton = 'Cancelar' : textButton = 'Agendar Consulta';

  return (<Container style={{ backgroundColor: action ? 'white' : '#d0edf5aa' }}>
    <BoxCard>
      <Avatar url={urlImage} />
      <BoxActions>
        <TextName style={{ color: Themes.colors.black }}>{name}</TextName>
        <Text style={{ color: Themes.colors.gray[300] }}>{specialty} </Text>
        <Text style={{ color: Themes.colors.gray[300] }}>{date} </Text>
      </BoxActions>
    </BoxCard>
    <BoxButton>
      <ButtonNative onPress={handleClick} style={{ backgroundColor: Themes.colors.blue[800] }}
        children={textButton} />
    </BoxButton>
  </Container>
  )
}

