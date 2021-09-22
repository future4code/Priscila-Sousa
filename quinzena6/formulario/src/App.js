import React from 'react';
import styled from 'styled-components';
import Etapa1 from './pages/Etapa1';

// Uma coisa eu tenho certeza, eu não entendi, pelo menos por enquanto.

const etapa1 = styled.div`
  display: grid;
  justify-items: center;
  margin: 10px;
  padding: 10px;

`;

const tituloEtapa1 = styled.div`
  
`

class App extends React.Component {
  state = {
    nomeUsuario: "",
    idadeUsuario: "",
    emailUsuario: "",
    escolaridadeUsuario: "",
  };

  nomeUsuario = (event) => {
    this.setState({nomeUsuario: event.target.value});
  };

  emailUsuario = (event) => {
    this.setState({emailUsuario: event.target.value});
  };

  idadeUsuario = (event) => {
    this.setState({idadeUsuario: event.target.value});
  };

  escolaridadeUsuario = (event) => {
    this.setState({escolaridadeUsuario: event.target.value});
  };


  render() {

    const novoArrayUsuarios = this.state.publicacao.map((usuario) => {
      return (
        <Etapa1
          nomeUsuario={usuario.nomeUsuario}
          idadeUsuario={usuario.idadeUsuario}
          emailUsuario={usuario.emailUsuario}
        />
        );
    });

    return (
      <etapa1>      
        <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>  
          <br></br>       
          <li>1. Qual o seu nome?</li>
          <br></br>
          <input
            placeholder={"Digite seu nome"}
            value={this.state.nomeUsuario}
            onChange={this.changeNomeUsuario}
            />
          <br></br>
          <li>2. Qual a sua idade?</li>
          <br></br>
          <input
            placeholder={"Digite sua idade"}
            value={this.state.IdadeUsuario}
            onChange={this.changeIdadeUsuario}
            />
          <br></br>
          <li>3. Qual o seu email?</li>
          <br></br>
          <input
            placeholder={"Digite seu email"}
            value={this.state.emailUsuario}
            onChange={this.changeEmailUsuario}
            />
          <br></br>
          <li>4. Qual a sua escolaridade?</li>
          <br></br>
          <input
            placeholder={"qual sua escolaridade?"}
            value={this.state.nomeUsuario}
            onChange={this.changeEscolaridadeUsuario}
            />
          <br></br>
          <button>Proxima Etapa</button>
        </div>
      </etapa1>
    )
  };
}

export default App; 
