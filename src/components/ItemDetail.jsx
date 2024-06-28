import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';


export const ItemDetail = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = () => {
        const productoConCantidad = { ...producto, cantidad };
        agregarAlCarrito(productoConCantidad);
        toast.success(`Agregaste ${cantidad} ${producto.nombre} al carrito!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="transparente-fondo-blanco"> {/* Aplicamos la clase para el fondo blanco transparente */}
            <div className="detalle-tarjeta">
                <h2>{producto.nombre}</h2>
                <img src={producto.imagen} alt={producto.nombre} />
                <p>Precio: ${producto.precio}</p>
                <label htmlFor="cantidad">Cantidad:</label>
                <select 
                    id="cantidad" 
                    value={cantidad} 
                    onChange={(e) => setCantidad(Number(e.target.value))}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                <button onClick={handleAgregar}>Agregar</button>
            </div>
        </div>
    );
};

export default ItemDetail;
