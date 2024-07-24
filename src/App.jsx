import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import ContactPage from './pages/Contact'
// import AboutPage from './pages/About'
import SignupPage from './pages/Signup'
import HomePage from './pages/Home'
// import LoginForm from './components/LoginForm'

function App() {


  return (
    <>
      <h1>Brawl</h1>
      {/* <LoginForm /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupPage />} />
          {/* <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />*/}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
