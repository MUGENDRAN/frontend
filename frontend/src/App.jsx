import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <Routes>
        <Route path='/' element={<Signin/>} />
      </Routes>
    </div>
  )
}

export default App
