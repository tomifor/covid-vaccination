import React from 'react'
import styles from '../../../styles/Home.module.css'
import { getIndicators } from '../../utils/parser'
import { vaccinationDataExample } from '../../data/example'

const MainLayout = () => {

  const data = getIndicators(vaccinationDataExample)

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Datos vacunación Covid-19 AR 🇦🇷
        </h1>

        <p className={styles.description}>
          Próximamente.
        </p>
        <div>
          <p><strong>Población total:</strong> {data.totalPopulation}</p>
          <p><strong>Dosis totales:</strong> {data.totalAppliedDoses}</p>
          <p><strong>Dosis 1 totales:</strong> {data.totalAppliedFirstDoses}</p>
          <p><strong>Dosis 2 totales:</strong> {data.totalAppliedSecondDoses}</p>
          <p><strong>Personas que al menos recibieron UNA dosis:</strong> {data.populationPercentageVaccinatedFirstDose} %</p>
          <p><strong>Personas con ciclo completo:</strong> {data.populationPercentageVaccinatedSecondDose} %</p>
          <p><strong>Dosis administradas cada 100 personas:</strong> {data.dosesAdministeredPer100}</p>
        </div>
      </main>
    </div>
  )
}

export default MainLayout
