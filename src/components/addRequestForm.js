import Container from '@mui/material/Container';
import schema from '../schemas/createRequest.schema';
import schemaBuilder from '../schemas/builder';
import { addDoc, collection  } from "firebase/firestore"; 
import { useContext, useRef  } from 'react';
import { FirebaseContext} from '../firebase';
import { Button } from '@mui/material';

let firestore;
let user;
let formRef;

const handleFormSubmission = async (data) => {
  try {
    await addDoc(collection(firestore, "requests"), {
      ...data,
      user: user.email
    });
    formRef.current.reset();
    alert("Request added successfully");
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error adding document");
  }
}

function AddRequestForm() {
  const context = useContext(FirebaseContext)
  firestore = context.firestore;
  let auth = context.auth;
  user = auth.currentUser;

  formRef = useRef(null);
  const form = schemaBuilder(schema, formRef, handleFormSubmission);


  return (
    <Container maxWidth="false">
      {form}
    </Container>
  );
}

export default AddRequestForm;