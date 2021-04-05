import { BASE_URL } from "../../constants/URLs"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ListContainer } from "./styles"
import StudentCard from '../../components/StudentCard/StudentCard';
import Footer from "../../components/Footer/Footer"
import Primary from "../../components/Button/Primary"
import { useHistory } from "react-router"
import NavBar from '../../components/NavBar/NavBar'
import { useProtectedPage } from '../../hooks/UseProtectedPage'

const fixPathName = require('../../utils/fixPathName');

const StudentsPage = () => {
    useProtectedPage()
    const email = localStorage.getItem('email')
    const history = useHistory()
    const [students, setStudents] = useState([])

    useEffect(()=>{
        getAllStudents()
    },[])

    const getAllStudents = () => {
        axios.get(`${BASE_URL}/students/${email}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            console.log(res.data.result)
            setStudents(res.data.result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
        <NavBar />
        <ListContainer>
            <p>E-mail do Responsável</p>
            <p>{email}</p>
            {students && students.sort((a, b) => a.name > b.name ? 1:-1).map(student => {
                return (
                    <StudentCard
                        key = {student.pk_orcamento}
                        img_avatar_url={fixPathName(student.img_avatar_url)} 
                        name = {student.nome}
                        school = {student.escola}
                    />
                )
            })}
            <Primary name="Adicionar dependente" type="submit" onClick={()=> history.push('/newstudent')}/>
        </ListContainer>
        <Footer/>
        </div>
        )
}

export default StudentsPage