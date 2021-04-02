import { Button } from "@material-ui/core"
import { useHistory } from "react-router"
import { FormContainer } from "./styles"

const GoalPage = () => {

    const history = useHistory()

    return (
        <div>
            <FormContainer>
                <h1 style={{ color: '#FF692A' }}>Equipa os Guri</h1>
                <h3 style={{ color: 'white' }}>Selecione o seu objetivo</h3>
                <Button
                    style={{ color: 'white', backgroundColor: '#FF692A' }}
                    variant="contained"
                    onClick={()=> history.push('/responsible')}
                    >Solicitar Doação
                </Button>
                <Button 
                    style={{ color: 'white', backgroundColor: '#FF692A' }}
                    variant="contained"
                    onClick={()=> history.push('/students')}
                    >Realizar Doação
                </Button>    
            </FormContainer>
        </div>
    )
}

export default GoalPage