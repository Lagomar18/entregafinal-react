import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, agregarProducto, quitarProducto } = useContext(CartContext);

  const confirmarVaciarCarrito = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará todos los productos del carrito. ¿Deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        toast.success('Carrito vaciado correctamente', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div className="detalle-tarjeta">
      {carrito.map((prod) => (
        <div key={prod.id} className="producto-carrito">
          <img src={prod.imagen} alt={prod.nombre} />
          <h1>{prod.nombre}</h1>
          <p>Precio: ${prod.precio}</p>
          <div className="cantidad-control">
            <button onClick={() => quitarProducto(prod)}>-</button>
            <span>{prod.cantidad}</span>
            <button onClick={() => agregarProducto(prod)}>+</button>
          </div>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={confirmarVaciarCarrito}>Vaciar carrito</button>
        </>
      ) : (
        <div>
          <h2>Carrito vacío :/</h2>
          <p>
            ¿Desea continuar comprando? <a href="/">Ir a inicio</a>
          </p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Carrito;
