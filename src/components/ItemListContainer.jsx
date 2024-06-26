import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "../firebase/config"; 

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        let q = productosRef;

        if (categoryId) {
          q = query(productosRef, where("categoria.id", "==", categoryId));
        }

        const productosSnapshot = await getDocs(q);
        const productosList = productosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(productosList);

        // Obtener el nombre de la categoría si categoryId está presente
        if (categoryId) {
          const categoriasRef = collection(db, "categorias");
          const catQuery = query(categoriasRef, where("id", "==", categoryId));
          const categoriaSnapshot = await getDocs(catQuery);

          if (categoriaSnapshot.docs.length > 0) {
            setTitulo(categoriaSnapshot.docs[0].data().nombre);
          } else {
            setTitulo("Productos");
          }
        } else {
          setTitulo("Productos");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <section className='background-image'>
      <div className="item-list-container">
        <h1>{titulo}</h1>
        {productos.length > 0 ? (
          <ItemList productos={productos} />
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
    </section>
  );
};
