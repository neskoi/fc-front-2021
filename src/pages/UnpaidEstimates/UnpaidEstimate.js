import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import StudentCard from '../../components/StudentCard/StudentCard';
const fixPathName = require('../../utils/fixPathName');
const {BASE_URL}  = require('../../constants/URLs');

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-image: url('${BASE_URL}/background/background-texture.jpg');
    background-size: 100% 100%;
    background-attachment: fixed;
    overflow-x: hidden;
    & button {
        margin-bottom: 40px;
    }
`

const SearchHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px 0 10px 0;
    height:63px;
    width: 100%;
`

const Search = styled.input.attrs({type:"text", placeholder: 'Pesquisar'})`
    height: 63px;
    width: 100%;
    outline:none;
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
    color: var(--gray-text);
`

const SearchGo = styled.div`
    height: 29px;
    width: 29px;
    background-image: url('${BASE_URL}/icones/searching-magnifying-glass 1.png');
    background-size: contain;
    background-repeat: no-repeat;
`

const Filter = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    height: 47px;
    width: 50px;
    background-image: url('${BASE_URL}/icones/Group 211.png');
    background-size: contain;
    background-repeat: no-repeat;
`
const FilterRelative = styled.div`
    position: relative;
    height: 63px;
    width: 60%;
`

const StudentsPage = (props) => {

    const [students, setStudents] = useState([])

    useEffect(()=>{
        getAllUnpaidEstimates()
    },[])

    const getAllUnpaidEstimates = () => {
        axios.get(`${BASE_URL}/show-all-unpaid-estimate`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setStudents(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <Wrapper>
            <NavBar/>
            <SearchHolder>
                <FilterRelative>
                    <Search/>
                    <Filter/>
                </FilterRelative>
                <SearchGo/>
            </SearchHolder>
            {students && students.sort((a, b) => a.name > b.name ? 1:-1).map(student => {
                return (
                    <StudentCard
                        key = {student.pk_orcamento}
                        img_avatar_url={fixPathName(student.img_avatar_url)} 
                        name = {student.nome}
                        school = {student.nome_escola}
                    />
                )
            })}
            <Footer/>
        </Wrapper>
    )
}

export default StudentsPage