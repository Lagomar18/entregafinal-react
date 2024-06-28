import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../firebase/config"; 
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    let { itemId } = useParams();
    let [producto, setProducto] = useState(null);
    let [cargando, setCargando] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {
        let estaMontado = true; // Seguimiento de si el componente está montado

        const fetchData = async () => {
            try {
                const docRef = doc(db, "productos", itemId);
                const res = await getDoc(docRef);
                
                if (estaMontado) {
                    if (res.exists()) {
                        setProducto({ ...res.data(), id: res.id });
                    } else {
                        setProducto(null); // Establecer producto explícitamente en null si el documento no existe
                    }
                }
            } catch (err) {
                if (estaMontado) {
                    setError("Error al obtener los datos del producto");
                }
            } finally {
                if (estaMontado) {
                    setCargando(false);
                }
            }
        };

        fetchData();

        return () => {
            estaMontado = false; // Función de limpieza para marcar el componente como no montado
        };
    }, [itemId]);

    if (cargando) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (producto) {
        return <ItemDetail producto={producto} />;
    } else {
        return <div>Producto no encontrado</div>;
    }
}

export default ItemDetailContainer;
