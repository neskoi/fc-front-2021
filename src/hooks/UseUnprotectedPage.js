import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export function useUnprotectedPage(props) {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token) {
            history.push('/cadastro')
        }
    }, [history])

}