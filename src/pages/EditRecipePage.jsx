import { useState,useEffect } from 'react';
import { getRecipe, updateRecipe, deleteRecipe, uploadImage} from "../services/recipes";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function EditRecipePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [recipeName, setRecipeName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  const handleIngredientChange = (index, field, value) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

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

  const handleStepChange = (index, value) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
    
    try{
     let imageUrl = null;


     if (imageFile) {
      const uploadResponse = await uploadImage(imageFile);

      imageUrl = uploadResponse.image_url;
     }


    const updatedRecipe = {
      title: recipeName,
      category_id:Number(category),
      description,
      prep_time: Number(prepTime),
      prep_time_unit: "minutes",
      cook_time: Number(cookTime),
      cook_time_unit: "minutes",
      servings: Number(servings),
      image_url: imageUrl,
      ingredients,
      instructions: steps,
    };

    
      console.log("Sending to backend:");
      console.log(JSON.stringify(updatedRecipe, null, 2));
      await updateRecipe(id, updatedRecipe);

      alert('Recipe updated successfully!');

      navigate("/recipes");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (!confirmDelete) return;

    try {
      await deleteRecipe(id);

      alert("Recipe deleted successfully!");

      navigate("/recipes");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  useEffect(() => {
  async function loadRecipe() {
    try {
      const recipe = await getRecipe(id);

      console.log("recipe.category =", recipe.category);
      console.log("recipe.category_id =", recipe.category_id);

      setRecipeName(recipe.title || "");

      setCategory(recipe.category?.category_id?.toString() || "");

      setDescription(recipe.description || "");

      setPrepTime(recipe.prep_time?.toString() || "");

      setCookTime(recipe.cook_time?.toString() || "");

      setServings(recipe.servings?.toString() || "");

      setIngredients(recipe.ingredients || []);

      setSteps(recipe.instructions || []);

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  loadRecipe();
}, [id]);

  return (
    <>
      <Navbar />

      <div className="container" style={styles.page}>
        <div style={styles.header}>
          <h1 style={styles.title}>Edit Recipe</h1>

          <p style={styles.subtitle}>
            Update your recipe details below.
          </p>
        </div>

        <form onSubmit={handleUpdate} style={styles.form}>

          {/* Recipe Information */}

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
              <option value="1">Dessert</option>
              <option value="2">Breakfast</option>
              <option value="3">Lunch</option>
              <option value="4">Dinner</option>
              <option value="5">Healthy</option>
              <option value="6">Snacks</option>
            </select>

            <textarea
              rows="4"
              placeholder="Recipe Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
            />

            <div>
              <label style={styles.label}>
                Upload New Recipe Image
              </label>

              <input
                type="file"
                accept="image/*"
                style={styles.input}
                onChange={(e) =>
                  setImageFile(e.target.files[0])
                }
              />

              <p style={styles.helperText}>
                Choose a JPG, PNG or JPEG image.
              </p>

              {imageFile && (
                <p style={styles.selectedImage}>
                  Selected: {imageFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Cooking Details */}

          <div style={styles.section}>
            <h2>Cooking Details</h2>

            <div style={styles.row}>
              <input
                type="number"
                placeholder="Preparation Time"
                value={prepTime}
                onChange={(e) =>
                  setPrepTime(e.target.value)
                }
                style={styles.input}
              />

              <input
                type="number"
                placeholder="Cooking Time"
                value={cookTime}
                onChange={(e) =>
                  setCookTime(e.target.value)
                }
                style={styles.input}
              />

              <input
                type="number"
                placeholder="Servings"
                value={servings}
                onChange={(e) =>
                  setServings(e.target.value)
                }
                style={styles.input}
              />
            </div>
          </div>

          {/* Ingredients */}

          <div style={styles.section}>
            <h2>Ingredients</h2>

            {ingredients.map((ingredient, index) => (
              <div key={index} style={styles.row}>

              <input
                type="text"
                placeholder="Ingredient name"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(
                    index,
                    "name",
                    e.target.value
                  )
                }
                style={styles.input}
              />

              <input
                type="text"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) =>
                 handleIngredientChange(
                   index,
                   "quantity",
                   e.target.value
                 )
               }
               style={styles.input}
             />

      
             <input
               type="text"
               placeholder="Unit"
               value={ingredient.unit}
               onChange={(e) =>
                handleIngredientChange(
                  index,
                  "unit",
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

          {/* Cooking Instructions */}

          <div style={styles.section}>
            <h2>Cooking Instructions</h2>

            {steps.map((step, index) => (
              <textarea
                key={index}
                rows="3"
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) =>
                  handleStepChange(index, e.target.value)
                }
                style={styles.textarea}
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

          <button
            type="submit"
            style={styles.updateBtn}
          >
            Update Recipe
          </button>

          <button
            type="button"
            onClick={handleDelete}
            style={styles.deleteBtn}
          >
            Delete Recipe
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
    maxWidth: '900px',
    margin: '0 auto',
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
    border: '1px solid #ddd',
    borderRadius: '12px',
    fontSize: '16px',
  },

  textarea: {
    padding: '14px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    fontSize: '16px',
    resize: 'vertical',
  },

  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#333',
  },

  helperText: {
    marginTop: '8px',
    color: '#777',
    fontSize: '14px',
  },

  selectedImage: {
    marginTop: '10px',
    color: '#4CAF50',
    fontWeight: '600',
  },

  addBtn: {
    background: '#F8F9FA',
    color: '#4CAF50',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #4CAF50',
    fontWeight: '600',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },

  updateBtn: {
    background: '#4CAF50',
    color: '#fff',
    padding: '16px',
    borderRadius: '14px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
  },

  deleteBtn: {
    background: '#E53935',
    color: '#fff',
    padding: '16px',
    borderRadius: '14px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default EditRecipePage;