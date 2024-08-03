import styled from 'styled-components/native';
import { Themes } from '../../themes/styles';


export const InputStyle = styled.TextInput`
 background-color:${Themes.colors.gray[100]};
 font-size: ${Themes.fontSize.lg};
 width: 100%;
 border-radius: ${Themes.fontSize.xs};
 padding-left: 10px;
 padding-right: 10px;
 padding: 12px;
 color:${Themes.colors.gray[500]};
 border-color: #ddd;
 border-radius: 8px;
 font-size: 16px;
 elevation: 5;
`;

export const Box = styled.SafeAreaView`
 align-items: center;
 width: 100%;
`;

export const TextLabel = styled.Text`
 color: ${Themes.colors.blue[800]};
 width: 100%;
 display: flex;
 align-items: start;
 justify-content: start;
 font-size: ${Themes.fontSize.lg};
 margin-top: 15px;
`