import React from 'react'
import Styled from './styles'
import AvatarImg from '../../../assets/img/avatar.png'

const DrawerMenu = (props) => {
import { useHistory } from 'react-router'

const DrawerMenu = (props) => {
  const history = useHistory()
  const email = localStorage.getItem("email")
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
    history.push('/login')
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Clickable onClick={props.onClose}>
          <Styled.Icon />
        </Styled.Clickable>
        <Styled.Person>
          <Styled.Avatar src={AvatarImg} />
          <div>
            <h4>Nome do Responsável</h4>
            <p>fulano@email.com</p>

            <p>{email}</p>
          </div>
        </Styled.Person>
      </Styled.Header>
      <Styled.Body>
        <ul>
          <li><Styled.FavIcon /> favoritos</li>
          <li><Styled.CallIcon /> atendimento</li>
          <li><Styled.MsgIcon /> mensagens</li>
        </ul>
      </Styled.Body>
      <Styled.Footer>
        <ul>
          <li><Styled.SettingsIcon /> configurações</li>
          <li><Styled.LogoutIcon /> sair</li>

          <li onClick={logout}><Styled.LogoutIcon /> sair</li>
        </ul>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default DrawerMenu