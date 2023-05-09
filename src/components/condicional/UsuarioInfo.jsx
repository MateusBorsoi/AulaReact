const UsuarioInfo = (props) => {

    const usuario = props.usuario || {}
    
  return <div>
    Seja Bem-vindo {usuario.nome}
  </div>;
};

export default UsuarioInfo;
