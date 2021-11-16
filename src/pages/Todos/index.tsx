//Importações do MaterialUI
import { AddTask as AddTaskIcon } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import AddTodoModal from '../../components/AddTodoModal';

//Componente
import TodoItem from '../../components/TodoItem';

//Hooks
import useTodos from '../../hooks/useTodos';


const Todos: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const { todos} = useTodos();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddTaskIcon />}
        onClick={handleOpen}
      >
        Add TODO
      </Button> 
      <AddTodoModal open={open} onClose={handleClose} />
      <Stack spacing={4} p={2}>
        <Typography variant="h4">Minha lista de TODOs</Typography>
        {todos.map((todo) => (
          <TodoItem data={todo} key={todo.id} />
        ))}
      </Stack>
    </div>
  );
};

export default Todos;
