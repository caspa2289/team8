import { FC, useContext } from 'react'
import styles from './MainCard.module.scss'
import { Card } from '@mui/material'
import MainCardHeader from './components/MainCardHeader'
import { PageContext } from '../../utils/PageContext'

const MainCard: FC = () => {
  const { content } = useContext(PageContext)

  return (
    <Card variant="outlined" className={styles.wrapper}>
      <MainCardHeader />
      {content}
    </Card>
  )
}

export default MainCard
