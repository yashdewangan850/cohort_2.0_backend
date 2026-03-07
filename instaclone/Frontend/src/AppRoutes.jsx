import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './features/aut/pages/Login'
import Register from './features/aut/pages/Register'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Welcome the react router</h1>} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes