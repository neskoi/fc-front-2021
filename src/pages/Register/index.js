import {React, useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/URLs';
import StyledRegister from './styles'
import Container from '../../components/Container'
import BlueSquare from '../../components/BlueSquare'
import PrimaryButton from '../../components/Button/Primary'
import { useHistory } from 'react-router'

const Register = () => {
  const history = useHistory();

  const handleDonate = () => {
    localStorage.setItem('role', 'donator');
    history.push('/estudantes');
  };

  const handleSolicitation = () => {
    localStorage.setItem('role', 'requester');
    existence ? history.push('/solicitar') : history.push('/cadastrar/responsavel');
  };

  const [existence, setExistence] = useState({});

  const getPersonExistence = useCallback(async () => {
    const email = localStorage.getItem('email');
    await axios.get(`${BASE_URL}/pessoa/existe/${email}`,
      {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then((res)=>{
          setExistence(res.data.data[0])
      })
      .catch((err)=>{
          console.log(err)
      })
  },[existence])

  useEffect(()=>{
      getPersonExistence();
  },[])

  return (
    <Container>
      <BlueSquare>
        <StyledRegister.Banner>
          <h2>Equipa os Guri</h2>
          <h4>Selecione seu objetivo</h4>  
        </StyledRegister.Banner>
        <PrimaryButton name="Solicitar Doação" onClick={handleSolicitation}/>
        <PrimaryButton name="Realizar Doação" onClick={handleDonate}/>
      </BlueSquare>
    </Container>
  )
}

export default Register;
