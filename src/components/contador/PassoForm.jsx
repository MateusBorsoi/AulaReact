import { TextField } from "@mui/material";

export default function PassoForm(props){
    return (
        <div>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            type="number"
            className="input"
            value={props.passoatual}
            onChange={props.passo}
          />
        </div>
    )
}