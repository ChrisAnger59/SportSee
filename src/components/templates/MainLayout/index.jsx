import { Outlet } from 'react-router-dom'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
