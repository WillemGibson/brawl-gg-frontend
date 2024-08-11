import { Routes, Route } from 'react-router-dom'; // Import routing components
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import LoginPage from './pages/LoginPage'; // Import the LoginPage component
import SignupPage from './pages/SignupPage'; // Import the SignupPage component
import PrivacyPage from './pages/PrivacyPage'; // Import the PrivacyPage component
import TosPage from './pages/TosPage'; // Import the Terms of Service page component
import Template from './pages/_Template'; // Import a layout component to wrap other pages
import PageNotFound from './pages/PageNotFound'; // Import the 404 Not Found page component
import ForgotPasswordPage from './pages/ForgotPasswordPage'; // Import the Forgot Password page component
import ResetPasswordPage from './pages/ResetPassword'; // Import the Reset Password page component
import TournamentPage from "./pages/TournamentPage"; // Import the Tournament Page component
import TournamentCreationPage from './pages/TournamentCreationPage'; // Import the Tournament Creation Page component
import { useUserData } from './contexts/UserContext'; // Import the custom hook for user data
import UserDashboard from './pages/UserDashboard'; // Import the User Dashboard component
import JoinPage from "./pages/JoinPage"; // Import the Join Page component

function App() {
  // Get user JWT token from context
  const { userJwt } = useUserData();
  
  return (
    <>
      <Routes>
        {/* Define the default route */}
        <Route index element={<LandingPage />} />
        
        {/* Define routes that use the Template layout */}
        <Route path="/" element={<Template userJwt={userJwt}/>}>
          <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
          <Route path="/signup" element={<SignupPage />} /> {/* Signup page route */}
          <Route path="/privacy" element={<PrivacyPage />} /> {/* Privacy Policy page route */}
          <Route path="/tos" element={<TosPage />} /> {/* Terms of Service page route */}
          <Route path='/forgot-password' element={<ForgotPasswordPage />} /> {/* Forgot Password page route */}
          <Route path='/reset-password' element={<ResetPasswordPage />} /> {/* Reset Password page route */}
          <Route path="/tournament/:id" element={<TournamentPage userJwt={userJwt}/>} /> {/* Tournament details page route with dynamic ID */}
          <Route path="/tournament-creation" element={<TournamentCreationPage userJwt={userJwt}/>} /> {/* Tournament creation page route */}
          <Route path="/tournament/join/:jwt" element={<JoinPage />} /> {/* Join Tournament page route with dynamic JWT */}
          <Route path="/dashboard" element={<UserDashboard />} /> {/* User Dashboard route */}
          
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App; // Export the App component
