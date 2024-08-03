import React from 'react';
import { ButtonNative, Header, Tittle } from '../components';
import { Themes } from '../themes/styles';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { testimony } from '../utils/testimony';

export const Home = () => {

  return (
    <Container>
      <BoxSession>
        <BoxHeader>
          <Header styleColor={Themes.colors.blue[500]}>Boas-vindas!</Header>
        </BoxHeader>
        <BoxSearch>
          <InputStyle placeholder='Digite a especialidade' placeholderTextColor={Themes.colors.gray[150]} />
          <InputStyle placeholder='Digite sua localização' placeholderTextColor={Themes.colors.gray[150]} />
          <ButtonNative
            style={{ backgroundColor: Themes.colors.blue[800] }}
            children='Buscar' />
        </BoxSearch>
        <BoxTestimony>
          <BoxTittle>
            <Tittle
              styleColor={Themes.colors.blue[800]}>
              Depoimentos
            </Tittle>
          </BoxTittle>

          {testimony.map((data) => {
            return <View key={data.id}>
              <Testimony>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </Testimony>
              <Author>
                Júlio, 40 anos, São Paulo/SP.
              </Author>
              <Divider />
            </View>

          })}

        </BoxTestimony>
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

const BoxSession = styled.View`
 width:90%;
 margin-bottom: 40px;
`

const BoxHeader = styled.View`
 margin-top: 30px;
`;

const BoxSearch = styled.View`
 padding: 15px;
 gap:15px;
 background-color:${Themes.colors.gray[100]};
 width: 100%;
 border-radius: ${Themes.fontSize.xs};
 border-color: #ddd;
 border-radius: 8px;
 elevation: 5;
`;
const BoxTestimony = styled.View`

`;
const BoxTittle = styled.View`
margin-top: 20px;
`;
const Testimony = styled.Text`
margin-top: 10px;
color:${Themes.colors.gray[500]};
font-size: ${Themes.fontSize.md};
`;
const Author = styled.Text`
color:${Themes.colors.black};
font-size: ${Themes.fontSize.md};
margin-top: 10px;
text-align: center;
`;
const Divider = styled.View`
border: solid .5px ${Themes.colors.gray[150]};
width: 100%;
margin-top: 15px;
`;

const InputStyle = styled.TextInput`
background-color:${Themes.colors.gray[100]};
 font-size: ${Themes.fontSize.lg};
 width: 100%;
 border-radius: ${Themes.fontSize.xs};
 padding-left: 10px;
 padding-right: 10px;
 color:${Themes.colors.gray[500]};
 border-color: #ddd;
 border-radius: 8px;
 font-size: 16px;
 elevation: 5;  
`