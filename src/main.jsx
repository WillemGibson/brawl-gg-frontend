import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import global CSS styles
import UserProvider from './contexts/UserContext.jsx'; // Import UserProvider for user context
import { TournamentProvider } from './contexts/TournamentContext.jsx'; // Import TournamentProvider for tournament context

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TournamentProvider>
          <App />
        </TournamentProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
