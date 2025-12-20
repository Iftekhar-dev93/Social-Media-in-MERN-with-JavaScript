import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <div className="font-bold p-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
