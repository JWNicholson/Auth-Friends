import React, { userState }  from 'react';


export default function Login(props) {

const [credentials, setCredentials] = useState({
    uername: '',
    password: ''
});

return (
    <div className="login-div">
        <form className="login-form">
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit" >Log In</button>
        </form>
    </div>
)

}//Login