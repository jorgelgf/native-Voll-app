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

export const Box = styled.ScrollView`
 width: 90%;
`;

export const ContainerCheckBox = styled.View`
flex-direction: row;
align-items: center;
`;

export const TextCheckBox = styled.Text`
 color:${Themes.colors.gray[300]};
`;

export const TitleSelectCheckBox = styled.Text`
 color: ${Themes.colors.blue[800]};
 font-weight: bold;
 margin-bottom: 10px;
 font-size: ${Themes.fontSize.md};

`;
export const LinksBoxPass = styled.TouchableOpacity`
 width: 100%;
 flex-direction:row;
 align-items: center;
 justify-content: center;
 padding-top: 10px;
`;

export const BoxButton = styled.View`
 margin-top: 20px;
`;

export const HelpBox = styled.SafeAreaView`
  padding-top: 10px;
  margin-bottom: 30px;
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
