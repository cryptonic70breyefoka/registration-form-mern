import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'
import {BrowserRouter, Routes,  Route} from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App
