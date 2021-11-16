import React, { useState } from 'react';

//Importações do MaterialUI
import { Button, TextField} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

//React-Toastify para notificações
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Importação da URL do servidor
import {SERVER_URL} from '../../constants';

//Componente para onde a página será redirecionada após o login
import Todos from '../Todos';



const theme = createTheme();

const Login = () => {
  const [user, setUser] = useState({email: '', senha: ''});
  const [isAuthenticated, setAuth] = useState(false);
 
  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value});
  };

  const login = () => {
    fetch(SERVER_URL + 'login', {
      method: 'POST',
      body: JSON.stringify(user)
    })
      .then(res => {
        const jwtToken = res.headers.get('Authorization');
        if (jwtToken !== null) {
          sessionStorage.setItem('jwt', jwtToken);
          setAuth(true);
        }
        else {
          toast.warn('Houve um problema com o login, verifique suas credenciais. T.T', {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      })
      .catch(err => console.error(err));
  };
  

  if (isAuthenticated === true) {
    return (<Todos />);
  }
  else {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
            Login
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="senha"
                  label="senha"
                  type="password"
                  onChange={handleChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  variant="outlined" color="primary" 
                  fullWidth
                  onClick={login}>
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                  Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {'Criar uma conta'}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        <ToastContainer autoClose={1500} /> 
      </div>
    );
  }
};

export default Login;