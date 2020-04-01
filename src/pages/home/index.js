import React from 'react';
import {Creatos, Creators} from '../../store/ducks/todos';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  TitleButton,
  TitleP,
  TitleS,
  TodoButton,
  TextContainer,
} from './styles';
function Home(props) {
  return (
    <Container>
      <TextContainer>
        <TitleP>Bem Vindo(a) !!</TitleP>
      </TextContainer>

      <TodoButton onPress={() => props.navigation.navigate('Todos')}>
        <TitleButton>Todos</TitleButton>
      </TodoButton>
    </Container>
  );
}

export default Home;
