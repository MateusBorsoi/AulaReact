import { Alert, Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Sorteador.css";

export default function Sorteador() {
  const [numeroSorteado, setNumeroSorteado] = useState();
  const [lista, setLista] = useState();
  const [error, setError] = useState();

  const onLista = (event) => {
    setLista(event.target.value);
  };

  const Sortear = () => {
    if (lista > 10 || lista < 1) {
      setError("O valor deve ser menor ou igual a 10");
      return false;
    } else {
      setError(null);
    }

    let numeros = [];

    for (var i = 0; i < lista; i++) {
      let sortear;

      do {
        sortear = Math.floor(Math.random() * 61);
      } while (numeros.includes(sortear));

      numeros.push(sortear);
    }

    numeros.sort(function (a, b) {
      return a - b;
    });

    setNumeroSorteado(numeros.join(","));
  };

  return (
    <div className="content">
      <p>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          type="number"
          className="input"
          onChange={onLista}
        />
        {numeroSorteado ? (
          <h3>
            Os valores Sorteados Foram:
            <div className="sorteio">
              <p>{numeroSorteado}</p>
            </div>
          </h3>
        ) : (
          <h3>Clique para sortear</h3>
        )}
      </p>

      <Button variant="outlined" onClick={Sortear}>
        Sortear
      </Button>
      {error && (
        <div>
          <Alert className="alert" severity="error">
            {error}
          </Alert>
        </div>
      )}
    </div>
  );
}
