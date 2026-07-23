import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RecipesPage from './pages/RecipesPage';
import RecipesDetailsPage from './pages/RecipesDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* This line is the important one */}
      <Route path="/recipes" element={<RecipesPage />} />

      <Route path="/categories" element={<h1>Categories Page</h1>} />
      <Route path="/recipes/:id" element={<Recipe Details Page/>} />
    </Routes>
  );
}

export default App;