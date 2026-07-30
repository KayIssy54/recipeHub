 import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RecipesPage from './pages/RecipesPage';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import CategoriesPage from './pages/CategoriesPage';
import AddRecipePage from './pages/AddRecipePage';
import MyRecipesPage from './pages/MyRecipesPage';
import EditRecipePage from './pages/EditRecipePage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
      <Route path="/categories" element={<CategoriesPage/>} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
      <Route path="/my-recipes" element={<MyRecipesPage />} />
      <Route path="/recipes/:id/edit" element={<EditRecipePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
    </Routes>
  );
}

export default App;