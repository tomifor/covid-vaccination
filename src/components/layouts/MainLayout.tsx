import React from 'react'
import styles from '../../../styles/Home.module.scss'
import { getIndicators } from '../../utils/parser'
import { vaccinationDataExample } from '../../data/example'

const MainLayout = () => {



  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Bienvenido! Aquí encontraras los datos de vacunación de tu provincia o municipio</p>
        </div>
        <div>

        </div>
      </main>
    </div>
  )
}

export default MainLayout
