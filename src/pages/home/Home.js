import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./Home.module.css";
import { SaveUserForm } from "../../hook/saveUserForm";   

export function Home() {
  const [nameUser, setName] = useState(''); 
  const [lastname, setLastName] = useState(''); 
  const [age, setAge] = useState(''); 
  const [email, setEmail] = useState(''); 

  const [saveUser] = SaveUserForm();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    await saveUser(nameUser, lastname, age, email);

    window.location.href = '/table'

    alert('Clicou no botão!')
  }

  return (
    <div className={styles.container_home}>
      <h1>Mateial UI + Material Table - React JS</h1>
      <form onSubmit={handleSubmit}> 
        <TextField
          required
          sx={{margin: "10px 0 "}} 
          fullWidth 
          placeholder="Enter your name" 
          onChange={(e) => setName(e.target.value)}
          label="Your name" 
        />

        <TextField
          required
          sx={{margin: "10px 0 "}} 
          fullWidth 
          placeholder="Enter your lastname" 
          onChange={(e) => setLastName(e.target.value)}
          label="Your lastname" 
        />

        <TextField
          required
          sx={{margin: "10px 0 "}} 
          fullWidth 
          type='number'
          placeholder="Enter your age" 
          onChange={(e) => setAge(e.target.value)}
          label="Your age" 
        />

        <TextField
          required
          sx={{margin: "10px 0 "}} 
          fullWidth 
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)} 
          label="Your email" 
        />

        <Button type="submit" variant="contained">Add data</Button>
      </form>
    </div>
  );
}
