import { Wallet, TrendingUp, Calendar, CheckCircle } from 'lucide-react'
import { payoutHistory } from '../data/mockData'

export default function Payouts() {
  const totalPayouts = payoutHistory.reduce((sum, p) => sum + p.amount, 0)

  return (
    <div style={{
      minHeight: '100vh', padding: '20px 16px',
      background: 'linear-gradient(180deg, #130a2e 0%, #0F0F1A 20%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Wallet size={22} color="#10B981" />
        <h1 style={{ fontSize: 22, fontWeight: 700 }}>Payout History</h1>
      </div>
      <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 24 }}>
        Automatic payouts - zero claims filed
      </p>

      {/* Summary Card */}
      <div style={{
        background: 'linear-gradient(135deg, #065F46, #10B981)',
        borderRadius: 20, padding: '20px', marginBottom: 20,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>Total Income Protected</div>
        <div style={{ fontSize: 38, fontWeight: 800, marginBottom: 12 }}>
          {'\u20B9'}{totalPayouts.toLocaleString()}
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>This Month</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{'\u20B9'}2,400</div>
          </div>
          <div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Payouts</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{payoutHistory.length}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Avg Time</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>&lt;5 min</div>
          </div>
        </div>
      </div>

      {/* Weekly Chart Placeholder */}
      <div style={{
        background: '#1A1A2E', borderRadius: 16, padding: '16px',
        border: '1px solid #2D2D4A', marginBottom: 20,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Weekly Trend</span>
          <span style={{ fontSize: 12, color: '#10B981', display: 'flex', alignItems: 'center', gap: 4 }}>
            <TrendingUp size={14} /> +23% vs last month
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80 }}>
          {[40, 65, 30, 85, 55, 70, 90].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: 6,
              background: i === 6
                ? 'linear-gradient(180deg, #6C3CE1, #3B82F6)'
                : '#252542',
              transition: 'all 0.3s',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
            <span key={d} style={{ fontSize: 10, color: '#6B7280', flex: 1, textAlign: 'center' }}>{d}</span>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>All Transactions</div>
      {payoutHistory.map(payout => (
        <div key={payout.id} style={{
          background: '#1A1A2E', borderRadius: 14, padding: '14px 16px',
          border: '1px solid #2D2D4A', marginBottom: 8,
          animation: 'fadeIn 0.4s ease-out',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 26 }}>{payout.icon}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{payout.trigger}</div>
                <div style={{ fontSize: 12, color: '#9CA3AF' }}>{payout.date} | {payout.duration}</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#10B981' }}>+{'\u20B9'}{payout.amount}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                <CheckCircle size={12} color="#10B981" />
                <span style={{ fontSize: 11, color: '#10B981' }}>Paid</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: '#6B7280', borderTop: '1px solid #2D2D4A', paddingTop: 8 }}>
            TXN: {payout.txId} | UPI Transfer
          </div>
        </div>
      ))}
    </div>
  )
}
