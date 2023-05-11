import Menu from "./components/layout/Menu";
import "./index.css";
import React from "react";
import Conteudo from "./rotas/Conteudo";

export default function App() {
  return (
    <div className="principal">
      <Menu />
      <Conteudo/>
     
    </div>
  );
}
