import styled from 'styled-components'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  li{
    cursor: pointer;
  }

  @media only screen and (max-width: 900px){
    width: 70vw;
  }
`

const Header = styled.div`
  height: 20%;
  background: var(--blue);
`

const Clickable = styled.a`
  cursor: pointer;
`

const Icon = styled(IoIosArrowForward)`
  margin: 16px;
  font-size: 38px;
  color: var(--orange);
  `

const Person = styled.div`
  display: flex;
  color: var(--white);
  & div {
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
  }
`

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  margin-left: 24px;
`

const Body = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  color: var(--gray-text);
  & ul {
    margin: 28px;
    list-style-type: none;
    & li {
      display: flex;
      align-items: center;
      margin: 28px;
    }
  }
`

const FavIcon = styled(IoMdHeart)`
  font-size: 28px;
  margin-right: 16px;
`

const CallIcon = styled(IoIosCall)`
  font-size: 28px;
  margin-right: 16px;
`

const MsgIcon = styled(IoIosChatboxes)`
  font-size: 28px;
  margin-right: 16px;
`

const SettingsIcon = styled(IoMdSettings)`
  font-size: 28px;
  margin-right: 16px;
`

const LogoutIcon = styled(IoMdLogOut)`
  font-size: 28px;
  margin-right: 16px;
`

const Footer = styled.div`
  height: 20%;
  border-top: 2px solid var(--muted-color);
  display: flex;
  justify-content: center;
  color: var(--gray-text);
  & ul {
    margin: 28px;
    list-style-type: none;
    & li {
      display: flex;
      align-items: center;
      margin: 28px;
    }
  }
`

const Styled = {
  Container,
  Header,
  Clickable,
  Icon,
  Person,
  Avatar,
  Body,
  FavIcon,
  CallIcon,
  MsgIcon,
  SettingsIcon,
  LogoutIcon,
  Footer,
}

export default Styled