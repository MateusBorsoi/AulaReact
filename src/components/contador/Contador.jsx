import "./Contador.css";
import { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";
export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (event) => {
    this.setState({
      passo: +event.target.value,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.setPasso} passoatual={this.state.passo} />
        <Botoes incrementar={this.inc} decrementar={this.dec} />
      </div>
    );
  }
}
