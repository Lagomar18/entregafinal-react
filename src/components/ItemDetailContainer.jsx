import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc,  getDoc  } from "firebase/firestore"; 
import { db  } from "../firebase/config"; 
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {

      const docRef = doc(db, "productos" , itemId);
      getDoc( docRef )
      .then(res =>{
        setProducto( {... res.data(), id:res.id});
      })
    
    }, [itemId])
    

  return (
    <div>{producto ? <ItemDetail producto={producto} /> : "Cargando..."}</div>
  )
}

export default ItemDetailContainer 