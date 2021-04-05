import styled from 'styled-components'
const {BASE_URL}  = require('../../constants/URLs');

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 94px;
    width: 100%;
    background-color: var(--gray);
    margin: 20px 0px;

    p {
        color: var(--gray-text);
    }

    .info-holder{
        text-align: left;
        p:nth-child(1){
            font-size: 20px;
        }
    }
`

export const Avatar = styled.div`
    height: 56px;
    width: 56px;
    border-radius: 50%;
    background-image: url('${BASE_URL}/defaultAvatar.png');
    background-size: contain;
    background-repeat: no-repeat;
`