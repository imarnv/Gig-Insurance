# ⚡ GigShield — India's First Autonomous Income Protection Layer for Gig Workers

> *"We don't wait for you to file a claim. We pay you before the storm arrives."*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built for Guidewire DEVTrails 2026](https://img.shields.io/badge/Guidewire-DEVTrails%202026-blue)](https://www.guidewire.com)
[![Persona: Food Delivery](https://img.shields.io/badge/Persona-Food%20Delivery%20(Zomato%2FSwiggy)-orange)](/)
[![Coverage: Income Loss Only](https://img.shields.io/badge/Coverage-Income%20Loss%20Only-green)](/)
[![Pricing: Weekly](https://img.shields.io/badge/Pricing-Weekly%20Model-purple)](/)

---

## The Crisis Nobody Talks About

India has **15 million+ gig delivery workers**. Every monsoon, every heatwave, every curfew — they lose 20–30% of their monthly income with zero recourse. They don't have sick leave. They don't have credit history. They can't afford insurance. And existing financial products were never designed for someone who earns ₹800 on a Tuesday and ₹300 on a rainy Wednesday.

**GigShield doesn't sell them insurance. It gives them an income floor.**

When a disruption hits Zone 17B in Bengaluru — whether it's a flash flood, a heatwave over 42°C, or a civic curfew — GigShield calculates exactly how much income that specific worker would have earned, runs a fraud check, and initiates a UPI payout. **No claim filed. No app opened. No form filled. Money in 90 seconds.**

---

## What Makes GigShield Different

| Feature | Traditional Insurance App | GigShield |
|---|---|---|
| Claim process | Worker files a form | Zero — fully automated |
| Trigger | City-level weather | 500m² micro-zone risk index |
| Payout amount | Flat rate | Personalized to worker's Earnings DNA |
| Timing | After disruption resolves | Before disruption hits (predictive) |
| Fraud detection | Rule-based | Federated ML across platforms |
| Onboarding | App download required | WhatsApp-native, 3 minutes |
| Premium | Same for all | Hyper-local zone-adjusted |
| Surplus premiums | Insurer profit | Rolls back to community pool |

---

## Core Innovation Pillars

### 🧬 Earnings DNA Engine
Every worker has a unique income fingerprint — average earnings by hour, zone, day-of-week, and season. When a disruption occurs, the payout is calculated against *that worker's specific baseline*, not a generic rate. A senior Swiggy partner who earns ₹1,100/day during peak hours gets a proportionally different payout than a new joiner earning ₹600/day.

**Implementation:** LSTM model trained on synthetic worker income sequences. Input features: hour of day, day of week, delivery zone, historical order density, platform tenure, seasonal index. Output: predicted hourly income rate. Loss = (predicted rate × disrupted hours).

### 🗺️ Micro-Zone Risk Index (MZRI)
Risk is not uniform across a city. Zone 17B in Koramangala floods at 40mm rainfall. Zone 4A in Whitefield survives 80mm. GigShield scores risk at the **500m² delivery zone level** using historical weather events correlated with platform order cancellation data.

**Implementation:** Gradient boosting classifier. Features: zone elevation, historical flood incidents, drainage quality index, avg order drop during past rain events. Output: risk coefficient (0.0–1.0) per zone per disruption type. Premium = base_rate × zone_risk_coefficient.

### 🔮 Predictive Shield Activation
GigShield uses 6-hour weather forecasts (OpenMeteo API, 1km grid) to activate coverage windows *before* disruptions arrive. Workers receive a WhatsApp alert: *"Heavy rain forecast for your zone in 25 minutes. Your shield is active."* This is the defining feature — protection that arrives before the problem.

### 🤖 Zero-Claim Autopilot
The full payout pipeline runs without any human action:

```
Disruption detected (t=0s)
→ Zone + worker match check (t=3s)
→ Fraud score computed (t=12s)
→ Earnings DNA loss calculated (t=18s)
→ UPI payout initiated (t=90s)
→ WhatsApp notification sent
```

### 🕵️ Federated Fraud Detection
GigShield detects GPS spoofing, zone mismatch, and duplicate device claims without requiring platforms to share raw worker data. A shared fraud model is trained across simulated platform datasets using federated learning — anomaly signals stay local, model weights are aggregated globally.

**Fraud signals:** Worker GPS during claimed disruption window, claimed zone vs. historical delivery zone, device fingerprint cross-check, claim-to-disruption time delta, behavioral velocity anomalies.

### 🤝 Community Risk Pool
Premiums for each delivery zone flow into a zone-specific mutual pool. If weekly payouts are below the pool balance, **40% of the surplus is credited back** as a "shield bonus" — reducing the next week's premium for every covered worker in that zone. Unused premium money never disappears. This turns insurance into a cooperative savings layer — a concept deeply aligned with how gig workers already think about money (chit funds, rotating credit circles).

### 💬 WhatsApp-Native Experience
No app download. No Play Store rating. No storage required. The entire worker journey — registration, policy selection, weekly premium payment via UPI payment link, payout notification, coverage status — runs inside WhatsApp Business API. This is the correct choice for a population segment where a new app represents meaningful friction.

### 📊 Dynamic Coverage Ladder

| Tier | Weekly Premium | Income Protection | Triggers Covered |
|---|---|---|---|
| Basic Shield | ₹39 | 4 hours/week | Weather (env.) |
| Standard Shield | ₹79 | 8 hours/week | Weather + Social |
| Pro Shield | ₹129 | 12 hours/week | Weather + Social + Platform outages |

The system recommends the right tier each Sunday based on the upcoming week's weather forecast for the worker's usual delivery zones.

---

## Tech Stack

**Frontend**
- React 18 + TypeScript
- Tailwind CSS + Framer Motion
- Recharts (analytics dashboard)
- PWA-optimized for low-end Android (target: 2GB RAM, 4G connection)

**Backend**
- Node.js + Express (API gateway, auth, routing)
- Python + FastAPI (ML microservices — Earnings DNA, MZRI, Fraud Engine, Premium Calculator)
- Go (high-throughput event processing service)

**AI / ML**
- TensorFlow Lite — Earnings DNA LSTM (income baseline model)
- scikit-learn — Isolation Forest (fraud anomaly detection)
- Prophet — short-term earnings forecasting
- Gradient Boosting (XGBoost) — Micro-Zone Risk Index
- Claude API — WhatsApp conversation handling, natural language claim review

**Data**
- PostgreSQL — workers, policies, payouts, audit log
- TimescaleDB — time-series weather events, earnings events
- Redis — real-time fraud scoring cache, session management
- Apache Kafka — event streaming (disruption events → claim pipeline)

**Integrations**
- OpenMeteo API — hyperlocal weather (1km grid, free tier)
- IMD Nowcast API — India Meteorological Department alerts
- Razorpay test mode — UPI payout simulation
- WhatsApp Business Cloud API — worker communication
- Nominatim — zone geocoding

**Infrastructure**
- Docker + Kubernetes (or Railway/Render for hackathon deployment)
- GitHub Actions — CI/CD
- Prometheus + Grafana — monitoring (admin dashboard)

---

## System Architecture

```
<img width="680" height="520" alt="Image" src="https://github.com/user-attachments/assets/7e967f77-918f-4cca-8012-700a54bb332d" />
┌─────────────────────────────────────────────────────────────────┐
│                        EXPERIENCE LAYER                         │
│  Worker PWA (React)  │  Admin Dashboard  │  WhatsApp Bot        │
└──────────────────────────────┬──────────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────────┐
│              API GATEWAY — Node.js / Express                    │
│     Auth · Rate limiting · JWT · Route dispatch                 │
└──────┬──────────────────┬──────────────────┬────────────────────┘
       │                  │                  │
┌──────▼──────┐  ┌────────▼────────┐  ┌─────▼────────────────────┐
│ Earnings    │  │  Zone Risk      │  │  Fraud Engine            │
│ DNA (LSTM)  │  │  MZRI (XGBoost) │  │  (Isolation Forest)      │
└──────┬──────┘  └────────┬────────┘  └─────┬────────────────────┘
       │                  │                  │
┌──────▼──────────────────▼──────────────────▼────────────────────┐
│                         DATA LAYER                              │
│  TimescaleDB │ PostgreSQL │ Redis │ Kafka │ External APIs       │
└─────────────────────────────────────────────────────────────────┘
```

---

## Demo Flow (For Judges — The Money Moment)

**Act 1: Onboarding (60 seconds)**
Open WhatsApp. Message "Hi" to the GigShield Business number. The bot asks 4 questions: name, city, delivery platform, UPI ID. Policy created. ₹79/week Standard Shield activated. Done. No app downloaded.

**Act 2: The Disruption Trigger (30 seconds)**
Switch to the Admin panel. Navigate to "Simulate Disruption." Select Zone 17B — Koramangala, Bengaluru. Disruption type: Heavy Rain (68mm in 2 hours). Hit trigger.

**Act 3: The Zero-Claim Payout (90 seconds)**
Watch the real-time pipeline in the admin dashboard:
- ✅ Zone disruption confirmed — 47 active workers in zone
- ✅ Fraud check: 44 passed, 3 flagged for review
- ✅ Earnings DNA computed: avg loss ₹312/worker
- ✅ Razorpay test payouts initiated: ₹13,728 total
- 📱 Worker's phone buzzes: *"₹312 credited. Disruption shield active. Stay safe today, Rajan."*

**The line that wins the room:** "We didn't wait for Rajan to file a claim. We didn't wait for him to open an app. We didn't even wait for the storm to stop. The money arrived before he decided to go home."

---

## Weekly Premium Model

GigShield operates on a strict **weekly premium cycle** aligned with gig worker pay cycles.

```
Premium = base_tier_rate × zone_risk_coefficient × (1 - community_surplus_discount)

Example (Standard Shield, Zone 17B):
= ₹79 × 1.18 (high-flood-risk zone) × 0.92 (8% community surplus credit)
= ₹85.75/week → rounded to ₹86/week
```

**Payout calculation:**
```
Payout = earnings_dna_hourly_rate × disrupted_hours × coverage_factor

Example (worker avg ₹130/hr, 2.4hr disruption, Standard Shield 8hr cap):
= ₹130 × 2.4 × 1.0
= ₹312
```

---

## Parametric Triggers

| Trigger | Threshold | Source | Disruption Type |
|---|---|---|---|
| Rainfall intensity | > 50mm/hr | OpenMeteo | Environmental |
| Temperature | > 42°C or < 8°C | OpenMeteo | Environmental |
| AQI | > 300 (hazardous) | CPCB API (mock) | Environmental |
| Flood alert | IMD Red warning | IMD Nowcast | Environmental |
| Curfew / Section 144 | Government alert | Mock civic API | Social |
| Platform outage | Order request drop > 60% | Platform API (mock) | Platform (Pro only) |

---

## Deliverables by Phase

### Phase 1 (Complete)
- [x] Persona defined: Food delivery workers (Zomato/Swiggy), Bengaluru
- [x] Weekly premium model designed
- [x] Parametric triggers identified
- [x] Tech stack finalized
- [x] This README

### Phase 2 (In Progress — due April 4)
- [ ] Worker registration + WhatsApp onboarding
- [ ] Policy creation with dynamic weekly premium
- [ ] OpenMeteo integration + 5 automated disruption triggers
- [ ] Earnings DNA model (synthetic data training)
- [ ] Zero-touch claim pipeline (end-to-end)
- [ ] Razorpay test payout integration
- [ ] Worker dashboard + Admin trigger panel

### Phase 3 (April 5–17)
- [ ] Federated fraud detection with GPS spoofing detection
- [ ] Community Risk Pool with surplus rollover
- [ ] Predictive Shield — 6-hour forecast pre-activation
- [ ] Insurer analytics dashboard (loss ratios, next-week risk forecast)
- [ ] 5-minute demo video
- [ ] Final pitch deck

---

## What We're Not Building

Per the competition rules and our product philosophy, GigShield **explicitly excludes**:

- ❌ Health or life insurance
- ❌ Accident or injury coverage
- ❌ Vehicle repair payouts
- ❌ Medical bill reimbursement

We cover one thing and we cover it brilliantly: **the income a worker loses when external forces beyond their control prevent them from working.**

---

## Future Scope

**Earned Wage Integration:** Partner with Zomato/Swiggy to use actual platform earnings data (with consent) for Earnings DNA training, eliminating the need for synthetic data entirely.

**Multi-platform Worker Profiles:** A worker who delivers for both Swiggy and Zepto can have a unified GigShield profile that aggregates income across platforms for a more accurate baseline.

**Micro-Loan Bridge:** When a disruption exceeds coverage, GigShield can offer a short-term advance against next week's expected earnings — repaid automatically from the next premium cycle.

**Employer-Sponsored Tier:** Zomato/Swiggy pay 50% of the premium as a worker retention benefit — GigShield becomes a B2B2C product with guaranteed acquisition at platform scale.

**Regional Expansion:** The MZRI model and parametric trigger framework are generalization-ready. Same architecture works for auto-rickshaw drivers in Chennai, street vendors in Delhi, or fishermen in Kerala.

---

## Team

Built for Guidewire DEVTrails 2026 University Hackathon.

> *"The gig economy gave 15 million Indians a livelihood. GigShield makes sure external forces can never take it away."*

---

*Coverage: Income loss only. Pricing: Weekly. Built with care for the people who deliver our world.*
