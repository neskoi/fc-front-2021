import React from 'react'
import {Block, CardContainer, HashTageContainer, Splash, Wrapper} from './style'
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer'
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import InfoCard from '../../components/InfoCard/InfoCard';
import { useHistory } from 'react-router';


const Landing = (props) => {
    const history = useHistory();
    
    return(
        <Wrapper>
            <Navbar/>
            <Splash>
                <div className="img">
                </div>
                <div className="container">
                    <p className="title">Equipa os Guri</p>
                    <span className="phrase">
                        <p>Pessoas</p>
                        <p>em</p>
                        <p>Ação</p>
                    </span>
                    <p>Seja hoje a diferença que você quer ver no mundo.</p>
                </div>
            </Splash>
            <CardContainer>
                <InfoCard title="POR QUE DOAR" color="var(--orange)">
                Ao contribuir com sua doação no Equipa os Guri, você estará investindo na humanidade. Estamos comprometidos a ajudar o próximo e o destino da doação é bem espeífico e transparente. 
                <OrangeButton clicked={()=>history.push('/estudantes')}  width="250px" height="35px">DOAR</OrangeButton>
                </InfoCard>

                <InfoCard title="COMO DOAR" color="var(--blue)">
                Para realizar uma doação você só irá precisar de uma conta gmail ou do facebook. A partir disso, você escolhe o aluno que deseja contribuir e realiza a doação.
                <OrangeButton clicked={()=>history.push('/estudantes')}  width="250px" height="35px">VER OS GURIS</OrangeButton>
                </InfoCard>

                <InfoCard title="COMO RECEBER DOAÇÃO" color="var(--green)">
                Para receber a doação você (Responsável maior de idade) irá realizar um cadastro, anexar um orçamento da sua lista de material, contar um pouco sobre você e aguardar o retorno de um doador. 
                <OrangeButton clicked={()=>history.push('/solicitar')}  width="250px" height="35px">RECEBER DOAÇÃO</OrangeButton>
                </InfoCard>

            </CardContainer>
            <Block>
                <p>Doe</p>
                <p>
                    Doar no Equipa os Guri significa levar material escolar e Esperança a muitas criaças e jovens. Sua contribuição faz com que tudo isso se torne realidade.
                </p>

                <OrangeButton clicked={()=>history.push('/login')}  width="300px" height="50px">FAÇA UMA DOAÇÃO</OrangeButton>
            </Block>
            
            <HashTageContainer>
                <p>Equipa os Guri</p>
                <p>É possivel ajudar estando em qualquer parte do mundo</p>
                <p>#juntossomosmaisfortes</p>
            </HashTageContainer>
            <Footer/>
        </Wrapper>
    )
}

export default Landing