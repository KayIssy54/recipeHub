import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { register } from "../services/auth";


function SignUpPage() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  });


  const [error, setError] = useState("");



  function handleChange(e){

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }



  async function handleSubmit(e){

    e.preventDefault();


    if(formData.password !== formData.confirm_password){

      setError("Passwords do not match");
      return;

    }


    try{

      await register({

        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password

      });


      alert("Account created successfully!");


      navigate("/login");


    }catch(error){

      setError(error.message);

    }

  }



  return (
    <>

      <Navbar />


      <div style={styles.wrapper}>


        <div style={styles.card}>


          <h2 style={styles.title}>
            Create Account
          </h2>


          <p style={styles.subtitle}>
            Join Recipe Hub and start sharing your recipes
          </p>



          {error && (
            <p style={styles.error}>
              {error}
            </p>
          )}



          <form 
            style={styles.form}
            onSubmit={handleSubmit}
          >


            <div style={styles.row}>


              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                autocomplete="off"
                value={formData.first_name}
                onChange={handleChange}
                style={styles.input}
                required
              />


              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                autocomplete="off"
                value={formData.last_name}
                onChange={handleChange}
                style={styles.input}
                required
              />


            </div>



            <input
              type="email"
              name="email"
              placeholder="Email Address"
              autocomplete="off"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />



            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />



            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              autoComplete="off"
              value={formData.confirm_password}
              onChange={handleChange}
              style={styles.input}
              required
            />



            <button
              type="submit"
              style={styles.createBtn}
            >
              Create Account
            </button>


          </form>



          <p style={styles.loginText}>

            Already have an account?{" "}

            <Link 
              to="/login"
              style={styles.loginLink}
            >
              Login
            </Link>

          </p>



        </div>


      </div>



      <Footer />

    </>
  );
}





const styles = {


  wrapper: {

    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F8F9FA",
    padding: "40px 20px"

  },


  card: {

    width: "100%",
    maxWidth: "520px",
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)"

  },


  title: {

    textAlign: "center",
    marginBottom: "10px",
    fontSize: "32px"

  },


  subtitle: {

    textAlign: "center",
    marginBottom: "30px",
    color: "#666"

  },


  form: {

    display: "flex",
    flexDirection: "column",
    gap: "16px"

  },


  row: {

    display: "flex",
    gap: "16px"

  },


  input: {

    flex: 1,
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    fontSize: "16px"

  },


  createBtn: {

    background: "#4CAF50",
    color: "#fff",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer"

  },


  loginText: {

    textAlign: "center",
    marginTop: "20px"

  },


  loginLink: {

    color: "#4CAF50",
    fontWeight: "600"

  },


  error: {

    color: "red",
    textAlign: "center",
    marginBottom: "15px"

  }


};


export default SignUpPage;