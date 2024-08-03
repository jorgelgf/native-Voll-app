
import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const Button = styled.TouchableOpacity`
 border-radius: ${Themes.fontSize.xs};
 padding: ${Themes.fontSize.xs};
 `;

export const TextButton = styled.Text`
 color:${Themes.colors.white} ;
 text-align: center;
 font-size: ${Themes.fontSize.lg};
`;