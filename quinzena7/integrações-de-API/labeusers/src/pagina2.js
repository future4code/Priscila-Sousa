import React from 'react';
// import style from 'styled-components';
// import axios from 'axios'


export default class Usuario extends React.Component {

 

  render() {
 
    const listaUsuario = this.props.lista.map((usuarios) => {
      return <div>
              <li key={usuarios.id}>{usuarios.name}</li>;
              <button onClick={() => this.props.deleteUsuario(usuarios.id)}>Deletar</button>
            </div>
    });

    return (
      <div>
        <h1>Labenusers</h1>
        <button onClick={this.props.renderizaPagina}>Trocar de Página</button>
        <h2>Lista de Usuários</h2>
        <ul>{listaUsuario}</ul>        
      </div>
    )
  }
}