import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/Signup'
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}