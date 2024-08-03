import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const HeaderBox = styled.SafeAreaView`
 width: 100%;
 align-items: center;
 padding-bottom: 5px;
`;

export const TextHeader = styled.Text`
 font-size: ${Themes.fontSize.xl};
 color:${Themes.colors.gray[500]};
 font-weight:bold;
 text-align: center;
 margin-top: 10px;
`;