import React, {useState, useEffect} from 'react';
import {Creators} from './store/ducks/todos';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {
  Container,
  Header,
  TitleHeader,
  Input,
  AddText,
  AddButton,
  Title,
  Div,
  EditButton,
  RemoveButton,
  TodoDiv,
  TodoText,
  ButtonDiv,
  RemoveText,
  EditText,
} from './styles';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({id: null, txt: ''});

  useEffect(() => {
    dispatch(Creators.fetchTodos());
  }, [dispatch]);

  function addEdit() {
    if (!todo.id) {
      dispatch(Creators.addTodo(todo.txt));
    } else {
      dispatch(Creators.editTodo(todo.id, todo.txt));
    }
    setTodo({id: null, txt: ''});
  }

  function remove(id) {
    dispatch(Creators.removeTodo(id));
  }

  function edit(item) {
    setTodo({id: item.id, txt: item.txt});
  }

  return (
    <Container>
      <Header>
        <TitleHeader>Todos</TitleHeader>
      </Header>

      <Input
        placeholder={'Adicione um texto'}
        value={todo.txt}
        onChangeText={(text) => setTodo({...todo, txt: text})}
      />

      <AddButton onPress={addEdit}>
        <AddText>{!todo.id ? 'Adicionar' : 'Editar'}</AddText>
      </AddButton>

      <Div>
        <Title>TODOS</Title>
      </Div>

      {todos.data.map((item) => (
        <TodoDiv key={item.id}>
          <TodoText>{item.txt}</TodoText>

          <ButtonDiv>
            <EditButton onPress={() => edit(item)}>
              <EditText>Editar</EditText>
            </EditButton>

            <RemoveButton title={'remover'} onPress={() => remove(item.id)}>
              <RemoveText>Remover</RemoveText>
            </RemoveButton>
          </ButtonDiv>
        </TodoDiv>
      ))}
    </Container>
  );
}

export default TodoList;
