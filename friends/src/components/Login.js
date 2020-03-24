import React, { useState }  from 'react';
import { axiosWithAuth } from '..utils/axiosWithAuth';

export default function Login(props) {

const [credentials, setCredentials] = useState({
    uername: '',
    password: ''
});

const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
        .post('./api/login/', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends/');
            })
                .catch(err => {
                    console.log("handleSubmit error: ", err);
                })
}

return (
    <div className="login-div">
        <form className="login-form">
            <input 
            type="text" 
            name="username" 
            placeholder="username" 
            onChange={handleChange}
            value={credentials.username}
            />

            <input 
            type="password" 
            name="password" 
            placeholder="password" 
            onChange={handleChange}
            value={credentials.password}
            />

            <button type="submit" >Log In</button>
        </form>
    </div>
)

}//Login