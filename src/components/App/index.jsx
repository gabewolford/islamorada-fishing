import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../HomePage'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
