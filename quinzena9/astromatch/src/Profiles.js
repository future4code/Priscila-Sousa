import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function Profiles() {

  const [cardProfile, setCardProfile] = useState([])

  const getProfile = () => {
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/priscilasousa/person')
    .then( response => {setCardProfile(response.data.cardProfile)
    })
    .catch(error => { console.log(error.mensage)
    })
  }
}