import { Shield, Check, X, Info } from 'lucide-react'
import { policyDetails } from '../data/mockData'

export default function Policy() {
  const p = policyDetails

  return (
    <div style={{
      minHeight: '100vh', padding: '20px 16px',
      background: 'linear-gradient(180deg, #130a2e 0%, #0F0F1A 20%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Shield size={22} color="#8B5CF6" />
        <h1 style={{ fontSize: 22, fontWeight: 700 }}>My Policy</h1>
      </div>
      <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 24 }}>
        Parametric income protection coverage
      </p>

      {/* Policy Card */}
      <div style={{
        background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
        borderRadius: 20, padding: '20px', marginBottom: 20,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Policy ID</div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{p.policyId}</div>
          </div>
          <div style={{
            background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)',
            borderRadius: 20, padding: '4px 12px', fontSize: 12, fontWeight: 600, color: '#34D399',
          }}>
            {p.status}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Start Date</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{p.startDate}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 11, opacity: 0.7 }}>Renewal</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{p.renewalDate}</div>
          </div>
        </div>
      </div>

      {/* Premium Breakdown */}
      <div style={{
        background: '#1A1A2E', borderRadius: 16, padding: '16px',
        border: '1px solid #2D2D4A', marginBottom: 20,
      }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Weekly Premium</div>
        {[
          { label: 'Base Premium (Tier 1 x 1.2)', value: p.premiumBreakdown.basePremium },
          { label: 'Seasonal Risk (Heat Wave)', value: p.premiumBreakdown.riskPremium },
          { label: 'Optional Riders', value: p.premiumBreakdown.riders },
        ].map(item => (
          <div key={item.label} style={{
            display: 'flex', justifyContent: 'space-between', padding: '8px 0',
            borderBottom: '1px solid #2D2D4A', fontSize: 13, color: '#D1D5DB',
          }}>
            <span>{item.label}</span>
            <span style={{ fontWeight: 500 }}>{'\u20B9'}{item.value}</span>
          </div>
        ))}
        <div style={{
          display: 'flex', justifyContent: 'space-between', padding: '12px 0 0',
          fontSize: 16, fontWeight: 700,
        }}>
          <span>Total</span>
          <span style={{ color: '#8B5CF6' }}>{'\u20B9'}{p.premiumBreakdown.total}/week</span>
        </div>
      </div>

      {/* Coverage Triggers */}
      <div style={{
        background: '#1A1A2E', borderRadius: 16, padding: '16px',
        border: '1px solid #2D2D4A', marginBottom: 20,
      }}>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 14 }}>Coverage Triggers</div>
        {p.coverageTriggers.map(trigger => (
          <div key={trigger.name} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 0', borderBottom: '1px solid #2D2D4A',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}>{trigger.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{trigger.name}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF' }}>{trigger.payoutRate}</div>
              </div>
            </div>
            {trigger.covered ? (
              <div style={{
                background: 'rgba(16,185,129,0.15)', borderRadius: 20,
                padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <Check size={14} color="#10B981" />
                <span style={{ fontSize: 11, color: '#10B981', fontWeight: 600 }}>Covered</span>
              </div>
            ) : (
              <button style={{
                background: 'rgba(108,60,225,0.15)', borderRadius: 20,
                padding: '4px 10px', display: 'flex', alignItems: 'center', gap: 4,
                border: '1px solid rgba(108,60,225,0.3)',
              }}>
                <span style={{ fontSize: 11, color: '#8B5CF6', fontWeight: 600 }}>Add Rider</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* How it works */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(108,60,225,0.1), rgba(59,130,246,0.05))',
        borderRadius: 16, padding: '16px',
        border: '1px solid rgba(108,60,225,0.2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Info size={16} color="#8B5CF6" />
          <span style={{ fontSize: 14, fontWeight: 600, color: '#8B5CF6' }}>How It Works</span>
        </div>
        {[
          'AI monitors 19 disruption triggers 24/7',
          'Parametric triggers auto-detect events in your zone',
          'Income loss calculated using your Earnings DNA',
          'Payout sent to UPI within minutes - no claims needed',
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
              background: 'rgba(108,60,225,0.2)', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 11, color: '#8B5CF6', fontWeight: 700,
            }}>{i + 1}</div>
            <span style={{ fontSize: 13, color: '#D1D5DB', lineHeight: 1.4 }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
