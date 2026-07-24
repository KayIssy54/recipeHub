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
import ReviewsPage from './pages/ReviewsPage';
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
      <Route path="/edit-recipe/:id" element={<EditRecipePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
    </Routes>
  );
}

export default App;