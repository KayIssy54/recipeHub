import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />

      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<h1>Sign Up Page</h1>} />
      <Route path='/recipes' element={<h1>Recipes Page</h1>} />
      <Route path='/categories' element={<h1>Categories Page</h1>} />
    </Routes>
  );
}

export default App;