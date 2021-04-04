import styled from 'styled-components'

export const Wrapper = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 207px;
    width: 317px;
    padding: 34px  40px 0px 40px;
    font-size: 13px;
    color: var(--gray-text);
    background-color: var(--white);
    border-bottom: 4px solid ${props => props.color};
    margin: 20px;
`
export const Banner = styled.div`
    position:absolute;
    top:0;
    height: 34px;
    width: 100%;
    color: var(--white);
    background-color: ${props => props.color};
    text-align:center;
    vertical-align:middle;
    line-height:34px;
`