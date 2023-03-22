import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FirebaseContext } from "../firebase";
import Button from "@mui/material/Button";
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
import styles from '../styles/Profile.module.css'

function Profile() {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/userinfo.email");
 
  const { auth } = useContext(FirebaseContext);
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => { setUser(user) });
  
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.profile}>
      <Typography variant="h5" component="h2" gutterBottom>
        {user ? `Welcome ${user.displayName}` : "Please sign in"}
      </Typography>
      <Button
        variant="contained"
        color={user ? "error" : "primary"}
        onClick={() => {
          user ? signOut() : signIn();
        }}
      >
        {user ? "Sign Out" : "Sign In"}
      </Button>
    </div>
  );
}

export default Profile;
