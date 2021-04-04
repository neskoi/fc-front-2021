import CardStudent from "../../components/CardStudent/CardStudent"
import { BASE_URL } from "../../constants/URLs"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ButtonContainer, ListContainer, PageContainer, ResponsibleContainer } from "./styles"
import StudentCard from '../../components/StudentCard/StudentCard';
import Footer from "../../components/Footer/Footer"
import { TextField } from "@material-ui/core"
import Primary from "../../components/Button/Primary"
import { useHistory } from "react-router"
import NavBar from '../../components/NavBar/NavBar'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import OrangeButton from "../../components/OrangeButton/OrangeButton"

const fixPathName = require('../../utils/fixPathName');

const DependentsPage = () => {
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
        
        <PageContainer>
        <NavBar />
            <ResponsibleContainer>
                <p>E-mail do Responsável</p>
                <p>{email}</p>
            </ResponsibleContainer>
            <ListContainer>
                {students && students.sort((a, b) => a.name > b.name ? 1:-1).map(student => {
                    return (
                        <CardStudent
                            key={student.pk_filho}
                            id={student.pk_filho}
                            img_avatar_url={fixPathName(student.img_avatar_url)} 
                            name={student.nome}
                            school={student.escola}
                        />
                    )
                })}
            </ListContainer>
            <ButtonContainer>
                <OrangeButton width="331px" height={'40px'} clicked={()=> history.push('/newstudent')}>Adicionar dependente</OrangeButton>
            </ButtonContainer>

            <Footer/>
        </PageContainer>
        
        </div>
        )
}

export default DependentsPage