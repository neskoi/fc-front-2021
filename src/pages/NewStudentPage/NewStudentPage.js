import { BASE_URL } from "../../constants/URLs"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useForm } from "../../hooks/UseForm"
import { FormContainer } from "./styles"

const NewStudentPage = () => {

    const [schools, setSchools] = useState([])
    const {form, onChange, resetState} = useForm({ name: "", cpf: "", school: "", year: "", description: "" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
    }

    useEffect(()=>{
        getAllSchools()
    },[])


    const getAllSchools = () => {
        axios.get(`${BASE_URL}/allSchools`,
        {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwa191c3VhcmlvIjoxNiwiaWF0IjoxNjE3MjMyODk0fQ.njU7tVh96ic2maVlVEOJKoTb1ri9cVvBgMvNid-36qw'
            }
        })
        .then((res)=>{
            console.log(res.data.result)
            setSchools(res.data.result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const CreateStudent = (event) => {
        event.preventDefault()
        alert("estudante criado")
        console.log(form)
        resetState()
    }

    return(
        <FormContainer>
            <p>Dados do Aluno Beneficiado</p> 
            <button>Carregar imagem</button>
            <label>Nome do aluno</label>
            <input
                name="name"
                value={form.name}
                label="name"
                required
                onChange={handleInputChange}
            />
            <label>CPF do aluno</label>
            <input
                name="cpf"
                value={form.cpf}
                label="cpf"
                required
                onChange={handleInputChange}
            />
            <label>Escola</label>
            <select name="school" value={form.school} onChange={handleInputChange} required>
                <option value="">Escolha uma escola</option>
                {schools && schools.sort((a, b) => a.nome > b.nome ? 1:-1).map(school => {
                    return (
                        <option key={school.pk_escola} value={school.pk_escola}>{school.nome}</option>
                    )
                })}
            </select>
            <label>Ano</label>
            <input
                name="year"
                value={form.year}
                label="year"
                required
                onChange={handleInputChange}
            />
            <label>Conte sua história</label>
            <textarea
                name="description"
                value={form.description}
                label="description"
                required
                rows="6"
                onChange={handleInputChange}
            />

            <button type="submit" onClick={CreateStudent}>Salvar dados cadastrais</button>
        </FormContainer>
        )
}

export default NewStudentPage