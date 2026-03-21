import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, MapPin, Briefcase, Clock, ChevronRight, Check } from 'lucide-react'
import { cities, platforms, workerTiers } from '../data/mockData'

const steps = ['Personal Info', 'Work Details', 'Coverage Plan']

export default function Onboarding({ onComplete }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '', phone: '', city: '', platform: '', tier: '', aadhaar: '',
  })

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const selectedCity = cities.find(c => c.id === form.city)
  const selectedTier = workerTiers.find(t => t.id === form.tier)
  const premium = selectedCity && selectedTier
    ? Math.round(selectedCity.basePremium * selectedTier.factor)
    : null

  const canNext = step === 0
    ? form.name && form.phone
    : step === 1
      ? form.city && form.platform && form.tier
      : true

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      onComplete?.({
        ...form,
        cityName: selectedCity?.name,
        tierLabel: selectedTier?.label,
        premium,
      })
      navigate('/dashboard')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: 12,
    border: '1px solid #2D2D4A', background: '#1A1A2E',
    color: 'white', fontSize: 15,
  }

  const selectStyle = {
    ...inputStyle, appearance: 'none',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%239CA3AF' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center',
  }

  return (
    <div style={{
      minHeight: '100vh', padding: '24px 20px',
      background: 'linear-gradient(180deg, #130a2e 0%, #0F0F1A 30%)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 12,
          background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Shield size={22} color="white" />
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>SurakshaPay</div>
          <div style={{ fontSize: 12, color: '#9CA3AF' }}>Quick Setup</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {steps.map((s, i) => (
          <div key={s} style={{ flex: 1 }}>
            <div style={{
              height: 4, borderRadius: 2,
              background: i <= step ? 'linear-gradient(135deg, #6C3CE1, #3B82F6)' : '#2D2D4A',
              transition: 'all 0.3s',
            }} />
            <div style={{
              fontSize: 11, color: i <= step ? '#8B5CF6' : '#6B7280',
              marginTop: 6, fontWeight: i === step ? 600 : 400,
            }}>{s}</div>
          </div>
        ))}
      </div>

      <div style={{ animation: 'fadeIn 0.4s ease-out' }} key={step}>
        {step === 0 && (
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Welcome aboard!</h2>
            <p style={{ color: '#9CA3AF', marginBottom: 28, fontSize: 14 }}>
              Let us set up your income protection in under 2 minutes
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6, display: 'block' }}>Full Name</label>
                <input style={inputStyle} placeholder="Enter your full name" value={form.name} onChange={e => update('name', e.target.value)} />
              </div>
              <div>
                <label style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6, display: 'block' }}>Phone Number</label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF', fontSize: 15 }}>+91</span>
                  <input style={{ ...inputStyle, paddingLeft: 52 }} placeholder="Enter mobile number" value={form.phone} onChange={e => update('phone', e.target.value)} type="tel" maxLength={10} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6, display: 'block' }}>Aadhaar Number (optional)</label>
                <input style={inputStyle} placeholder="XXXX XXXX XXXX" value={form.aadhaar} onChange={e => update('aadhaar', e.target.value)} maxLength={14} />
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Work Details</h2>
            <p style={{ color: '#9CA3AF', marginBottom: 28, fontSize: 14 }}>This helps us calculate your personalized risk profile</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6, display: 'block' }}>City</label>
                <select style={selectStyle} value={form.city} onChange={e => update('city', e.target.value)}>
                  <option value="">Select your city</option>
                  {cities.map(c => (<option key={c.id} value={c.id}>{c.name} (Tier {c.tier})</option>))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6, display: 'block' }}>Delivery Platform</label>
                <select style={selectStyle} value={form.platform} onChange={e => update('platform', e.target.value)}>
                  <option value="">Select platform</option>
                  {platforms.map(p => (<option key={p} value={p}>{p}</option>))}
                </select>
              </div>
              <div>
                <label style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 6, display: 'block' }}>Weekly Working Hours</label>
                {workerTiers.map(t => (
                  <button key={t.id} onClick={() => update('tier', t.id)} style={{
                    width: '100%', padding: '12px 16px', marginBottom: 8, borderRadius: 12,
                    border: `1px solid ${form.tier === t.id ? '#6C3CE1' : '#2D2D4A'}`,
                    background: form.tier === t.id ? 'rgba(108,60,225,0.15)' : '#1A1A2E',
                    color: 'white', textAlign: 'left', fontSize: 14,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'all 0.2s',
                  }}>
                    <span>{t.label}</span>
                    {form.tier === t.id && <Check size={18} color="#8B5CF6" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Your Coverage Plan</h2>
            <p style={{ color: '#9CA3AF', marginBottom: 28, fontSize: 14 }}>AI-calculated based on your city risk profile</p>

            <div style={{
              background: 'linear-gradient(135deg, #6C3CE1, #3B82F6)',
              borderRadius: 20, padding: '24px 20px', marginBottom: 20,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
              <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>Weekly Premium</div>
              <div style={{ fontSize: 42, fontWeight: 800 }}>
                {'\u20B9'}{premium || '---'}
                <span style={{ fontSize: 16, fontWeight: 400, opacity: 0.8 }}>/week</span>
              </div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>
                {selectedCity?.name} | Tier {selectedCity?.tier} | {selectedTier?.label?.split('(')[0]}
              </div>
            </div>

            <div style={{ background: '#1A1A2E', borderRadius: 16, padding: 20, border: '1px solid #2D2D4A', marginBottom: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Premium Breakdown</div>
              {[
                { label: 'Base Premium', value: `\u20B9${selectedCity?.basePremium || 0}` },
                { label: `Tier Factor (${selectedTier?.factor || 1}x)`, value: `x${selectedTier?.factor || 1}` },
                { label: 'Risk Premium (Season)', value: '\u20B960' },
                { label: 'Optional Riders', value: '\u20B90' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #2D2D4A', fontSize: 13, color: '#D1D5DB' }}>
                  <span>{item.label}</span>
                  <span style={{ fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0 0', fontSize: 15, fontWeight: 700, color: '#8B5CF6' }}>
                <span>Total Weekly</span>
                <span>{'\u20B9'}{premium ? premium + 60 : '---'}</span>
              </div>
            </div>

            <div style={{ background: '#1A1A2E', borderRadius: 16, padding: 20, border: '1px solid #2D2D4A' }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>What is Covered</div>
              {['Heat Wave', 'Severe AQI', 'Water Logging', 'Traffic Gridlock', 'Cyclone Alert', 'App Crash', 'Curfew/Bandh'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 13, color: '#D1D5DB' }}>
                  <Check size={16} color="#10B981" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 32 }}>
        <button onClick={handleNext} disabled={!canNext} style={{
          background: canNext ? 'linear-gradient(135deg, #6C3CE1, #3B82F6)' : '#2D2D4A',
          color: canNext ? 'white' : '#6B7280', border: 'none', borderRadius: 16,
          padding: '16px 24px', fontSize: 16, fontWeight: 700, width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: canNext ? '0 8px 32px rgba(108,60,225,0.3)' : 'none', transition: 'all 0.3s',
        }}>
          {step === 2 ? 'Activate Protection' : 'Continue'}
          <ChevronRight size={20} />
        </button>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)} style={{ background: 'none', color: '#9CA3AF', fontSize: 14, marginTop: 12, width: '100%', padding: 8 }}>
            Back
          </button>
        )}
      </div>
    </div>
  )
}
