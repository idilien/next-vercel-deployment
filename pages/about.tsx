import Link from 'next/link'
import { DarkLayout } from '../components/layout/DarkLayout'
import { MainLayout } from '../components/layout/MainLayout'
import styles from '../styles/Home.module.css'

export default function AboutApp() {
  return (
<>
    
        <h1 className={styles.title}>
       About
       <br />
        Ir a <Link href='/'>Home</Link>
        </h1> 
   
</>

  )
}

AboutApp.getLayout = function getLayout(page: JSX.Element){
  return(
    <MainLayout>
        <DarkLayout>
            {page}
        </DarkLayout>
    </MainLayout>
  )
}
