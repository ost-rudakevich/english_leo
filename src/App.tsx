import styles from './App.module.scss'
import AppRoutes from './components/app-routes/AppRoutes'

function App() {
  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  )
}

export default App
