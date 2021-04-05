import styled from 'styled-components'

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`

const Label = styled.label`
  margin: 12px 0;
  font-size: 14px;
  color: var(--input-color);
`

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid var(--input-color);
  border-radius: 3px;
`

const Styled = {
  Wrapper,
  Label,
  Select,
}

export default Styled