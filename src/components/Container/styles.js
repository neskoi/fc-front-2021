import styled from 'styled-components'
import Fundo from '../../assets/img/fundo.png'

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(${Fundo});
  background-size: cover;
`

export default Main
