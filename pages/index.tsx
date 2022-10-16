import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prathmesh's portfolio</title>
       
      </Head>

      <Header/>
    </div>
  )
}

export default Home
