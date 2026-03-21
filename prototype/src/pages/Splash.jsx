import { useNavigate } from 'react-router-dom'
import { Shield, ChevronRight } from 'lucide-react'

export default function Splash() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 24px',
      background: 'linear-gradient(180deg, #1a0a3e 0%, #0F0F1A 50%, #0a1628 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-30%', width: '80%', height: '80%',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(108,60,225,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-20%', width: '60%', height: '60%',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Logo */}
        <div style={{
          width: 90, height: 90, borderRadius: 24,
          background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px',
          boxShadow: '0 20px 60px rgba(108,60,225,0.4)',
          animation: 'fadeIn 0.8s ease-out',
        }}>
          <Shield size={48} color="white" strokeWidth={2} />
        </div>

        <h1 style={{
          fontSize: 42, fontWeight: 800, marginBottom: 8,
          background: 'linear-gradient(135deg, #fff 30%, #8B5CF6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          animation: 'fadeIn 1s ease-out',
        }}>
          SurakshaPay
        </h1>

        <p style={{
          fontSize: 16, color: '#9CA3AF', marginBottom: 12,
          fontWeight: 500, letterSpacing: 2,
          animation: 'fadeIn 1.2s ease-out',
        }}>
          INCOME PROTECTION
        </p>

        <p style={{
          fontSize: 18, color: '#D1D5DB', lineHeight: 1.6,
          maxWidth: 320, margin: '0 auto 48px',
          animation: 'fadeIn 1.4s ease-out',
        }}>
          AI-powered parametric insurance for India's 15M+ gig delivery workers
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 48,
          animation: 'fadeIn 1.6s ease-out',
        }}>
          {[
            { value: '15M+', label: 'Gig Workers' },
            { value: '₹0', label: 'Claims Filed' },
            { value: '<5min', label: 'Payout Time' },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16, padding: '16px 16px', flex: 1,
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#8B5CF6' }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate('/onboarding')}
          style={{
            background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
            color: 'white', border: 'none', borderRadius: 16,
            padding: '18px 32px', fontSize: 18, fontWeight: 700,
            width: '100%', maxWidth: 340,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: '0 8px 32px rgba(108,60,225,0.4)',
            transition: 'all 0.3s',
            animation: 'fadeIn 1.8s ease-out',
          }}
        >
          Get Protected <ChevronRight size={22} />
        </button>

        <p style={{
          fontSize: 12, color: '#6B7280', marginTop: 16,
          animation: 'fadeIn 2s ease-out',
        }}>
          Zero claims. Instant payouts. AI-verified.
        </p>
      </div>
    </div>
  )
}
