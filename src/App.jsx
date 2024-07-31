import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css'
import Template from './pages/_Template';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route index element ={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}
export default App
