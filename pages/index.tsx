import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { getIndicators } from '../src/utils/parser'
import { vaccinationDataExample } from '../src/data/example'
import MainLayout from '../src/components/layouts/MainLayout'

export default function Home() {



  return (
    <div className={styles.container}>
      <MainLayout/>

    </div>
  )
}
