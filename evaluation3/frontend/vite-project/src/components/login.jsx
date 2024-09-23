import { useState } from "react";
import api from "../services/api";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {login} = useAuth()
    const [email, setEmail]= useState('')
    const[password, setPassword]= useState('')
    const navigate =useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await api.post('/auth/login',{email, password})
            login(response.data)
            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit" >Login</button>
        </form>
    )
}

export default Login