import { useState } from 'react';
import { createRecipe } from "../services/recipes";
import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function AddRecipePage() {
  const navigate = useNavigate();

  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('Dessert');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [prepTimeUnit, setPrepTimeUnit] = useState("minutes");
  const [cookTimeUnit, setCookTimeUnit] = useState("minutes");
  const [ingredients, setIngredients] = useState([{name: "",
    quantity: "",
    unit: ""}]);
  const [steps, setSteps] = useState(['']);

  // Handle ingredient input
  const handleIngredientChange = (index,field,value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;
    setIngredients(updatedIngredients);
  };

  // Add another ingredient field
  const addIngredient = () => {
    setIngredients([
        ...ingredients,
        {
            name: "",
            quantity: "",
            unit: ""
        }
    ]);
};

  // Handle instruction input
  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  // Add another instruction field
  const addStep = () => {
    setSteps([...steps, '']);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Convert the selected category to its database ID
  const categoryMap = {
    Breakfast: 2,
    Lunch: 3,
    Dinner: 4,
    Dessert: 1,
    Healthy: 5,
    Snacks: 6,
  };

  const recipeData = {
    category_id: categoryMap[category],
    title: recipeName,
    description,
    prep_time: Number(prepTime),
    prep_time_unit: prepTimeUnit,
    cook_time: Number(cookTime),
    cook_time_unit: cookTimeUnit,
    servings: Number(servings),

   
    image_url: imageFile
      ? `images/${imageFile.name}`
      : "https://via.placeholder.com/600x400",

    ingredients,
    instructions: steps,
  };

  console.log(recipeData);
  try {
    await createRecipe(recipeData);

    alert("Recipe created successfully!");

    // Reset form
    setRecipeName("");
    setCategory("Dinner");
    setDescription("");
    setPrepTime("");
    setCookTime("");
    setServings("");
    setImageFile(null);
    setIngredients([{name:"",quantity: "",
    unit: ""}]);
    setSteps([""]);

    navigate("/recipes");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        {/* Page header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Add New Recipe</h1>
          <p style={styles.subtitle}>
            Share your favorite recipe with the Recipe Hub community.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>

          {/* Recipe Information */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Recipe Information</h2>

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
              required
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
              required
            />

            {/* Upload Image */}
            <div>
              <label style={styles.label}>Upload Recipe Image</label>

              <input
                type="file"
                accept="image/*"
                style={styles.input}
                onChange={(e) => setImageFile(e.target.files[0])}
              />

              <p style={styles.helperText}>
                Choose a JPG or PNG image for your recipe.
              </p>

              {imageFile && (
                <p style={styles.selectedFile}>
                  Selected: {imageFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Cooking Details */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Cooking Details</h2>

            <div style={styles.row}>
              <input
                type="number"
                placeholder="Preparation Time"
                value={prepTime}
                onChange={(e) => setPrepTime(e.target.value)}
                style={styles.input}
                required
              />

              <select
                value={prepTimeUnit}
                onChange={(e)=>setPrepTimeUnit(e.target.value)}
                style={styles.input}
              >

                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>

              </div>

              <div style={styles.row}>
              <input
                type="number"
                placeholder="Cooking Time"
                value={cookTime}
                onChange={(e) => setCookTime(e.target.value)}
                style={styles.input}
                required
              />

              <select
                value={cookTimeUnit}
                onChange={(e)=>setCookTimeUnit(e.target.value)}
                style={styles.input}
              >
                <option value="minutes">Minutes</option>
                <option value="hours">Hours</option>
              </select>

              </div>

              <input
                type="number"
                placeholder="Servings"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                style={styles.input}
                required
              />
            </div>
          

          {/* Ingredients */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Ingredients</h2>

            {ingredients.map((ingredient, index) => (
              <div key={index}>

    <input
        type="text"
        placeholder="Quantity"
        value={ingredient.quantity}
        required
        onChange={(e) =>
            handleIngredientChange(
                index,
                "quantity",
                e.target.value
            )
        }
    />

    <input
        type="text"
        placeholder="Unit"
        value={ingredient.unit}
        required
        onChange={(e) =>
            handleIngredientChange(
                index,
                "unit",
                e.target.value
            )
        }
    />

    <input
        type="text"
        placeholder="Ingredient"
        value={ingredient.name}
        required
        onChange={(e) =>
            handleIngredientChange(
                index,
                "name",
                e.target.value
            )
           }
           style={styles.input}
           />
          </div>
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
            <h2 style={styles.sectionTitle}>Cooking Instructions</h2>

            {steps.map((step, index) => (
              <textarea
                key={index}
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                style={styles.textarea}
                rows={3}
                required
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

          {/* Save Button */}
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
    marginBottom: '32px',
  },

  title: {
    fontSize: '42px',
    marginBottom: '12px',
    color: '#333',
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

  sectionTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '8px',
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
    outline: 'none',
  },

  textarea: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontSize: '16px',
    resize: 'vertical',
    outline: 'none',
  },

  label: {
    fontWeight: '600',
    marginBottom: '8px',
    display: 'block',
    color: '#333',
  },

  helperText: {
    color: '#666',
    fontSize: '14px',
    marginTop: '6px',
  },

  selectedFile: {
    color: '#4CAF50',
    fontWeight: '600',
    marginTop: '8px',
  },

  addBtn: {
    background: '#F8F9FA',
    color: '#4CAF50',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #ddd',
    fontWeight: '600',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },

  saveBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '16px',
    borderRadius: '14px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default AddRecipePage;