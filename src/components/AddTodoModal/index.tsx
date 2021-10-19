import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Modal,
  TextField,
  CardActions,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import useTodos, { CreateTodoData } from '../../hooks/useTodos';

interface AddTodoModalProps {
  open: boolean;
  onClose: () => void;
}

const AddTodoModal: React.FC<AddTodoModalProps> = (props) => {
  const { open, onClose } = props;

  const { createTodo } = useTodos();


  //FUNCAO DE REGISTRO
  const { register, handleSubmit } = useForm<CreateTodoData>({
    defaultValues: {
      todo: '',
      data: new Date(),
      email: '',
    },
  });

  //EVENTO DE SUBMETER O FORM 
  const onSubmit = async (createTodoData: CreateTodoData) => {
    await createTodo(createTodoData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
          }}
        >
          <CardHeader
            title="Criar #todo"
            subheader="Criando uma nova tarefa 🔥"
          />
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField fullWidth label="Tarefa" {...register('todo')} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="email" {...register('email')} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="datetime-local"
                  label="Data"
                  InputLabelProps={{ shrink: true }}
                  {...register('data')}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button variant="contained" color="error" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="outlined" type="submit">
              Confirmar
            </Button>
          </CardActions>
        </Card>
      </form>
    </Modal>
  );
};

export default AddTodoModal;
