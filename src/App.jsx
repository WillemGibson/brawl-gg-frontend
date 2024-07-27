import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </>
  );
}