import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export function useProtectedPage(props) {
    const history = useHistory()
    console.log('vendo token');
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            history.push('/login')
        }
    }, [history])

}