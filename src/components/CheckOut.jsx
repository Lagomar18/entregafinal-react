import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export const CheckOut = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let [docId, setDocId] = useState("");
    
    const email = watch('email');
    const emailConfirm = watch('emailConfirm');

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id); 
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <div className="mensaje-agradecimiento">
                <h1>¡Muchas gracias por elegirnos!</h1>
                <p>Su número de seguimiento es: {docId}</p>
            </div>
        )
    }

    return (
        <div className="checkout-container">
            <form className="checkout-form" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingrese su nombre" {...register("nombre", { required: true })} />
                {errors.nombre && <span>Este campo es requerido</span>}
                
                <input type="tel" placeholder="Número de teléfono" {...register("telefono", { 
                    required: true,
                    pattern: {
                        value: /^[0-9]+$/,
                        message: "Formato inválido, solo se permiten números"
                    }
                })} />
                {errors.telefono && <span>{errors.telefono.message}</span>}
                
                <input type="text" placeholder="Dirección de envío" {...register("direccion", { required: true })} />
                {errors.direccion && <span>Este campo es requerido</span>}
                
                <input type="email" placeholder="Ingrese su e-mail" {...register("email", { required: true })} />
                {errors.email && <span>Este campo es requerido</span>}
                
                <input type="email" placeholder="Repita su e-mail" {...register("emailConfirm", { 
                    required: true, 
                    validate: value => value === email || "Los correos electrónicos no coinciden"
                })} />
                {errors.emailConfirm && <span>{errors.emailConfirm.message}</span>}
                
                <button type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default CheckOut;
