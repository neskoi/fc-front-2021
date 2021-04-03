import styled from 'styled-components'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Banner = styled.div`
  width: 250px;
  height: 200px;
  & h2 {
    font-size: 28px;
    color: var(--orange);
  }
  & h3 {
    margin-top: 62px;
    font-size: 26px;
    font-family: Roboto;
    font-weight: 700;
    color: var(--white);
  }
  & h4 {
    margin-top: 62px;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 500;
    color: var(--white);
  }
`

const Icon = styled(IoIosCheckmarkCircleOutline)`
  margin-top: 22px;
  font-size: 28px;
  color: var(--orange);
`

const Avatar = styled.img`
  width: 135px;
  height: 135px;
`

const Divider = styled.div`
  background: var(--muted-color);
  width: 100vw;
  height: 2px;
  margin-top: 26px;
`

const DividerText = styled.div`
  color: var(--input-color);
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 14px;
  margin: 9px;
`

const StyledRegister = {
  Banner,
  Icon,
  Avatar,
  Divider,
  DividerText,
}

export default StyledRegister
