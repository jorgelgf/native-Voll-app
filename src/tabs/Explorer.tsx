import { InputStyle } from '../components/Form/styles';
import { ButtonNative, Tittle } from '../components';
import styled from 'styled-components/native';
import { Themes } from '../themes/styles';
import { Card } from '../components/card';

export const Explorer = () => {

  return (
    <Container>
      <BoxSession>
        <BoxSearch>
          <InputStyle placeholder='Digite a especialidade' placeholderTextColor={Themes.colors.gray[150]} />
          <InputStyle placeholder='Digite sua localização' placeholderTextColor={Themes.colors.gray[150]} />
          <ButtonNative
            style={{ backgroundColor: Themes.colors.blue[800] }}
            children='Buscar' />
        </BoxSearch>

        <BoxTittle>
          <Tittle styleColor={Themes.colors.blue[500]}>Resultado da busca</Tittle>
        </BoxTittle>
        <BoxCard>
          <Card
            name='Dr. Jorge Gurgel'
            specialty='Musicoterapeuta'
            urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
            date='14/03/2026'
            action={false} />
          <Card
            name='Dr. Jorge Gurgel'
            specialty='Musicoterapeuta'
            urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
            date='14/03/2026'
            action={false} />
          <Card
            name='Dr. Jorge Gurgel'
            specialty='Musicoterapeuta'
            urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
            date='14/03/2026'
            action={false} />
          <Card
            name='Dr. Jorge Gurgel'
            specialty='Musicoterapeuta'
            urlImage='https://avatars.githubusercontent.com/u/47546263?v=4'
            date='14/03/2026'
            action={false} />
        </BoxCard>

      </BoxSession>

    </Container>
  )
}


const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
})``;
const BoxSearch = styled.View`
 padding: 15px;
 gap:15px;
 margin-top: 30px;
 background-color:${Themes.colors.gray[100]};
 width: 100%;
 border-radius: ${Themes.fontSize.xs};
 border-color: #ddd;
 border-radius: 8px;
 elevation: 5;
`;

const BoxTittle = styled.View`
 margin-top: 20px;
`;
const BoxCard = styled.View`
 margin-top:10px;

`;

const BoxSession = styled.View`
 width:90%;
 margin-bottom: 40px;
`
