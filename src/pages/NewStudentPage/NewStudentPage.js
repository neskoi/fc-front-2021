import { BASE_URL } from "../../constants/URLs"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useForm } from "../../hooks/UseForm"
import { FormContainer, StyledLabel, TitleContainer } from "./styles"
import { Button, TextField } from "@material-ui/core"
import Footer from "../../components/Footer/Footer"
import Primary from "../../components/Button/Primary"
import NavBar from '../../components/NavBar/NavBar'
import { useProtectedPage } from '../../hooks/UseProtectedPage'
import { useHistory } from "react-router"
import AvatarImg from '../../assets/img/avatar.png'

const NewStudentPage = () => {
    useProtectedPage()
    const history = useHistory()
    const email = localStorage.getItem('email')
    const [schools, setSchools] = useState([])
    const [states, setStates] = useState([])
    const {form, onChange, resetState} = useForm({ name: "", cpf: "", school: "", year: "", description: "", state:"" })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        onChange(value, name)
        console.log(form)
    }

    useEffect(()=>{
        getStates()
        getSchoolsByState(form.state)
    },[form.state])

    const getStates = () => {
        axios.get(`${BASE_URL}/estado/buscar`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setStates(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const getSchoolsByState = (id) => {
        axios.get(`${BASE_URL}/school/state/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setSchools(res.data.result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const CreateStudent = (event) => {
        event.preventDefault()
        const body = {
            "school": form.school,
            "name": form.name,
            "cpf": form.cpf,
            "year": form.year,
            "description": form.description,
        }
        axios.post(`${BASE_URL}/student/${email}`,body,
        {
            headers: {
                'Content-Type': 'multipart/form-data',  
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            resetState()
            alert("estudante criado")
            history.push('/dependents')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
        <NavBar />
        <FormContainer>
            <TitleContainer>
            <p>Dependente</p>
            </TitleContainer>
            <img src={AvatarImg}/>
            <button>Carregar imagem</button>
            <StyledLabel>Nome do aluno</StyledLabel>
            <TextField
            id="input-with-icon-adornment"
                name="name"
                value={form.name}
                variant="outlined"
                required
                onChange={handleInputChange}
            />
            <StyledLabel>CPF do aluno</StyledLabel>
            <TextField
                name="cpf"
                value={form.cpf}
                variant="outlined"
                required
                onChange={handleInputChange}
            />
            <StyledLabel>UF da Escola</StyledLabel>
            <TextField select name="state" variant="outlined" value={form.state} onChange={handleInputChange} required>
                {states && states.sort((a, b) => a.nome > b.nome ? 1:-1).map(state => {
                    return (
                        <option key={state.pk_estado} value={state.pk_estado}>{state.nome}</option>
                    )
                })}
            </TextField>
            <StyledLabel>Escola</StyledLabel>
            <TextField select name="school" variant="outlined" value={form.school} onChange={handleInputChange} required>
                {schools && schools.sort((a, b) => a.nome > b.nome ? 1:-1).map(school => {
                    return (
                        <option key={school.pk_escola} value={school.pk_escola}>{school.nome}</option>
                    )
                })}
            </TextField>
            <StyledLabel>Ano</StyledLabel>
            <TextField
                name="year"
                value={form.year}
                variant="outlined"
                required
                onChange={handleInputChange}
            />
            <StyledLabel>Conte sua história</StyledLabel>
            <TextField
                name="description"
                value={form.description}
                variant="outlined"
                required
                multiline
                rows="6"
                onChange={handleInputChange}
            />

            {/* <Button style={{color: 'white', backgroundColor: '#FF692A'}} type="submit" onClick={CreateStudent}>Salvar dados cadastrais</Button> */}
            <Primary name="Salvar" type="submit" onClick={CreateStudent}/>
        </FormContainer>
        <Footer/>
        </div>
        )
}

export default NewStudentPage