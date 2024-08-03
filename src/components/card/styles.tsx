

import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';


export const Container = styled.View`
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const BoxCard = styled.View`
flex-direction: row;
 `;

export const BoxButton = styled.View`
margin-top: 10px;
`;

export const BoxActions = styled.View`
flex-direction:column;
width:100%;
margin-left: 10px;
justify-content: center;
`;

export const TextName = styled.Text`
  font-size: ${Themes.fontSize.lg};
`

