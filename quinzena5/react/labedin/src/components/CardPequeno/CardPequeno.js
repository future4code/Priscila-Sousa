import React from 'react';
import styled from 'styled-components';

const CardPequenoContainer = styled.div `
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 100px;
`;

const DivInterna = styled.div `
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`;

const Label = styled.strong`
  font-weight: bold;
`;

const ImagemDoMeuPopozao = styled.img`
  font-size: 3840px;
`;

function CardPequeno(props) {
  const { label, texto } = props;

  return (
    <CardPequenoContainer>
      <DivInterna>
        <span>
          <Label>{label}</Label>
          {texto}
        </span>
      </DivInterna>
    </CardPequenoContainer>
  )
}

export default CardPequeno;