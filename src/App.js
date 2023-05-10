import "./index.css";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametros from "./components/basicos/ComParametros";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/basicos/Repetição/ListaAlunos";
import ListaProdutos from "./components/basicos/Repetição/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import LabelText from "./input/LabelText";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Sorteador from "./components/contador/Megasena/Sorteador";

export default function App() {
  return (
    <div className="principal">
      <div className="cards">
        <Card titulo="Familia" color="#3498DB">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Mateus" />
            <FamiliaMembro nome="Teste" />
            <FamiliaMembro nome="Teste2" />
          </Familia>
        </Card>
        <Card titulo="Valor Aleatório" color="#CD5B5B">
          <Aleatorio min={1} max={10} />
        </Card>
        <Card titulo="Com Parametros" color="#D33E1E">
          <ComParametros aluno="Teste" nota={8} />
        </Card>
        <Card titulo="Primeiro Componente" color="#089CA4">
          <Primeiro />
        </Card>
        <Card titulo="Listar Alunos" color="#1D41D2">
          <ListaAlunos />
        </Card>
        <Card titulo="Lista de Produtos" color="#0ABD99">
          <ListaProdutos />
        </Card>
        <Card titulo="Par ou Ímpar" color="#F5B041">
          <ParOuImpar numero={15} />
          <UsuarioInfo usuario={{ nome: "Mateus" }} />
        </Card>
        <Card titulo="Input Text" color="#41C1BF">
          <LabelText />
        </Card>
        <Card titulo="Formulário" color="#A04000">
          <Input />
        </Card>
        <Card titulo="Contador" color="#5B2C6F">
          <Contador numeroInicial={10} passoInicial={2} />
        </Card>
        <Card titulo="Sorteador" color="#3498DB">
          <Sorteador />
        </Card>
      </div>
    </div>
  );
}
