import './Form.css'
import { TextField } from "@mui/material";
import { useState } from "react";

const Input = () => {
  const [valor, setValor] = useState("Inicial");

  return (
    <div className="Form">
      <TextField
        id="outlined"
        label="Informe o seu Nome"
        value={valor}
        className='input'
        onChange={(event) => setValor(event.target.value)}
      />
      <TextField
        id="outlined"
        label="Somente Leitura"
        value={valor}
        className='input'
        readOnly
      />
      <TextField
        id="outlined"
        label="Não Controlado"
        className='input'
        value={undefined}
      />
    </div>
  );
};

export default Input;
