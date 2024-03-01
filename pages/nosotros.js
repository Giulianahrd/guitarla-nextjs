import Image from 'next/image'
import Layout from '@/components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (

   <Layout
      title={'Nosotros'}
      description='Sobre nosotros' >
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>
            <div className={styles.content}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen sobre nosotros'/>
              
               <div>
                  <p>
                       Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of.
                       The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  </p>
               </div>
            </div>

        </main>

    </Layout>
  
  )
}
