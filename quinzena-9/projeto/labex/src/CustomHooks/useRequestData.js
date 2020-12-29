import {useEffect, useState} from 'react'
import axios from 'axios'



export default function useRequestData(url,header,initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url,header).then((response) => {
            setData(response.data)
        })
    }, [url])
    
    return data
}
