import { Button } from "@material-ui/core"
import { useHistory } from "react-router"
import { PageContainer } from "./styles"

const ResponsiblePage = () => {

    const history = useHistory()

    return (
        <PageContainer>
            <h3>Nome do responsável</h3>
            <Button 
                style={{ color: 'white', backgroundColor: '#FF692A' }}
                variant="contained"
                onClick={()=> history.push('/newstudent')}
                >Adicionar Dependente
            </Button>   
        </PageContainer>
    )
}

export default ResponsiblePage