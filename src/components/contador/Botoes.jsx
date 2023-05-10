import { Button } from "@mui/material";

export default function Botoes(props) {
  return (
    <div>
      <Button variant="outlined" onClick={props.incrementar}>
        +
      </Button>
      <Button variant="outlined" onClick={props.decrementar}>
        -
      </Button>
    </div>
  );
}
