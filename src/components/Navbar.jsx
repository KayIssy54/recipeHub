import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Navbar() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);


  useEffect(() => {

    const loggedUser = localStorage.getItem("user");

    if(loggedUser){
      setUser(JSON.parse(loggedUser));
    }

  }, []);



  function handleLogout(){

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");

  }



  return (

    <nav style={styles.nav}>

      <div style={styles.logo}>
        Recipe Hub
      </div>


      <div style={styles.links}>

        <Link to="/">Home</Link>

        <Link to="/recipes">
          Recipes
        </Link>


        <Link to="/categories">
          Categories
        </Link>


        {
          user && (
            <>
              <Link to="/favorites">
                Favorites
              </Link>


              <Link to="/add-recipe">
                Add Recipe
              </Link>


              <Link to="/my-recipes">
                My Recipes
              </Link>


              <Link to="/profile">
                Profile
              </Link>
            </>
          )
        }



        {
          user ? (

            <>

              <span style={styles.username}>
                Hi, {user.first_name}
              </span>


              <button
                onClick={handleLogout}
                style={styles.logout}
              >
                Logout
              </button>

            </>


          ) : (

            <>

              <Link to="/login">
                Login
              </Link>


              <Link 
                to="/signup"
                style={styles.signup}
              >
                Sign Up
              </Link>

            </>

          )
        }


      </div>

    </nav>
  );
}



const styles = {


nav:{
 display:'flex',
 justifyContent:'space-between',
 alignItems:'center',
 padding:'20px 40px',
 background:'#fff',
 borderBottom:'1px solid #eee'
},


logo:{
 fontSize:'24px',
 fontWeight:'700',
 color:'#4CAF50'
},


links:{
 display:'flex',
 gap:'20px',
 alignItems:'center'
},


username:{
 fontWeight:'600',
 color:'#333'
},


signup:{
 background:'#4CAF50',
 color:'#fff',
 padding:'10px 18px',
 borderRadius:'12px',
 textDecoration:'none'
},


logout:{
 background:'#FF9800',
 color:'#fff',
 border:'none',
 padding:'10px 18px',
 borderRadius:'12px',
 cursor:'pointer'
}


};


export default Navbar;