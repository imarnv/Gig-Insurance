import { useNavigate, useLocation } from 'react-router-dom'
import { Home, AlertTriangle, Wallet, Shield, User } from 'lucide-react'

const tabs = [
  { path: '/dashboard', icon: Home, label: 'Home' },
  { path: '/alerts', icon: AlertTriangle, label: 'Alerts' },
  { path: '/payouts', icon: Wallet, label: 'Payouts' },
  { path: '/policy', icon: Shield, label: 'Policy' },
  { path: '/profile', icon: User, label: 'Profile' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: 430,
      background: 'linear-gradient(180deg, rgba(15,15,26,0.95) 0%, #0F0F1A 100%)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid #2D2D4A',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '8px 0 12px',
      zIndex: 100,
    }}>
      {tabs.map(({ path, icon: Icon, label }) => {
        const active = location.pathname === path
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              background: 'none',
              color: active ? '#8B5CF6' : '#6B7280',
              fontSize: 11,
              fontWeight: active ? 600 : 400,
              transition: 'all 0.2s',
              padding: '4px 12px',
            }}
          >
            <Icon size={22} strokeWidth={active ? 2.5 : 1.5} />
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
