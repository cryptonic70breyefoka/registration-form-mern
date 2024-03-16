import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const LogIn = () => {
  return (
    <div className='d-flex justify-content-center  align-items-center bg-secondary vh-100'>
    <div className='bg-white p-3 rounded w-25 '>
        <h2>
        Log In
        </h2>
        <form>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="text" 
                        placeholder='Enter Your Email' 
                        name='email' className='form-control rounded-0' />
            </div>
            <div className="mb-3">
                <label htmlFor="password">
                    <strong>Password</strong>
                </label>
                <input type="password" 
                        placeholder='Enter Your Password' 
                        name='password' className='form-control rounded-0' />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> Log In </button>
             </form>
             <Link to={SignUp}>
             <p>Not registered yet? </p>
            <button className='btn btn-default border w-100 bg-primary rounded-5 text-decoration-none'>Register</button>
             </Link>
                   
    </div>
</div>
  )
}

export default LogIn