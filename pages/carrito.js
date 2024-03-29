import { useState, useEffect } from "react"
import Layout from "@/components/layout"
import styles from "../styles/carrito.module.css"
import Image from "next/image"

export default function Carrito({ carrito, actualizarCantidad, eliminarProducto }) {

    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito])
  console.log(carrito)
  return (
    <Layout title="Carrito de compras">
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>
            <div className= {styles.content}>
                <div className={styles.carrito}>
                  <h2>Articulos</h2>

                   {carrito.length === 0 ? 'Carrito Vacio' : (
                      carrito.map(producto => (
                        <div className={styles.producto} key={producto.id}>
                            <div>
                                <Image width={250} height={480} src={producto.imagen} alt={producto.nombre}/>
                            </div>
                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>

                                <div>
                                    <p>Cantidad: </p>
                                    <select 
                                        id="cantidad" 
                                        onChange={ e => actualizarCantidad({
                                            id: producto.id,
                                            cantidad: e.target.value
                                        })} 
                                        className={styles.select}
                                        value={producto.cantidad}
                                     >
                                        <option value="0">Seleccione</option>
                                        <option id="1">1</option>
                                        <option id="2">2</option>
                                        <option id="3">3</option>
                                        <option id="4">4</option>
                                        <option id="5">5</option>
                                    </select>
                                </div>
                                
                                <p className={styles.precio}>${producto.precio}</p>
                                <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                
                                <button 
                                   className={styles.eliminar} 
                                   type="button"
                                   onClick={ () => eliminarProducto(producto.id)}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                      ))
                   )}
                </div>

              <aside className={styles.resumen}>
                  <h3>Resumen del pedido</h3>
                  <p>Total a pagar: ${total}</p>
              </aside>

            </div>
        </main>
        
    </Layout>
  )
}
