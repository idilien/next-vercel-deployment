import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../../components/layout/MainLayout'

export default function PricingApp() {
  return (
      <MainLayout>
            <h1 className={styles.title}>
            Pricing 
            <br />
            Ir a <Link href='/about'>Home</Link>
            </h1>

            <p className={styles.description}>
              Get started by editing{' '}
              <code className={styles.code}>pages/pricing/index.js</code>
            </p>
      </MainLayout>

  )
}