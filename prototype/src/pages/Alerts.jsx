import { AlertTriangle, Users, Clock } from 'lucide-react'
import { activeAlerts } from '../data/mockData'

const severityBadge = (severity) => {
  const colors = { critical: '#EF4444', high: '#F97316', medium: '#F59E0B', low: '#10B981' }
  return {
    background: `${colors[severity]}20`, color: colors[severity],
    border: `1px solid ${colors[severity]}40`, borderRadius: 20,
    padding: '3px 10px', fontSize: 11, fontWeight: 600, textTransform: 'uppercase',
  }
}

const statusBadge = (status) => {
  const map = {
    active: { bg: '#EF444420', color: '#EF4444', label: 'ACTIVE' },
    monitoring: { bg: '#F59E0B20', color: '#F59E0B', label: 'MONITORING' },
    resolved: { bg: '#10B98120', color: '#10B981', label: 'RESOLVED' },
  }
  const s = map[status] || map.active
  return {
    background: s.bg, color: s.color,
    border: `1px solid ${s.color}40`, borderRadius: 20,
    padding: '3px 10px', fontSize: 11, fontWeight: 600,
  }
}

export default function Alerts() {
  const live = activeAlerts.filter(a => a.status === 'active')
  const other = activeAlerts.filter(a => a.status !== 'active')

  return (
    <div style={{
      minHeight: '100vh', padding: '20px 16px',
      background: 'linear-gradient(180deg, #130a2e 0%, #0F0F1A 20%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <AlertTriangle size={22} color="#EF4444" />
        <h1 style={{ fontSize: 22, fontWeight: 700 }}>Disruption Alerts</h1>
      </div>
      <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 24 }}>
        Real-time monitoring across 19 parametric triggers
      </p>

      {/* Summary */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
        {[
          { label: 'Active', value: live.length, color: '#EF4444' },
          { label: 'Monitoring', value: activeAlerts.filter(a => a.status === 'monitoring').length, color: '#F59E0B' },
          { label: 'Resolved (24h)', value: activeAlerts.filter(a => a.status === 'resolved').length, color: '#10B981' },
        ].map(s => (
          <div key={s.label} style={{
            flex: 1, background: '#1A1A2E', borderRadius: 14,
            padding: '12px', border: '1px solid #2D2D4A', textAlign: 'center',
          }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: 11, color: '#9CA3AF' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Live section */}
      {live.length > 0 && (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: '#EF4444' }}>Live Now</span>
          </div>
          {live.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </>
      )}

      {/* Other alerts */}
      {other.length > 0 && (
        <>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#9CA3AF', margin: '20px 0 12px' }}>Other Alerts</div>
          {other.map(alert => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </>
      )}
    </div>
  )
}

function AlertCard({ alert }) {
  return (
    <div style={{
      background: '#1A1A2E', borderRadius: 16, padding: '16px',
      border: '1px solid #2D2D4A', marginBottom: 10,
      borderLeft: `3px solid ${alert.color}`,
      animation: 'fadeIn 0.4s ease-out',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 28 }}>{alert.icon}</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{alert.type}</div>
            <div style={{ fontSize: 12, color: '#9CA3AF' }}>{alert.location}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={severityBadge(alert.severity)}>{alert.severity}</span>
          <span style={statusBadge(alert.status)}>{alert.status}</span>
        </div>
      </div>

      <p style={{ fontSize: 13, color: '#D1D5DB', marginBottom: 12, lineHeight: 1.4 }}>{alert.description}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9CA3AF' }}>
            <Clock size={14} /> Since {alert.startTime}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9CA3AF' }}>
            <Users size={14} /> {alert.affectedWorkers.toLocaleString()} affected
          </div>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#10B981' }}>{'\u20B9'}{alert.estimatedPayout}</div>
      </div>
    </div>
  )
}
