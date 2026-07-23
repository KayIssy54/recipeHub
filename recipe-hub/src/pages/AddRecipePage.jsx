import { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AddRecipePage() {
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('Dinner');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');

  const [ingredients, setIngredients] = useState(['']);
  const [steps, setSteps] = useState(['']);

  const handleIngredientChange = (index, value) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      recipeName,
      category,
      description,
      prepTime,
      cookTime,
      servings,
      ingredients,
      steps,
    };

    console.log('Recipe submitted:', newRecipe);

    alert('Recipe saved successfully!');

    // reset form
    setRecipeName('');
    setCategory('Dinner');
    setDescription('');
    setPrepTime('');
    setCookTime('');
    setServings('');
    setIngredients(['']);
    setSteps(['']);
  };

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <div style={styles.header}>
          <h1 style={styles.title}>Add New Recipe</h1>
          <p style={styles.subtitle}>
            Share your favorite recipe with the Recipe Hub community.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Basic info */}
          <div style={styles.section}>
            <h2>Recipe Information</h2>

            <input
              type="text"
              placeholder="Recipe Name"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              style={styles.input}
              required
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            >
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Dessert</option>
              <option>Healthy</option>
              <option>Snacks</option>
            </select>

            <textarea
              placeholder="Describe your recipe..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              rows={4}
            />

            <input type="file" style={styles.input} />
          </div>

          {/* Times */}
          <div style={styles.section}>
            <h2>Cooking Details</h2>

            <div style={styles.row}>
              <input
                type="text"
                placeholder="Preparation Time"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                style={styles.input}
              />

              <input
                type="text"
                placeholder="Cooking Time"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                style={styles.input}
              />

              <input
                type="number"
                placeholder="Servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                style={styles.input}
              />
            </div>
          </div>

          {/* Ingredients */}
          <div style={styles.section}>
            <h2>Ingredients</h2>

            {ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Ingredient ${index + 1}`}
                value={ingredient}
                onChange={(e) =>
                  handleIngredientChange(index, e.target.value)
                }
                style={styles.input}
              />
            ))}

            <button
              type="button"
              onClick={addIngredient}
              style={styles.addBtn}
            >
              + Add Ingredient
            </button>
          </div>

          {/* Instructions */}
          <div style={styles.section}>
            <h2>Cooking Instructions</h2>

            {steps.map((step, index) => (
              <textarea
                key={index}
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                style={styles.textarea}
                rows={3}
              />
            ))}

            <button
              type="button"
              onClick={addStep}
              style={styles.addBtn}
            >
              + Add Step
            </button>
          </div>

          {/* Submit */}
          <button type="submit" style={styles.saveBtn}>
            Save Recipe
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  page: {
    padding: '40px 0',
  },

  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },

  title: {
    fontSize: '42px',
    marginBottom: '10px',
  },

  subtitle: {
    color: '#666',
    fontSize: '18px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },

  section: {
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  row: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
  },

  input: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },

  textarea: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
    resize: 'vertical',
  },

  addBtn: {
    background: '#F8F9FA',
    color: '#4CAF50',
    padding: '12px 16px',
    borderRadius: '12px',
    fontWeight: '600',
    alignSelf: 'flex-start',
  },

  saveBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '16px',
    borderRadius: '14px',
    fontSize: '18px',
    fontWeight: '600',
  },
};

export default AddRecipePage;