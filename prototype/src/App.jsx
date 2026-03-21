import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Splash from './pages/Splash'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import Alerts from './pages/Alerts'
import Payouts from './pages/Payouts'
import Policy from './pages/Policy'
import Profile from './pages/Profile'
import BottomNav from './components/BottomNav'

function App() {
  const location = useLocation()
  const showNav = !['/','/ ','/onboarding'].includes(location.pathname)
  const [user, setUser] = useState(null)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, paddingBottom: showNav ? 70 : 0 }}>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding onComplete={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </div>
      {showNav && <BottomNav />}
    </div>
  )
}

export default App
