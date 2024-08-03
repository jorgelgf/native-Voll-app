import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';

export const Container = styled.View`
 flex:1;
 background-color: ${Themes.colors.white};
 display: flex;
 padding-top:25px;
 align-items: center;
 justify-content: center;
 `;

export const BoxButton = styled.View`
 margin-top: 20px;
`;
export const Box = styled.SafeAreaView`
 width: 90%;
`;

export const HelpBox = styled.SafeAreaView`
  padding-top: 10px;
`;

export const LinksBoxPass = styled.TouchableOpacity`
 width: 100%;
 flex-direction:row;
 align-items: center;
 justify-content: center;
 padding-top: 10px;
`;

export const LinksBoxRegister = styled.TouchableOpacity`
 width: 100%;
 flex-direction:row;
 align-items: center;
 justify-content: center;
 padding-top: 10px;
 margin-top: 20px;
`;

export const TextLinkDefault = styled.Text`
 color:${Themes.colors.gray[300]};
`;

export const TextLinkBold = styled.Text`
 color: ${Themes.colors.blue[500]};
 font-weight: bolder;
`;