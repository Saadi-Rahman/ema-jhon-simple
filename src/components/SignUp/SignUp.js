import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import icon from '../../google.svg';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if(password.length < 6) {
            setError("Password should be 6 characters or more.");
            return;
        }
        if(password !== confirm) {
            setError("Your Password didn't match.");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='card'>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Enter your Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='Enter your Password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' placeholder='Confirm your Password' required />
                    </div>
                    <p className='text-error'>{error}</p>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <small>Already have an Account? <Link to='/login'>Login</Link></small>
                <hr className='solid' />
                <button className='btn-google'>
                    <img className='google-icon' src={icon} alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default SignUp;