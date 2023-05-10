import TextField from '@mui/material/TextField'
import { useState } from 'react';

const LabelText = () => {

    const [nome, setNome] = useState(null)

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="Informe o seu Nome"
        onChange={event => setNome(event.target.value)}
      />
      <p>{nome}</p>
    </div>
    
  );
};

export default LabelText;
