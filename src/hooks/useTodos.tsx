import { useEffect, useState } from 'react';
import api from '../api';

export interface Todo {
  id: number;
  todo: string;
  data: Date;
}

export interface CreateTodoData {
  todo: string;
  data: Date;
  email: string;
}


function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([] as Todo[]);


  //FUNCAO PARA ADICIONAR UM TODO NA API
  const createTodo = async (todo: CreateTodoData) => {
    api.post('/todos', todo);
  };

  //CAMINHO PARA FAZER O GET EM TODOs POR EMAIL
  const getTodo = '/todos/search/byEmail?email=nanda@teste8.com';

  useEffect(() => {api.get<Todo[]>(getTodo).then(result => {
    setTodos(result.data);});
  }, []);


  return { todos, createTodo };
}

export default useTodos;
