import {Card, CardContent, Typography } from '@mui/material';
import { Todo } from '../../hooks/useTodos';

interface TodoItemProps {
  data: Todo;
}

//LISTA DE TODOs
const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { data } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          Todo: {data.todo}
        </Typography>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          Data: {data.data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
