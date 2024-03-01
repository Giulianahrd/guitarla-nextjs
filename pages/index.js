import Link from "next/link";
import Layout from "@/components/layout";
import ListGuitar from "@/components/list-guitar";
import styles from "../styles/grid.module.css"
import Post from "@/components/post";
import Curso from "@/components/curso";


export default function Home({ guitarras, posts, cursos}) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description='Blog de musica, venta de guitarras'
      >
        <main className="contenedor"> 
          <h1 className="heading">Nuestra coleccion</h1>
          <div className={styles.grid}>
                {guitarras.map(guitarra => (
                    <ListGuitar
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                      />
                 ))}
            </div> 
        </main> 

        <Curso
         cursos={cursos}/>

        <section className='contenedor'>
               <h1 className='heading'>Blog</h1>
               <div className={styles.grid}>
                  {posts.map(post => (
                    <Post
                      key={post.id}
                      post={post.attributes}/>
                     ))}

               </div>
        </section> 
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitar = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCursos = `${process.env.API_URL}/curso?populate=imagen`

  const [ resGuitar, resPosts, resCursos ] = await Promise.all([
    fetch(urlGuitar),
    fetch(urlPosts),
    fetch(urlCursos)
  ])
  const [{ data : guitarras}, { data: posts }, { data: cursos}]  = await Promise.all([
    resGuitar.json(),
    resPosts.json(),
    resCursos.json()
  ])

  return {
    props: {
      guitarras,
      posts, 
      cursos
    }
  }
}