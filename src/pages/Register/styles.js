import styled from 'styled-components'

const Banner = styled.div`
  width: 250px;
  height: 200px;
  & h2 {
    font-size: 28px;
    color: var(--orange);
  }
  & h4 {
    margin-top: 62px;
    font-size: 20px;
    font-family: Roboto;
    font-weight: 500;
    color: var(--white);
  }
`

const StyledRegister = {
  Banner,
}

export default StyledRegister
