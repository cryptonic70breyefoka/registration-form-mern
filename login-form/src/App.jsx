import 'bootstrap/dist/css/bootstrap.min.css'
import LogIn from './LogIn'
import SignUp from './SignUp'
import {BrowserRouter, Routes,  Route} from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App
