import {takeLatest, put, call} from 'redux-saga/effects';
import {Types, Creators} from '../ducks/todos';
import {navigate} from '../../service/Navigation';
import api from '../../service/api';

function* home() {
  try {
    yield call(api.get, '/home');
    yield put(Creators.successTodos());
    navigate('Todos');
  } catch {
    yield put(Creators.failureTodos());
  }
}

function* getTodo() {
  try {
    const {data} = yield call(api.get, '/todos');
    yield put(Creators.successFetchTodos(data));
  } catch {
    yield put(Creators.failureFetchTodos());
  }
}

function* addTodo({txt}) {
  try {
    yield call(api.post, '/todos', {txt});
    yield put(Creators.successAddTodo());
  } catch {
    yield put(Creators.failureAddTodo());
  }
}

function* removeTodo({id}) {
  try {
    yield call(api.delete, `./todos/${id}`);
    yield put(Creators.successRemoveTodo());
  } catch {
    yield put(Creators.failureRemoveTodo());
  }
}

function* editTodo({id, txt}) {
  try {
    yield call(api.put, `/todos/${id}`, {txt});
    yield put(Creators.succesEditTodo());
  } catch {
    yield put(Creators.failureEditTodo());
  }
}

export default [
  takeLatest(
    [
      Types.FETCH_TODOS,
      Types.SUCCESS_ADD_TODO,
      Types.SUCCESS_REMOVE_TODO,
      Types.SUCCES_EDIT_TODO,
    ],
    getTodo,
  ),
  takeLatest(Types.ADD_TODO, addTodo),
  takeLatest(Types.REMOVE_TODO, removeTodo),
  takeLatest(Types.EDIT_TODO, editTodo),
  takeLatest(Types.TODOS, home),
];
