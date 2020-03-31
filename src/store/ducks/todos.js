import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  fetchTodos: [],
  successFetchTodos: ['data'],
  failureFetchTodos: [],
  addTodo: ['txt'],
  successAddTodo: [],
  failureAddTodo: [],
  removeTodo: ['id'],
  successRemoveTodo: [],
  failureRemoveTodo: [],
  editTodo: ['id', 'txt'],
  succesEditTodo: [],
  failureEditTodo: [],
});

const INITIAL_STATE = {
  data: [],
  loading: false,
};

const fetchTodos = (state, action) => ({
  ...state,
  loading: true,
});

const successFetchTodos = (state, action) => ({
  ...state,
  data: action.data,
  loading: false,
});

const failureFetchTodos = (state, action) => ({
  ...state,
  data: [],
  loading: false,
});

const addTodo = (state, action) => ({
  ...state,
  loading: true,
});

const successAddTodo = (state, action) => ({
  ...state,
  loading: false,
});

const failureAddTodo = (state, action) => ({
  ...state,
  loading: false,
});

const removeTodo = (state, action) => ({
  ...state,
  loading: true,
});

const successRemoveTodo = (state, action) => ({
  ...state,
  loading: false,
});

const failureRemoveTodo = (state, action) => ({
  ...state,
  loading: false,
});

const editTodo = (state, action) => ({
  ...state,
  loading: true,
});

const succesEditTodo = (state, action) => ({
  ...state,
  loading: false,
});
const failureEditTodo = (state, action) => ({
  ...state,
  loading: false,
});
export default createReducer(INITIAL_STATE, {
  [Types.FETCH_TODOS]: fetchTodos,
  [Types.SUCCESS_FETCH_TODOS]: successFetchTodos,
  [Types.FAILURE_FETCH_TODOS]: failureFetchTodos,
  [Types.ADD_TODO]: addTodo,
  [Types.SUCCESS_ADD_TODO]: successAddTodo,
  [Types.FAILURE_ADD_TODO]: failureAddTodo,
  [Types.REMOVE_TODO]: removeTodo,
  [Types.SUCCESS_REMOVE_TODO]: successRemoveTodo,
  [Types.FAILURE_REMOVE_TODO]: failureRemoveTodo,
  [Types.EDIT_TODO]: editTodo,
  [Types.SUCCES_EDIT_TODO]: succesEditTodo,
  [Types.FAILURE_EDIT_TODO]: failureEditTodo,
});
