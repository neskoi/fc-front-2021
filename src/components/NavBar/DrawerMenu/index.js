import React from 'react'
import Styled from './styles'
import AvatarImg from '../../../assets/img/avatar.png'

const DrawerMenu = (props) => {
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
        </ul>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default DrawerMenu