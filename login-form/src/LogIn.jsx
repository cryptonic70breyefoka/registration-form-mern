import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import { useState } from 'react'
import axios from   'axios'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/login', { email, password})
        .then(result => { 
             console.log(result)
            if (result.data === 'Success') {
                navigate('/home')
            } else {
                console.log(result.data)
            }       
        })
        .catch(err => console.log(err))
        }
  return (
    <div className='d-flex justify-content-center  align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25 '>
        <h2>
        Log In
        </h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="text" 
                        placeholder='Enter Your Email' 
                        name='email' className='form-control rounded-0'
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password" 
                        placeholder='Enter Your Password' 
                        name='password' className='form-control rounded-0'
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> Log In </button>
             </form>
             <p>Not registered yet? </p>
             <Link to={SignUp}> 
            <button className='btn btn-default border w-100 bg-primary rounded-5 text-decoration-none'>Register</button>
             </Link>
                   
    </div>
</div>
  )
}

export default LogIn