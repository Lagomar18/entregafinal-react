import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }; 
        }));
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">
              {category.nombre}
            </NavLink>
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default NavBar;
