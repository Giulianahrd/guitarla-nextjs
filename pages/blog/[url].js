import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"

export default function Product({ data }) {
    const { titulo, contenido, imagen, publishedAt } = data[0].attributes
    return (
        <Layout>
            <article className={`${styles.post} ${styles['mt-3']}`}>
               <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen blog ${titulo}`}/>

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{publishedAt}</p>
                    <p className={styles.texto}>{contenido[0].children[0].text}</p>
                </div>
            </article>
        </Layout>

    )
}

export async function getServerSideProps({ query: {url} }) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data } = await respuesta.json()

    return {
        props: {
            data
        }
    }
}