import React, { useCallback, useEffect, useState } from 'react';
import {Filter,FilterRelative,Search,SearchGo,SearchHolder,Wrapper} from './styles';
import axios from 'axios';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import StudentCard from '../../components/StudentCard/StudentCard';
import StudentEstimate from '../../pages/StudentEstimate/StudentEstimate';
const fixPathName = require('../../utils/fixPathName');
const {BASE_URL}  = require('../../constants/URLs');


const StudentsPage = (props) => {

    const [students, setStudents] = useState({
        viewStudentEstimate: false,
        selectedStudent: {},
        list:[]
    })

    const getAllUnpaidEstimates = useCallback(async () => {
         await axios.get(`${BASE_URL}/show-all-unpaid-estimate`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setStudents({...students, list: res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    },[students])

    useEffect(()=>{
        getAllUnpaidEstimates()
    },[])

    const handleStudentSelection = (id) => {
        setStudents({
            ...students,
            selectedStudent: findOne(id),
            viewStudentEstimate: true,
        });
    }

    const handleBackToList = () => {
        setStudents({
            ...students,
            selectedStudent: {},
            viewStudentEstimate: false,
        });
    }

    const findOne = (id) => {
        const selected = students.list.find(e => e.pk_orcamento === id);
        return selected;
    }

    const generateList = () => {
       return students.list && students.list.sort((a, b) => a.name > b.name ? 1:-1).map(student => {
            return (
                <StudentCard
                    clicked={()=>{handleStudentSelection(student.pk_orcamento)}}
                    id = {student.pk_orcamento}
                    key = {student.pk_orcamento}
                    img_avatar_url={fixPathName(student.img_avatar_url)} 
                    name = {student.nome}
                    school = {student.nome_escola}
                />
            )
        })
    }

    return(
        <Wrapper visible={!students.viewStudentEstimate}>
            <NavBar/>
            <SearchHolder>
                <FilterRelative>
                    <Search/>
                    <Filter/>
                </FilterRelative>
                <SearchGo/>
            </SearchHolder>
            {generateList()}
            <StudentEstimate 
                visible={students.viewStudentEstimate}
                name={students.selectedStudent.nome}
                school={students.selectedStudent.escola}
                message={students.selectedStudent.mensagem}
                valorTotal={students.selectedStudent.valor_total}
                avatarUrl={fixPathName(students.selectedStudent.img_avatar_url)}
                estimateUrl={fixPathName(students.selectedStudent.img_orcamento_url)}
                toClose={handleBackToList}
            />
            <Footer/>
        </Wrapper>
    )
}

export default StudentsPage