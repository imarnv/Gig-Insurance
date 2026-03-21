import { User, MapPin, Briefcase, Clock, Shield, LogOut, ChevronRight, Settings, HelpCircle } from 'lucide-react'

export default function Profile({ user }) {
  const name = user?.name || 'Rajesh Kumar'
  const city = user?.cityName || 'Delhi NCR'
  const platform = user?.platform || 'Zomato'
  const tier = user?.tierLabel || 'Full-Time (40+ hrs/week)'

  return (
    <div style={{
      minHeight: '100vh', padding: '20px 16px',
      background: 'linear-gradient(180deg, #130a2e 0%, #0F0F1A 20%)',
    }}>
      {/* Profile Header */}
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%', margin: '0 auto 12px',
          background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(108,60,225,0.3)',
        }}>
          <User size={36} color="white" />
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{name}</h1>
        <p style={{ fontSize: 13, color: '#9CA3AF' }}>Member since March 2026</p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
          borderRadius: 20, padding: '4px 14px', marginTop: 8,
        }}>
          <Shield size={14} color="#10B981" />
          <span style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>Policy Active</span>
        </div>
      </div>

      {/* Info Cards */}
      <div style={{
        background: '#1A1A2E', borderRadius: 16, padding: '4px 0',
        border: '1px solid #2D2D4A', marginBottom: 16,
      }}>
        {[
          { icon: MapPin, label: 'City', value: city, color: '#3B82F6' },
          { icon: Briefcase, label: 'Platform', value: platform, color: '#F59E0B' },
          { icon: Clock, label: 'Work Type', value: tier.split('(')[0].trim(), color: '#8B5CF6' },
          { icon: Shield, label: 'Policy ID', value: 'SP-2026-DL-04821', color: '#10B981' },
        ].map((item, i) => (
          <div key={item.label} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 16px',
            borderBottom: i < 3 ? '1px solid #2D2D4A' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${item.color}15`, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
              }}>
                <item.icon size={18} color={item.color} />
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#9CA3AF' }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{item.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Total Protected', value: '\u20B92,400', sub: 'This month' },
          { label: 'Claims Filed', value: '0', sub: 'Zero-claim model' },
          { label: 'Avg Payout Time', value: '<5 min', sub: 'Instant UPI' },
          { label: 'Active Weeks', value: '3', sub: 'Consecutive' },
        ].map(s => (
          <div key={s.label} style={{
            background: '#1A1A2E', borderRadius: 14, padding: '14px',
            border: '1px solid #2D2D4A',
          }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>{s.value}</div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: '#6B7280' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div style={{
        background: '#1A1A2E', borderRadius: 16,
        border: '1px solid #2D2D4A', marginBottom: 16,
      }}>
        {[
          { icon: Settings, label: 'Account Settings' },
          { icon: HelpCircle, label: 'Help & Support' },
        ].map((item, i) => (
          <button key={item.label} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 16px', width: '100%', background: 'none', color: 'white',
            borderBottom: i === 0 ? '1px solid #2D2D4A' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <item.icon size={18} color="#9CA3AF" />
              <span style={{ fontSize: 14 }}>{item.label}</span>
            </div>
            <ChevronRight size={18} color="#6B7280" />
          </button>
        ))}
      </div>

      <button style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: '14px', width: '100%', background: 'rgba(239,68,68,0.1)',
        border: '1px solid rgba(239,68,68,0.3)', borderRadius: 14,
        color: '#EF4444', fontSize: 14, fontWeight: 500,
      }}>
        <LogOut size={18} /> Sign Out
      </button>
    </div>
  )
}
