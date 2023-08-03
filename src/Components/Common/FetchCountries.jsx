import { useQuery } from "react-query"; 
import axios from 'axios'


const fetchCountries = async ()=>{
    const res = await axios.get('https://restcountries.com/v3.1/all')
    return res.data
}

export const useCountries = ()=>{
    return useQuery('countries' , fetchCountries)
}