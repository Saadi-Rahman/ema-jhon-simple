import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import icon from '../../google.svg';
import './Login.css';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true});
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='card'>
            <div className='form-container'>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Enter your Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='Enter your Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <small>New to Ema-John? <Link to='/signup'>Create a new Account</Link></small>
                <hr className='solid' />
                <button className='btn-google'>
                    <img className='google-icon' src={icon} alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;