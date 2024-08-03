import { Avatar, Tittle } from '../components';
import styled from 'styled-components/native';
import { Themes } from '../themes/styles';

export const Profile = () => {

  return (
    <Container alignItems='center'>
      <BoxProfile>
        <Tittle styleColor={Themes.colors.blue[800]}>Meu Perfil</Tittle>
        <Avatar url='https://avatars.githubusercontent.com/u/47546263?v=4' />
        <BoxTextProfile>
          <Tittle styleColor={Themes.colors.blue[800]}>Informações pessoais</Tittle>
          <TextNameInfoProfile >Jorge Gurgel</TextNameInfoProfile>
          <TextInfoProfile >14/03/1988</TextInfoProfile>
          <TextInfoProfile >Janduís-RN</TextInfoProfile>
        </BoxTextProfile>
        <Divider />
        <Tittle styleColor={Themes.colors.blue[800]}>Histório Médico</Tittle>
        <TextMedicalHistory >Bronquite</TextMedicalHistory>
        <TextMedicalHistory >Sinusite</TextMedicalHistory>

      </BoxProfile>
    </Container>
  )
}

const Container = styled.ScrollView`
flex:1;
 display: flex;
`;

const BoxProfile = styled.View`
 width: 90%;
 padding-top:25px;
 align-items: center;
 justify-content: center;
`;

const Divider = styled.View`
 margin-top: 15px;
 margin-bottom: 15px;
 width: 100px;
 border: solid .5px ${Themes.colors.gray[300]};
`;

const BoxTextProfile = styled.View`
align-items:center;
height: auto;
`;

const TextNameInfoProfile = styled.Text`
 color:${Themes.colors.gray[500]};
 font-size: ${Themes.fontSize.lg};
 font-weight: 900;
 margin-top:15px;
`;
const TextInfoProfile = styled.Text`
 color:${Themes.colors.gray[300]};
 font-size: ${Themes.fontSize.md};
 margin-top:15px;
`;

const TextMedicalHistory = styled.Text`
 color:${Themes.colors.gray[500]};
 font-size: ${Themes.fontSize.md};
 margin-top:15px;
`;
