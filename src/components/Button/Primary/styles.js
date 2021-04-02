import styled from 'styled-components'

const Container = styled.button`
  width: 90%;
  height: 3rem;
  border: none;
  border-radius: 32px;
  margin: 0.5rem auto;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
  background: var(--orange);
  font-family: Roboto;
  font-weight: 400;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`

const Button = {
  Container,
}

export default Button