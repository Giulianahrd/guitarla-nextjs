import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "@/components/layout"
import { useState } from "react"

export default function Producto({data, agregarCarrito}) {

   const {nombre, descripcion, imagen, precio} = data[0].attributes
   const [ cantidad, setCantidad ] = useState(0)

   const handleSubmit = (e) => {
    e.preventDefault()
    if (cantidad < 1) {
        alert('Cantidad no valida')
        return
    }

    const guitarraSeleccionada = {
        id: data[0].id,
        imagen: imagen.data.attributes.url,
        nombre, 
        cantidad, 
        precio
    }
    agregarCarrito(guitarraSeleccionada)
   }

   return (
        <Layout title={`Guitarra ${nombre}`}>
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}/>

                <div className={styles.contenido}>

                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="cantidad">Cantidad</label>

                        <select id="cantidad" onChange={e => setCantidad(Number(e.target.value))}>
                            <option value="0">Seleccione</option>
                            <option id="1">1</option>
                            <option id="2">2</option>
                            <option id="3">3</option>
                            <option id="4">4</option>
                            <option id="5">5</option>
                        </select>
                        <input
                           type="submit"
                           value="Agregar al carrito"  
                        />
                    </form>
                
                </div>
            </div>
        </Layout>
  )
}

export async function getServerSideProps({ query: {url} }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data } = await respuesta.json()
    
    return {
        props: {
            data
        }
    }
}

