import CardStudent from "../../components/CardStudent/CardStudent"
import { BASE_URL } from "../../constants/URLs"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ListContainer } from "./styles"

const StudentsPage = () => {

    const [students, setStudents] = useState([])

    useEffect(()=>{
        getAllStudents()
    },[])


    const getAllStudents = () => {
        axios.get(`${BASE_URL}/students/all`,
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
        <ListContainer>
            <input 
                placeholder="Pesquisa"
            />
            {students && students.sort((a, b) => a.name > b.name ? 1:-1).map(student => {
                return (
                    <CardStudent
                        key={student.pk_filho}
                        avatar={student.img_avatar_url}
                        name={student.nome}
                        school={student.escola}
                        year={student.ano_escolar}
                    />
                )
            })}
        </ListContainer>
        )
}

export default StudentsPage