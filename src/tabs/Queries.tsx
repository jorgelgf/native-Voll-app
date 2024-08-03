import styled from 'styled-components/native';
import { Card } from '../components/card';
import { Themes } from '../themes/styles';
import { ButtonNative } from '../components';


export const Queries = () => {

  return (
    <Container>
      <BoxCenter>
        <Label>Minhas consultas</Label>
      </BoxCenter>
      <BoxButton>
        <ButtonNative style={{ backgroundColor: Themes.colors.blue[800] }}
          children='Agendar nova consulta' />
      </BoxButton>
      <Label >Próximas consultas</Label>
      <BoxCards>
        <Card
          name='Dr. Jorge Gurgel'
          specialty='Musicoterapeuta'
          urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
          date='14/03/2026'
          action={true} />
        <Divider />
        <Label >Consultas Passadas</Label>

        <Card
          name='Dr. Jorge Gurgel'
          specialty='Musicoterapeuta'
          urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
          date='11/01/2023'
          action={false} />
        <Card
          name='Dr. Jorge Gurgel'
          specialty='Musicoterapeuta'
          urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
          date='11/01/2023'
          action={false} />
        <Card
          name='Dr. Jorge Gurgel'
          specialty='Musicoterapeuta'
          urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
          date='11/01/2023'
          action={false} />
      </BoxCards>
    </Container>

  )
}

const Container = styled.ScrollView`
 flex:1;
 width: 100%;
 padding:20px;
 
`;

const BoxCenter = styled.View`
 align-items: center;
 justify-content: center;
`;

const Label = styled.Text`
 font-size: ${Themes.fontSize.xl};
 color:${Themes.colors.blue[500]};
 font-weight:bold;
 margin-top: 10px;
 margin-bottom: 10px; 
`;
const BoxCards = styled.View`
margin-bottom:25px;`;

const BoxButton = styled.View`
 margin-bottom:20px;
 `;

const Divider = styled.View`
 margin-top: 15px;
 margin-bottom: 15px;
 width: 100%;
 border: solid .5px ${Themes.colors.gray[300]};
`;
