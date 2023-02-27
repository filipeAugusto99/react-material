import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <>
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        variant="standard"
      />
      <Button variant="contained">
        Hello World!!
      </Button>
    </>
  );
}

export default App;
