import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CommentContainer = styled.div`
display: flex;
justify-content: center;
padding: 5px;
width: 400px;
height: 600px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: 1px solid black;
border-radius: 5px;
background-color: white;
box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;`

const Titulo = styled.p`
height: 50px;
border-bottom: 1px solid lightgray;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
position: relative;
padding: 0px 10px;
flex-shrink: 0;`

const ImagemCard = styled.div`
  // background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJOTCqx1Ex0u6yYFIdXWsBSBTyf2Moe4c17JD4uAugS0p34_Ag);
  filter: blur(30px);
  height: 100%;
  width: 100%;
  position: absolute;`

const Card = (props) => {

  const [curtido, setCurtido] = useState(false);
  const [card, setCard] = useState([]);

  return (
    <CommentContainer>
      <Titulo>
        <p>Astromatch</p>
        <button onClick={() => {}}>Meus Match</button>
        <br></br>
        <ImagemCard>
        </ImagemCard>
        <button onClick={() => {}}>X</button>
        <button onClick={() => {}}>Ok</button>
      </Titulo>      
    </CommentContainer>
    
  )
}

export default Card
