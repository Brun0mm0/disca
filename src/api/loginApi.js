import axios from "axios";

export const apiLogin = axios.create({
    baseURL:'https://reqres.in/api/login',
    headers: {'Content-Type': 'application/json'}
})