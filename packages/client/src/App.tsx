import styles from './App.module.scss'
import PageWrapper from './components/PageWrapper'

const App = () => {
  return (
    <PageWrapper>
      <div className={styles.wrapper}>
        Вот тут будет жить ваше приложение :)
      </div>
    </PageWrapper>
  )
}

export default App
