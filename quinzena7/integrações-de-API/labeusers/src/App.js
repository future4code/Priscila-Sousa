import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import Usuario from './pagina2'

// const Body = styled.div` 
//   display: grid;
//   align-items: center;
//   justify-content: center;
// `

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const header = {
  headers: {
    Authorization: "priscila-sousa-banu"
  }
};

export default class app extends React.Component {
  state = {
    nome: "",
    email: "",
    lista: [],
    paginas: false,
  }

  componentDidMount() {
    this.pegarNomes();
  };

  pegarNomes = () => {
    axios
    .get(url, header)
    .then((res) => {
      this.setState({ lista: res.data });
    })
    .catch((err) => console.log(err));
  }

  criarLista = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
    .post(url, body, header)
    .then((res)  => { alert('O Usuário foi criado com sucesso!')
      console.log(res);
      this.setState({ email: "", nome: "" });
      this.pegarNomes();
    })
    .catch((err) => console.log(err));
  };

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangeNome = (e) => {
    this.setState({ nome: e.target.value });
  };

  renderizaPaginaNova = () => {
    this.setState({ paginas: true })
  }

  renderizaPagina = () => {
    this.setState({ paginas: false })
  }

  deleteUsuario = (id) => {
    axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, header)
    .then((res) => { alert('O Usuário foi deletado com sucesso!')
    console.log(res)
    this.pegarNomes();
    }).catch((err) => {console.log(err);
    alert('Ops! Algo deu errado!')})
  }

  render() {

    if(this.state.paginas){
      return(
        <Usuario 
        lista={this.state.lista}
        renderizaPagina={this.renderizaPagina}
        deleteUsuario={this.deleteUsuario}
        />
      )
    } 

    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.renderizaPaginaNova}>Trocar de Página</button>
        <h2>Criar Usuário</h2>
        <input 
        value={this.state.nome}
        onChange={this.onChangeNome}
        />
        <input 
        value={this.state.email}
        onChange={this.onChangeEmail}
        />
        <button onClick={this.criarLista}>Criar</button>        
      </div>
    )
  }


}


