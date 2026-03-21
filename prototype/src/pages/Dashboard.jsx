import { useNavigate } from 'react-router-dom'
import { Shield, AlertTriangle, Wallet, TrendingUp, Bell, ChevronRight, Zap } from 'lucide-react'
import { activeAlerts, payoutHistory } from '../data/mockData'

export default function Dashboard({ user }) {
  const navigate = useNavigate()
  const name = user?.name || 'Rajesh'
  const city = user?.cityName || 'Delhi NCR'
  const premium = user?.premium || 300

  const totalPayouts = payoutHistory.reduce((sum, p) => sum + p.amount, 0)
  const liveAlerts = activeAlerts.filter(a => a.status === 'active')

  return (
    <div style={{
      minHeight: '100vh', padding: '20px 16px',
      background: 'linear-gradient(180deg, #130a2e 0%, #0F0F1A 20%)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 14, color: '#9CA3AF' }}>Good afternoon,</div>
          <div style={{ fontSize: 22, fontWeight: 700 }}>{name}</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 14,
            background: '#1A1A2E', border: '1px solid #2D2D4A',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            <Bell size={20} color="#9CA3AF" />
            <div style={{
              position: 'absolute', top: 8, right: 8, width: 8, height: 8,
              borderRadius: '50%', background: '#EF4444',
            }} />
          </div>
        </div>
      </div>

      {/* Policy Status Card */}
      <div style={{
        background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
        borderRadius: 20, padding: '20px', marginBottom: 16,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', bottom: -20, left: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 2 }}>Active Policy</div>
            <div style={{ fontSize: 13, opacity: 0.7 }}>{city} Zone</div>
          </div>
          <div style={{
            background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#34D399',
          }}>
            Protected
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Weekly Premium</div>
            <div style={{ fontSize: 32, fontWeight: 800 }}>{'\u20B9'}{premium}<span style={{ fontSize: 14, fontWeight: 400, opacity: 0.7 }}>/wk</span></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Coverage</div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>9 Triggers</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
        {[
          { icon: Wallet, label: 'Total Saved', value: `\u20B9${totalPayouts.toLocaleString()}`, color: '#10B981' },
          { icon: Zap, label: 'This Week', value: '\u20B9800', color: '#F59E0B' },
          { icon: TrendingUp, label: 'ROI', value: '267%', color: '#8B5CF6' },
        ].map(stat => (
          <div key={stat.label} style={{
            background: '#1A1A2E', borderRadius: 16, padding: '14px 12px',
            border: '1px solid #2D2D4A', textAlign: 'center',
          }}>
            <stat.icon size={20} color={stat.color} style={{ marginBottom: 6 }} />
            <div style={{ fontSize: 18, fontWeight: 700, color: stat.color }}>{stat.value}</div>
            <div style={{ fontSize: 10, color: '#9CA3AF', marginTop: 2 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Live Alerts */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 15, fontWeight: 600 }}>Live Disruptions</span>
          </div>
          <button onClick={() => navigate('/alerts')} style={{ background: 'none', color: '#8B5CF6', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
            View all <ChevronRight size={16} />
          </button>
        </div>

        {liveAlerts.slice(0, 2).map(alert => (
          <div key={alert.id} style={{
            background: '#1A1A2E', borderRadius: 14, padding: '14px 16px',
            border: '1px solid #2D2D4A', marginBottom: 8,
            borderLeft: `3px solid ${alert.color}`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 24 }}>{alert.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{alert.type}</div>
                  <div style={{ fontSize: 12, color: '#9CA3AF' }}>{alert.location} | Since {alert.startTime}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#10B981' }}>{'\u20B9'}{alert.estimatedPayout}</div>
                <div style={{ fontSize: 10, color: '#9CA3AF' }}>est. payout</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Payouts */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 15, fontWeight: 600 }}>Recent Payouts</span>
          <button onClick={() => navigate('/payouts')} style={{ background: 'none', color: '#8B5CF6', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
            View all <ChevronRight size={16} />
          </button>
        </div>

        {payoutHistory.slice(0, 3).map(payout => (
          <div key={payout.id} style={{
            background: '#1A1A2E', borderRadius: 14, padding: '12px 16px',
            border: '1px solid #2D2D4A', marginBottom: 8,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>{payout.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{payout.trigger}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF' }}>{payout.date}</div>
              </div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#10B981' }}>+{'\u20B9'}{payout.amount}</div>
          </div>
        ))}
      </div>

      {/* AI Insight */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(108,60,225,0.15), rgba(59,130,246,0.1))',
        borderRadius: 16, padding: '16px', marginTop: 16,
        border: '1px solid rgba(108,60,225,0.3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Zap size={16} color="#8B5CF6" />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#8B5CF6' }}>AI Insight</span>
        </div>
        <p style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.5 }}>
          Based on weather forecasts, there is a 78% chance of heat wave disruption tomorrow between 12-5 PM. Your estimated payout: {'\u20B9'}400-500.
        </p>
      </div>
    </div>
  )
}
