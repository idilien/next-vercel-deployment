import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'
import styles from '../styles/Home.module.css'

export default function ContactApp() {
  return (
<MainLayout>
        <h1 className={styles.title}>
        Contact <br />
        Ir a <Link href='/'>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/contact.js</code>
        </p>
</MainLayout>

       
  
  )
}
