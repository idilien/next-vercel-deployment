import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { NavBar } from '../NavBar'
import styles from '../../styles/Layout.module.css'


export const MainLayout: FC <PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Next.js</title>
            <meta name="description" content="Home App" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
        <NavBar/>
    
          <main className={styles.main}>
           {children}
          </main>
        </div>
      )
}
