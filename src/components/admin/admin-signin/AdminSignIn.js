import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSignIn } from 'react-auth-kit';


const AdminSignIn = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const signIn = useSignIn()


    const submitHandler = async (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "email": email,
            "password": password
        });
        try {
            // Make an API call to your authentication endpoint (replace with your actual API URL)
            const response = await axios.post('http://localhost:9090/signin', data, {headers: { 
                'Content-Type': 'application/json'
            }})
            
            signIn({
                token: response.data.token,
                expiresIn: 60,
                tokenType: "Bearer",
                authState: {email: email}
            })
            navigate("/admin/dashboard")
            

        } catch (error) {
            console.error('API request error:', error);
        }
    }

    return <div>
        <form onSubmit={submitHandler}>
            <input type="email" onChange={(e) => { setEmail(e.target.value) }} />
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
            <button>Log In</button>
        </form>
    </div>
}

export default AdminSignIn;