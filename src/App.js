import './App.css';
import styles from './styles/App.module.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddRequestForm from './components/addRequestForm';
import Profile from './components/profile';
import { Box, textAlign } from '@mui/system';
import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const [user, setUser] = useState(null);
  const {auth} = useContext(FirebaseContext);
  onAuthStateChanged(auth, (user) => { setUser(user) });
  
  
  const signInComponent = () => {
    return (
      <Typography sx={{textAlign: 'center', margin: '5rem'}} variant="h5" component="h2" gutterBottom>
        Please sign in to add a request.
      </Typography>
    )
  }
  
  
  
  return (
    <Container maxWidth="false">
      <Box className={styles.header}>
      <Typography variant="h2" component="h1" gutterBottom>
        Zoey's Requests
      </Typography>
      <Profile className={styles.profile} />
      </Box>

      {user ? <AddRequestForm /> : signInComponent()}
    </Container>

  );
}

export default App;
