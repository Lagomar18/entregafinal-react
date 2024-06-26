import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + producto.cantidad }
                        : item
                );
            } else {
                return [...prevCarrito, producto];
            }
        });
    };

    const agregarProducto = (producto) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
        toast.success(`Agregaste 1 ${producto.nombre}`, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const quitarProducto = (producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);
            if (productoExistente.cantidad === 1) {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: `Esta acción eliminará ${producto.nombre} del carrito. ¿Deseas continuar?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setCarrito(prevCarrito.filter(item => item.id !== producto.id));
                        toast.warn(`Eliminaste ${producto.nombre}`, {
                            position: 'top-left',
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                });
                return prevCarrito;
            } else {
                toast.warn(`Quitaste 1 ${producto.nombre}`, {
                    position: 'top-left',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                );
            }
        });
    };

    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const calcularTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    const eliminarProducto = (producto) => {
        const productoEncontrado = carrito.find(prod => prod.id === producto.id);
        const indice = carrito.indexOf(productoEncontrado);
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(indice, 1);
        setCarrito(nuevoCarrito);
    };

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, agregarProducto, quitarProducto, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto }}>
            {children}
        </CartContext.Provider>
    );
};
