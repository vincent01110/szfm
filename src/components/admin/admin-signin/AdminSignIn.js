import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSignIn } from 'react-auth-kit';
import style from './AdminSignIn.module.css';
import Card from "../../ui/Card";
import Button from "../../ui/Button";


const AdminSignIn = (props) => {
    const navigate = useNavigate()
    const signIn = useSignIn()
    const [errorMsg, setErrorMsg] = useState()
    const [email, dispatchEmail] = useReducer((state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.includes('@') }
        }
        return { value: '', isValid: false }
    }, { value: '', isValid: null })
    const [password, dispatchPassword] = useReducer((state, action) => {
        if (action.type === 'USER_INPUT') {
            return { value: action.val, isValid: action.val.trim().length >= 6 }
        }
        return { value: '', isValid: false }
    }, { value: '', isValid: null })




    const submitHandler = async (e) => {
        e.preventDefault();
        if (email.isValid && password.isValid) {
            let data = JSON.stringify({
                email: email.value,
                password: password.value
            });
            try {
                // Make an API call to your authentication endpoint (replace with your actual API URL)
                const response = await axios.post('http://localhost:9090/user/admin/signin', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                signIn({
                    token: response.data.token,
                    expiresIn: 60,
                    tokenType: "Bearer",
                    authState: { email: email.value }
                })
                localStorage.setItem('email', email.value)
                navigate("/admin/dashboard")
            } catch (err) {
                if (err.response.status === 401) {
                    setErrorMsg(err.response.data)
                } else {
                    console.log(err);
                }
            }
        } else {
            console.log('Credentials are not valid');
        }
    }

    const emailChangeHandler = (e) => {
        dispatchEmail({ val: e.target.value, type: 'USER_INPUT' })
    }

    const passwordChangeHandler = (e) => {
        dispatchPassword({ val: e.target.value, type: 'USER_INPUT' })
    }


    return <div className={style.container}>
        <Card className={style.formDiv}>
            <h1>Admin</h1>
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="Email..." onChange={emailChangeHandler} className={`${style.inputField} ${email.isValid === false ? style.invalid : ''}`} />
                <input type="password" placeholder="Password..." onChange={passwordChangeHandler} className={`${style.inputField} ${password.isValid === false ? style.invalid : ''}`} />
                <Button type="submit" className={style.submitButton}>Log In</Button>
                {errorMsg && <div className={style.error}>{errorMsg}</div>}
            </form>
        </Card>
    </div>
}

export default AdminSignIn;