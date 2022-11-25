import { FC, ReactNode } from 'react'
import styles from './PageWrapper.module.scss'
import MainCard from '../MainCard'
import { PageContext } from '../../utils/PageContext'

interface IPageWrapperProps {
  children: ReactNode
}

const PageWrapper: FC<IPageWrapperProps> = ({ children }) => {
  const userInfo = {
    name: 'Testy Tests',
  }
  const pageInfo = {
    name: 'Test Page',
  }
  const content = children

  return (
    <PageContext.Provider
      value={{
        userInfo,
        pageInfo,
        content,
      }}>
      <div className={styles.wrapper}>
        <MainCard />
      </div>
    </PageContext.Provider>
  )
}

export default PageWrapper
