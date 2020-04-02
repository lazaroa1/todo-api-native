import React, {useState, useEffect} from 'react';
import {Creators} from '../../store/ducks/todos';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  Container,
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

const schema = Yup.object().shape({
  txt: Yup.string().required('Campo vazio').min(2, 'No minimo 2 letras'),
});

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Creators.fetchTodos());
  }, [dispatch]);

  function remove(id) {
    dispatch(Creators.removeTodo(id));
  }

  function onSubmit(values, {resetForm}) {
    if (!values.id) {
      dispatch(Creators.addTodo(values.txt));
    } else {
      dispatch(Creators.editTodo(values.id, values.txt));
    }
    resetForm();
  }

  return (
    <Formik
      initialValues={{id: null, txt: ''}}
      onSubmit={onSubmit}
      validationSchema={schema}>
      {({handleSubmit, handleChange, values, errors, setValues}) => {
        console.log(values);
        return (
          <Container>
            <Input
              placeholder={'Adicione um texto'}
              value={values.txt}
              onChangeText={handleChange('txt')}
            />
            {errors.txt ? <AddText>{errors.txt}</AddText> : null}
            <AddButton onPress={handleSubmit}>
              <AddText>{!values.id ? 'Adicionar' : 'Editar'}</AddText>
            </AddButton>

            <Div>
              <Title>TODOS</Title>
            </Div>

            {todos.data.map((item) => (
              <TodoDiv key={item.id}>
                <TodoText>{item.txt}</TodoText>

                <ButtonDiv>
                  <EditButton onPress={() => setValues(item)}>
                    <EditText>Editar</EditText>
                  </EditButton>

                  <RemoveButton
                    title={'remover'}
                    onPress={() => remove(item.id)}>
                    <RemoveText>Remover</RemoveText>
                  </RemoveButton>
                </ButtonDiv>
              </TodoDiv>
            ))}
          </Container>
        );
      }}
    </Formik>
  );
}

export default TodoList;
