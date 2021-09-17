import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NovoContainer = styled.div`
  display: flex;
  justify-content: spece-between;
  flex-direction: colum;
  height: 80px;
  width: 180px;
  border: 5px solid pink;
  margin: 10px;
  padding: 15px;
`;

const estilizacaoRecebido = styled.div`
  width: 45px;
  height: 20px;
  display: flex;

`;

const arrayUsuarios = [
  {
    nomeUsuario: "paulinha",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150",
  },
  {
    nomeUsuario: "João",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151",
  },
  {
    nomeUsuario: "Carla",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152",
    },
  
]

class App extends React.Component {
  state = {
    publicacao: arrayUsuarios,
    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  }
  
  novoUserName = (event) => {
    this.setState({ userName: event.target.value});
  };

  novaUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value});
  };

  novoPostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value });
  };

  adicionarNovoPoste = () => {
    const novoPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    };

    this.setState({
      posts: [...this.state.posts, novoPost],
      userName: "",
      userPhoto: "",
      postPhoto: "",
    });
  };

  render() {
    const novoArrayUsuarios = this.state.publicacao.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />
        );
    });

    return (      
      <MainContainer>
         <NovoContainer>
         <estilizacaoRecebido>
           <input             
             placeholder={"Nome do Usuário"}
             value={this.state.userName}
             onChange={this.changeUserName}
           />
           <input
             placeholder={"Foto do Usuário"}
             value={this.state.userPhoto}
             onChange={this.changeUserPhoto}
           />
           <input
             placeholder={"Foto do Post"}
             value={this.state.postPhoto}
             onChange={this.changePostPhoto}
           />
           <button onClick={this.adicionarNovoPoste}>Faça um Novo Post!</button>
           </estilizacaoRecebido>      
        </NovoContainer>
       {novoArrayUsuarios}        
      </MainContainer>
    );
  }
}


export default App;
