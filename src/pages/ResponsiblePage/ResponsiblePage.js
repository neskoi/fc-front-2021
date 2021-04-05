import {React, useState, useCallback, useEffect} from 'react'
import axios from 'axios'
import { Wrapper } from "./styles"
import { useHistory } from "react-router"
import UpEstimate from "../UpEstimate/UpEstimate";
import Navbar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Sticker from "../../components/Sticker/Sticker"
import OrangeButton from "../../components/OrangeButton/OrangeButton"
import StudentCard from "../../components/StudentCard/StudentCard";
import fixPathName from '../../utils/fixPathName';
import { BASE_URL } from '../../constants/URLs'

const ResponsiblePage = (props) => {

    const history = useHistory();
    const isRequester = localStorage.getItem('role') === 'requester';
    const [students, setStudents] = useState({
        addStudentEstimate: false,
        selectedStudent: {},
        file: null,
        list:[]
    })

    const getStudents = useCallback(async () => {
        const getStudentByPerson = `${BASE_URL}/students/${localStorage.getItem('email')}`;
        const getStudentByDonator = `${BASE_URL}/show-all-unpaid-estimate`;
        const whatToGet = isRequester ? getStudentByPerson : getStudentByDonator;
         await axios.get(whatToGet,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setStudents({...students, list: res.data.result})
        })
        .catch((err)=>{
            console.log(err)
        })
    },[students])

    useEffect(()=>{
        getStudents()
    },[])

    const findOne = (id) => {
        const selected = students.list.find(e => e.pk_filho === id);
        return selected;
    }

    const handleEstimateSolicitation = (id) => {
        setStudents({
            ...students, 
            addStudentEstimate: true, 
            selectedStudent: findOne(id)
        });
    }

    const handleEstimateSolicitationDissmis = () => {
        setStudents({
            ...students, 
            addStudentEstimate: false, 
            selectedStudent: null
        });
    }

    const chooseBetweenRoles = (id) => {
        if(isRequester){
            handleEstimateSolicitation(id);
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('estimate', students.file);
        formData.append('fk_filho', students.selectedStudent.pk_filho);
        formData.append('valor_total', students.value);
        await axios.post(`${BASE_URL}/estimate-insert`, formData, 
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    "Content-type": "multipart/form-data",
                }
            })
            .then((res)=>{
                history.push('/estudantes');
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    const handleFileUpload = (e) => {
        setStudents({...students, file: e.target.files[0] });

        const insertImageScreen = document.querySelector('#insertImageScreen');
        const imageURL = URL.createObjectURL(e.target.files[0]);
        insertImageScreen.style.backgroundImage = `url(${imageURL})`;
    }

    const handleTotalValue = (e) => {
        console.log(e);
        setStudents({...students, value: e.target.value});
    }

    const generateList = () => {
        return students.list && students.list.sort((a, b) => a.name > b.name ? 1:-1).map(student => {
             return (
                 <StudentCard
                    text = "SOLICITAR"
                    clicked={()=>{chooseBetweenRoles(student.pk_filho)}}
                    id = {student.pk_filho}
                    key = {student.pk_filho}
                    img_avatar_url={fixPathName(student.img_avatar_url)} 
                    name = {student.nome}
                    school = {student.escola}
                 />
             )
         })
     }

    return (
        <>
            <Wrapper>
                <Navbar/>
                <div className="container">
                    <Sticker name={localStorage.getItem('nome')} email={localStorage.getItem('email')}/>
                    {generateList()}
                </div>
                {isRequester ? <OrangeButton clicked={()=> history.push('/cadastrar/estudante')} width="330px" heigth="50px">Adicionar Dependente</OrangeButton> : null}
                {isRequester ? <UpEstimate 
                                    visible={students.addStudentEstimate} 
                                    clicked={handleSubmit}
                                    changeValue={(e)=>{handleTotalValue(e)}}
                                    toClose={handleEstimateSolicitationDissmis} 
                                    upFile={(e)=>{handleFileUpload(e)}} 
                                /> : null}
            </Wrapper>
            <Footer />
        </>
    )
}

export default ResponsiblePage