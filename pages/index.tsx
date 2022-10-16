import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prathmesh's portfolio</title>
       
      </Head>

      <h1 className="text-red-500">This is Portfolio</h1>
    </div>
  )
}

export default Home
