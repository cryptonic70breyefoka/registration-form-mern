import { useState } from "react";
import LogIn from "./LogIn";
import { Link } from "react-router-dom";
import axios from "axios";
export default function SignUp() {
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[pwd, setPwd] = useState()
    const[cpwd, setCPwd] = useState()
    const handleSubmit  = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, pwd, cpwd})
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
  return (
    <div className='d-flex justify-content-center  align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded-3 w-50 '>
            <h2>
            Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                            placeholder='Enter Your Name' 
                            name='email' className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                            placeholder='Enter Your Email' 
                            name='email' className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                            placeholder='Enter Your Password' 
                            name='password' className='form-control rounded-0'
                            onChange={(e) => setPwd(e.target.value)} />
                     <label htmlFor="password">
                        <strong>Confirm Password</strong>
                    </label>
                    <input type="password" 
                            placeholder='Re-Enter Your Password' 
                            name='password' className='form-control rounded-0'
                            onChange={(e) => setCPwd(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-5'> Register</button>
        </form>
        <Link to={LogIn}>
        <p>Already Signed Up? </p>
        <button className='btn btn-default border w-100 bg-light rounded-5 text-decoration-none'>Login</button>
           
        </Link>
        
        </div>
    </div>
  )
}
