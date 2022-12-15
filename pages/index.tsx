
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'

import styles from '../styles/Home.module.css'

export default function HomeApp() {
  return (
      <MainLayout>
            <h1 className={styles.title}>
            Home <br />
            Ir a <Link href='/about'>About</Link>
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/index.js</code>
            </p>
      </MainLayout>

  )
}
