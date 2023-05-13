import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../HomePage'
import FishingChartersPage from '../FishingChartersPage'
import InshoreBackcountryChartersPage from '../InshoreBackcountryChartersPage'
import OffshoreChartersPage from '../OffshoreChartersPage'
import NightFishingChartersPage from '../NightFishingChartersPage'
import EcoEnviroToursPage from '../EcoEnviroToursPage'
import CustomFishingPackagesPage from '../CustomFishingPackagesPage'
import Footer from '../Footer'


function App() {

  return (
    <>
      <Nav />
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fishing-charters" element={<FishingChartersPage />} />
        <Route path="/inshore-backcountry-charters" element={<InshoreBackcountryChartersPage />} />
        <Route path="/offshore-charters" element={<OffshoreChartersPage />} />
        <Route path="/night-fishing-charters" element={<NightFishingChartersPage />} />
        <Route path="/eco-enviro-tours" element={<EcoEnviroToursPage />} />
        <Route path="/custom-fishing-packages" element={<CustomFishingPackagesPage />} />
      </Routes>
    </>
  )
}

export default App
