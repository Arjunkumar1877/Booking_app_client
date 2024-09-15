
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
// import axios from 'axios'

function App() {

  return (
    <Router>
      <Routes>
<Route path='/' element={<Layout />} />
<Route path='/hey' element={<Layout />} />

      </Routes>
    </Router>  
  )
}

export default App
