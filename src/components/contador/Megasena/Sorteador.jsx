import { Button } from "@mui/material";
import { useState } from "react";
import './Sorteador.css'

export default function Sorteador() {
  const [numeroSorteado, setNumeroSorteado] = useState();

  const Sortear = () => {
    let numeros = [];

    for (var i = 0; i < 10; i++) {
      let sortear;

      do {
        sortear = Math.floor(Math.random() * 61);
      } while (numeros.includes(sortear));

      numeros.push(sortear);
    }

    numeros.sort(function (a, b) {
      return a - b;
    });

    const numerosAjustados = numeros.join(",");
    setNumeroSorteado(numerosAjustados);
  };

  return (
    <div className="content">
      <p>
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
    </div>
  );
}
