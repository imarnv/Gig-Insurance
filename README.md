# 🚨 The Crisis Nobody Talks About

India has **15 million+ gig delivery workers** — the invisible engine behind every “10-minute delivery” promise.

But when the rain doesn’t stop, when the heat crosses 42°C, or when a sudden curfew shuts down entire zones — their income disappears instantly. Not reduced. Not delayed. **Gone.**

Every month, they lose **20–30% of their earnings** to factors they cannot control.

They don’t have sick leave.
They don’t have financial buffers.
They don’t have insurance that understands how they live.

Because traditional financial systems were never built for someone who earns ₹800 on a good day… and ₹0 on a bad one.

---

# 💡 Introducing **SurakshaPay**

SurakshaPay doesn’t sell insurance.
**It guarantees an income floor.**

When a disruption hits — a flooded street, extreme heatwave, polluted air, or a sudden zone shutdown — SurakshaPay automatically calculates how much income a worker has lost.

It verifies the event.
It runs fraud checks.
And it pays — instantly.

No claim filed.
No waiting.
No paperwork.

Just money in their account when they need it the most.

---

# 🔖 Project Overview

## **SurakshaPay – AI-Powered Income Protection for Gig Workers**

SurakshaPay is an AI-driven parametric insurance platform designed to protect gig delivery workers from income loss caused by external disruptions. It focuses on workers with unpredictable earnings and no financial safety net.

The platform uses **AI-based risk assessment and real-time parametric triggers** (weather, pollution, curfews) to detect income disruption and automatically initiate payouts — ensuring fast, reliable, and seamless protection.

---

# ❗ Problem Statement

Gig delivery workers frequently lose income due to external disruptions such as heavy rainfall, extreme heat, pollution spikes, and sudden curfews. These events directly reduce their working hours, leading to **20–30% loss in monthly income**.

Currently, there is **no income protection system** designed for gig workers. Traditional insurance products fail to accommodate their irregular earning patterns. As a result, workers bear the full financial impact of disruptions, making their income highly unstable.

---

# 👤 Persona Definition

### **Persona: Food Delivery Partner**

* **Type:** Food Delivery (Zomato/Swiggy)
* **Daily Routine:** Works 8–10 hours/day, mainly during lunch and dinner peak hours
* **Weekly Earnings:** ₹4,000 – ₹8,000
* **Dependency:** Highly dependent on weather conditions, traffic, and platform uptime

### **Pain Points:**

* Unable to work during heavy rain, extreme heat, or high pollution
* Earnings directly linked to active working hours
* No backup income during forced downtime
* Weekly earning cycle makes losses immediately impactful

### **Scenario:**

A delivery partner plans to work 8 hours, but due to heavy rainfall, they can only work 4 hours. This results in a direct loss of approximately **₹400–₹600 for that day**, significantly affecting their weekly income.

---

# 💡 Our Solution

**SurakshaPay** is an AI-powered, parametric insurance platform designed for gig workers (delivery partners, drivers, etc.) that automatically compensates them when their income is disrupted by real-world events—without requiring them to file any claims.

Instead of relying on manual claim processes, the system continuously monitors external signals such as weather conditions, traffic congestion, air quality, platform outages, and civic events. When a disruption is detected in a worker’s location, the system automatically evaluates its impact on earning potential.

Using AI, SurakshaPay estimates how much the worker would have earned during that disrupted time based on their past behavior, working hours, location, and demand patterns. It then calculates the income loss and triggers an instant payout directly to the worker.

The entire flow is fully automated:

* Detect disruption
* Match affected workers
* Estimate income loss
* Validate authenticity (fraud checks)
* Execute payout

This creates a **zero-claim, real-time insurance system** that is fast, transparent, and tailored to gig workers’ dynamic earning patterns.

---

# 🔄 End-to-End System Workflow

SurakshaPay operates as a fully automated, event-driven system that continuously monitors disruptions, evaluates impact, and executes payouts in real time. The workflow is optimized into **9 core stages** while preserving the complete system logic.

<img width="1536" height="864" alt="WORKFLOW" src="https://github.com/user-attachments/assets/c381ea37-b064-4385-9721-1b63fdc87e42" />

---

## **1. User Onboarding**

The worker registers via a **WhatsApp-based interface or web platform** and provides essential details required for personalization.

**User Inputs:**

* Location (GPS → mapped to micro-zone)
* Work schedule (active hours and days)
* Historical earning estimate

**System Actions:**

* Assigns a unique **zone_id**
* Initializes the **worker profile**
* Starts collecting behavioral and activity signals

---

## **2. Policy Setup (Risk Profiling + Creation)**

The system evaluates risk and immediately converts it into an active policy.

**Data Sources:**

* Historical disruption patterns
* Zone-level risk metrics
* Temporal demand/activity trends

**AI/ML Processing:**

* Computes **Zone Risk Coefficient**
* Estimates **Expected Disruption Probability**

**System Actions:**

* Calculates personalized **weekly premium**
* Recommends **coverage tier**
* Stores policy with:

  * `worker_id`
  * `zone_id`
  * Coverage window

👉 Policy is **activated instantly**

---

## **3. Continuous Real-Time Monitoring (Core Engine)**

A **24/7 monitoring pipeline** continuously tracks external signals.

**Data Pipeline:**

* Multiple external streams ingested in real time
* Events pushed into **message broker (Kafka / RabbitMQ)**

**Processing Flow:**

```text
Raw Data → Stream Processing → Feature Extraction → Evaluation
```

**Signal Processing Includes:**

* Time normalization
* Geo-mapping to zones
* Dynamic threshold evaluation

---

## **4. Trigger Detection & Event Generation**

When disruption conditions are met, the system creates a structured event.

**Disruption Event Object:**

```json
{
  "zone_id": "...",
  "start_time": "...",
  "severity": "...",
  "disruption_type": "..."
}
```

👉 Event is pushed into the **event queue** for downstream processing

---

## **5. Worker Matching Engine**

The system identifies all workers impacted by the disruption.

**Filtering Criteria:**

* Active policy
* Located in affected zone
* Within working hours
* Coverage eligibility

**Output:**

* List of **impacted workers**

---

## **6. Fraud Detection Layer**

Each worker is validated before payout approval.

**Validation Checks:**

* Location consistency (GPS vs zone)
* Activity behavior patterns
* Device integrity

**Processing:**

```text
Fraud Score → Range (0 to 1)
```

👉 If score exceeds threshold → payout is **blocked or flagged**

---

## **7. AI Payout Calculation (Earnings Engine)**

The system calculates income loss using personalized models.

**Inputs:**

* Worker’s **Earnings DNA profile**
* Disruption duration
* Severity factor

**Computation:**

```text
Payout = Predicted Hourly Earnings × Duration × Severity
```

**Output:**

* Final **payout amount**

---

## **8. Payment Execution**

The system initiates payout automatically.

**Process:**

* Generates payout request
* Sends to **UPI / Payment Gateway (sandbox)**

**Tracking:**

* Transaction status
* Retry mechanism for failures

---

## **9. Notification & Feedback Loop**

The worker is notified and the system learns from every event.

**User Notifications:**

* Payout confirmation
* Disruption summary
* Remaining coverage

**Channels:**

* WhatsApp API (primary)
* SMS (fallback)

**System Logging:**

* Trigger accuracy
* Fraud outcomes
* Payout metrics

**Feedback Loop:**

* Data fed back into ML models
* Continuous improvement in:

  * Prediction accuracy
  * Risk scoring
  * Pricing

---

## ⚡ Workflow Summary

```text
User → Policy → Monitoring → Trigger → Match → Fraud Check → AI Payout → Payment → Notification
```

---

# System Architecture

<img width="1024" height="1536" alt="image" src="https://github.com/user-attachments/assets/0d549b3f-787d-4f0b-abfe-bab0fb36a55e" />

# Parametric Triggers (Core Innovation)

| #  | Trigger                                | Description                                                                                                                                     | Activation Conditions                                                                                                                                                                                                                                                                                                                                                                   | Payout                                                                                     | Premium Model                                                                                                                                                 | Sustainability                                                                                                                                                                                  |
| -- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | Heat Wave                              | Ambient temperature exceeds 43°C, making outdoor two-wheeler riding hazardous due to risk of heat exhaustion, dehydration, and heat stroke.     | Data Source: IMD city/zone temperature<br>Threshold: Temp > 43°C for ≥3 consecutive hours between 11:00 AM and 5:00 PM<br>Geographic: All cities with summer temps >40°C (Delhi, Rajasthan, MP, Maharashtra, Telangana, etc.)                                                                                                                                                           | ₹100 per hour for hours exceeding 43°C, capped at ₹500/day                                 | Seasonal rider (April–July) at ₹50–80/week during summer months only                                                                                          | High frequency (30–60 days/year in some cities) requires caps. Workers value safety protection. Insurer profitability via seasonal pricing and daily/hourly caps.                               |
| 2  | Cyclone Alerts                         | IMD issues official warning of cyclonic storm, making deliveries life-threatening due to high winds, torrential rain, and flooding.             | Data Source: IMD Red (Cyclone Alert) or Orange (Cyclone Watch) warnings<br>Threshold: Warning issued for worker's district; payout triggered for duration of warning + 24 hours post-warning<br>Geographic: Coastal states (Odisha, West Bengal, Andhra, Tamil Nadu, Maharashtra, Gujarat, Kerala)                                                                                      | Flat ₹500 per Red warning, ₹250 per Orange warning (per 24-hour period)                    | Included in base weekly premium (₹150–250/week) year-round; no seasonal upcharge                                                                              | Low frequency (1–3 events/year per region). High severity, low payout probability ensures profitability. Safety messaging builds trust.                                                         |
| 3  | Water Logging                          | Flooded roads or water accumulation prevents two-wheeler movement in a specific zone, making deliveries impossible despite worker availability. | Data Source: Municipal IoT sensors OR validated crowdsourcing (5+ independent worker reports in zone) + satellite flood mapping<br>Threshold: Water depth >6 inches on >30% of major roads in zone for ≥2 hours<br>Geographic: Flood-prone cities (Mumbai, Chennai, Kolkata, Bangalore, Hyderabad) during monsoon                                                                       | ₹300 per zone per day, capped at 2 zones/day                                               | Monsoon-only rider (June–September) at ₹80–120/week                                                                                                           | Medium frequency (10–20 days/year in flood-prone zones). Requires robust verification to prevent false claims. Higher premium during monsoon ensures profitability.                             |
| 4  | Dense Fog                              | Visibility drops below 100 meters, making early morning and night riding extremely dangerous with high accident risk.                           | Data Source: IMD visibility sensors, airport METAR data, highway monitoring stations<br>Threshold: Visibility <100m for ≥3 consecutive hours between 5:00 AM–10:00 AM OR 6:00 PM–10:00 PM<br>Geographic: Northern India (Delhi NCR, Punjab, Haryana, UP, Bihar, West Bengal) during winter                                                                                              | ₹150 per fog event (per 3-hour block), maximum 2 events/day                                | Winter-only rider (December–January) at ₹60–100/week                                                                                                          | Medium frequency (15–25 days/year in affected regions). Caps prevent excessive payouts. Seasonal pricing aligns premium with risk.                                                              |
| 5  | Dust Storms                            | Sudden dust storms with high winds and zero visibility halt deliveries for short but acute periods.                                             | Data Source: IMD dust storm warning + wind speed data<br>Threshold: Wind speed >50 km/h + visibility <500m for ≥30 minutes<br>Geographic: Rajasthan, Delhi NCR, Gujarat, Maharashtra (April–June)                                                                                                                                                                                       | ₹150 per event (automatic for any verified dust storm lasting >30 min)                     | Included in base premium or bundled with Heat Wave seasonal rider                                                                                             | Low-medium frequency (5–10 events/year in affected regions). Short duration means capped payout exposure.                                                                                       |
| 6  | Hailstorm                              | Hail causes physical injury risk, vehicle damage, and slippery roads, making riding unsafe.                                                     | Data Source: IMD hailstorm warning + radar confirmation<br>Threshold: Warning issued for worker's zone; payout for duration of warning<br>Geographic: Regional add-on for Maharashtra, MP, Northeast, Himalayan foothills                                                                                                                                                               | ₹250 per hailstorm event (per 24-hour period)                                              | Optional regional rider at ₹40–60/week during hail-prone months (winter, pre-monsoon)                                                                         | Very low frequency (1–3 events/year). High perceived value due to vehicle damage risk. Optional rider transfers choice to worker.                                                               |
| 7  | Cold Wave                              | Extreme cold temperatures (or snowfall) make riding hazardous, particularly in Himalayan regions and high-altitude areas.                       | Data Source: IMD cold wave declaration OR temperature <5°C in plains / <0°C in hills<br>Threshold: IMD cold wave criteria met for ≥2 consecutive days OR snowfall >2 inches in 24 hours<br>Geographic: Himalayan states (J&K, HP, Uttarakhand), Northeast, occasionally North Indian plains                                                                                             | ₹200 per cold wave day, maximum ₹1000/week                                                 | Optional winter rider (December–February) at ₹50–80/week in affected regions                                                                                  | Low frequency (5–10 days/year in Himalayan regions). Optional rider ensures only those needing coverage purchase it.                                                                            |
| 8  | Severe AQI                             | Air Quality Index reaches hazardous levels, causing respiratory distress and long-term health damage from prolonged outdoor exposure.           | Data Source: CPCB real-time AQI data<br>Threshold: AQI >350 for ≥6 consecutive hours OR 48-hour rolling average >350<br>Geographic: North India (Delhi NCR, Lucknow, Patna), seasonal in Mumbai, Kolkata                                                                                                                                                                                | ₹200 per day when AQI >350, ₹400 per day when AQI >450 (Severe+), capped at 20 days/season | Winter-only rider (October–January) at ₹150–250/week; includes deductible (first 3 days of high AQI not covered to reduce moral hazard)                       | High frequency (40–60 days/season in Delhi) requires deductibles and caps. Workers highly value this due to visible health impact.                                                              |
| 9  | Major Traffic Gridlock                 | Extreme traffic congestion reduces delivery capacity by 50-70%, making earnings collapse despite active work.                                   | Data Source: Google Maps API / TomTom traffic data (speed by zone)<br>Threshold: Avg speed <5 km/h in zone for ≥2 consecutive hours during peak delivery hours (12:00 PM–3:00 PM, 7:00 PM–10:00 PM)<br>Geographic: Metro cities (Bangalore, Mumbai, Delhi NCR, Pune, Hyderabad, Kolkata)                                                                                                | ₹100 per hour for hours spent in gridlock, maximum ₹400/day                                | Included in base premium for metro cities; higher base premium in gridlock-prone cities (Bangalore, Mumbai at ₹200–300/week vs. ₹150/week elsewhere)          | Medium-high frequency (30–60 days/year in Bangalore/Mumbai). Higher premiums in affected cities cross-subsidize frequent payouts. Workers value because gridlock is their #1 daily frustration. |
| 10 | Power Outage                           | Prolonged power cuts prevent restaurants from operating, leaving workers with no orders despite being online.                                   | Data Source: Utility outage APIs OR validated crowdsourcing (5+ restaurant reports in zone) + platform order data<br>Threshold: >30% of restaurants in zone without power for ≥2 hours<br>Geographic: Power-unreliable cities (UP, Bihar, Jharkhand, parts of MP, Odisha)                                                                                                               | ₹250 per outage event (per 2-hour block), maximum ₹500/day                                 | Regional rider at ₹60–100/week in power-unstable districts; requires deductible (first 2 hours of any outage not covered)                                     | Medium-high frequency in affected regions. Verification infrastructure required to avoid false claims. Deductible ensures only significant disruptions trigger payout.                          |
| 11 | App Server Crash                       | Platform downtime prevents all workers in a city from accepting orders, completing deliveries, or receiving payments.                           | Data Source: Platform status page (Zomato/Swiggy), API health checks, or public announcements<br>Threshold: Confirmed platform downtime ≥15 minutes during peak hours OR ≥30 minutes during non-peak<br>Geographic: National (city-specific if crash is localized)                                                                                                                      | ₹300 per crash event (flat), ₹500 if crash exceeds 2 hours                                 | Included in base premium (₹150–250/week). No separate rider.                                                                                                  | Very low frequency (2–5 events/year). High marketing value; workers share payout screenshots virally. Payout cost easily absorbed by premium pool.                                              |
| 12 | Sudden Curfew                          | Government imposes Section 144 or curfew, prohibiting movement and completely halting delivery operations.                                      | Data Source: Govt notifications, police announcements, news API (GDELT, NewsAPI)<br>Threshold: Curfew declared in worker's district for ≥4 hours; payout for full curfew duration<br>Geographic: National (varies by state; more frequent in J&K, UP, West Bengal, Northeast)                                                                                                           | ₹150 per 4-hour block of curfew, maximum ₹600/day                                          | Included in base premium; higher base premium in higher-risk states (J&K, West Bengal, UP) at ₹200–300/week                                                   | Low-medium frequency (3–10 events/year in higher-risk states). Geographic risk-based pricing ensures profitability.                                                                             |
| 13 | Local Strikes (Bandh)                  | General strike called by political parties or unions shuts down restaurants, transport, and creates unsafe conditions for deliveries.           | Data Source: News API, police advisories, official bandh declarations<br>Threshold: Confirmed bandh in district for ≥4 hours; payout for duration of bandh<br>Geographic: National (highest frequency in West Bengal, Bihar, Karnataka, Kerala, Tamil Nadu)                                                                                                                             | ₹150 per 4-hour block of bandh, maximum ₹600/day                                           | Included in base premium; higher base premium in high-bandh-frequency states (West Bengal, Bihar) at ₹200–300/week                                            | Medium frequency (5–15 events/year in high-frequency states). Regional pricing ensures fair cross-subsidization.                                                                                |
| 14 | Police Blockades                       | Law enforcement road closures, checkpoints, or barricades block access to delivery zones, preventing order completion.                          | Data Source: Police Twitter handles, traffic management apps (e.g., Bangalore Traffic Police), news API<br>Threshold: Official blockade notification affecting ≥1 zone for ≥2 hours<br>Geographic: National (frequent in Bangalore, Mumbai, Delhi during VIP movements, festivals)                                                                                                      | ₹200 per blockade event (per 2-hour block), maximum ₹400/day                               | Included in base premium for metro cities; no separate rider                                                                                                  | Low-medium frequency (5–15 events/year in major metros). Payload capped to limit exposure.                                                                                                      |
| 15 | Supply Chain Breakdown                 | Restaurant supply chains disrupted (truckers' strike, fuel shortage, commodity crisis), causing mass restaurant closure.                        | Data Source: NRAI announcements, media reports, government notifications<br>Threshold: Confirmed disruption affecting >30% of restaurants in city for ≥24 hours<br>Geographic: National (rare but severe events)                                                                                                                                                                        | ₹300 per day of breakdown, maximum ₹1500 per event                                         | Included in base premium; treated as catastrophic event with annual aggregate cap (e.g., ₹50 lakh total payouts per city)                                     | Very low frequency (0–2 events/year nationally). High payout per event but rare. Aggregate cap protects insurer from unlimited exposure.                                                        |
| 16 | Mass Restaurant Closure                | Sudden closure of a significant percentage of restaurants in a zone due to local labor disputes, health inspections, or unexpected events.      | Data Source: Platform API (restaurant open/closed status), web scraping, OR validated crowdsourcing (10+ worker reports)<br>Threshold: >30% of normally-open restaurants in zone closed for ≥2 hours<br>Geographic: National (frequent in restaurant-dense urban zones)                                                                                                                 | ₹250 per zone per day, maximum ₹500/day across zones                                       | Included in base premium for urban zones; requires verification layer to prevent false claims                                                                 | Medium frequency. Verification cost significant; crowdsourced validation reduces fraud but adds operational expense.                                                                            |
| 17 | Demand Collapse                        | Order volume drops unexpectedly below expected levels, reducing earnings despite worker availability.                                           | Data Source: Platform API (real-time order volume vs. historical baseline)<br>Threshold: Actual orders <40% of expected for ≥2 hours; requires platform partnership<br>Geographic: National (requires per-zone historical data)                                                                                                                                                         | ₹100 per hour of collapse, maximum ₹400/day                                                | Only available with platform API partnership; premium shared with platform (B2B model). Worker pays reduced premium (₹50–100/week) with platform subsidizing. | Medium-high frequency (10–30 days/year). Platform partnership essential for data access and fraud prevention. Platform subsidy makes it viable.                                                 |
| 18 | Delivery Dead Zone                     | Individual worker receives zero orders while active, despite nearby workers receiving orders normally.                                          | Data Source: Platform API (worker allocation rate vs. nearby worker average)<br>Threshold: Worker receives 0 orders for ≥60 minutes while online, AND nearby workers (2km radius) avg >2 orders in same period<br>Geographic: National (requires platform data sharing)                                                                                                                 | ₹150 per dead zone event (per hour), maximum ₹450/day                                      | Only available with platform API partnership; algorithm must validate worker was active and not at fault. Platform may subsidize to improve worker retention. | Low-medium frequency but high fraud potential. Platform data essential to distinguish genuine algorithm issues from worker inactivity.                                                          |
| 19 | Late-Night Restaurant Cluster Shutdown | Critical mass of night-time restaurants close unexpectedly, making night shift deliveries impossible despite worker availability.               | Data Source: Platform API, web scraping, OR validated crowdsourcing (5+ worker reports of restaurant closures in zone)<br>Threshold: >40% of normally-open night restaurants (24/7 or open past 1 AM) in 3km zone closed for ≥60 minutes between 11:00 PM–4:00 AM<br>Geographic: Urban centers with significant night delivery (Bangalore, Mumbai, Delhi NCR, Pune, Hyderabad, Kolkata) | ₹150 per hour of shutdown (per zone), maximum ₹450/night                                   | Optional night-shift rider at ₹80–120/week; OR included in base premium with higher rate for workers who primarily work nights (segmented pricing)            | Medium frequency (10–20 nights/year in major cities). Night workers pay higher premium or opt-in to rider, ensuring profitability. Verification via crowdsourcing reduces platform dependency.  |

---

# Weekly Premium & Payout Model

Below is a comprehensive weekly insurance model with formulas, pricing structures, and payout calculations for all 19 triggers. The model is designed to be **actuarially sound**, **transparent for workers**, and **operationally scalable**.

---

## Part 1: Core Architecture

### 1.1 Base Components

| Component                       | Description                                                             | Formula Variable                             |
| ------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| **Base Premium (BP)**           | Fixed weekly cost covering low-frequency, high-severity triggers        | `BP = City Risk Factor × Worker Tier Factor` |
| **Risk Premium (RP)**           | Variable cost for high-frequency triggers based on season and geography | `RP = Σ (Seasonal Trigger Premiums)`         |
| **Optional Rider Premium (OR)** | Additional cost for region-specific or night-specific coverage          | `OR = Σ (Rider Premiums selected by worker)` |
| **Total Weekly Premium (TWP)**  | Sum of all premium components                                           | `TWP = BP + RP + OR`                         |

### 1.2 Payout Structure

| Payout Type            | Description                                                      | Formula                                      |
| ---------------------- | ---------------------------------------------------------------- | -------------------------------------------- |
| **Flat Payout (FP)**   | Fixed amount per qualifying event                                | `FP = Base Amount × Severity Multiplier`     |
| **Hourly Payout (HP)** | Accumulated based on duration of disruption                      | `HP = Hourly Rate × Hours Affected (capped)` |
| **Daily Cap (DC)**     | Maximum payout per day across all triggers                       | `DC = ₹500–800 depending on city tier`       |
| **Weekly Cap (WC)**    | Maximum payout per week to prevent catastrophic exposure         | `WC = ₹2,500–4,000 depending on plan`        |
| **Seasonal Cap (SC)**  | Maximum payout per season for seasonal triggers (AQI, Heat Wave) | `SC = ₹5,000–8,000 per season`               |

---

## Part 2: City Risk Classification

All cities are classified into **Tiers** based on risk frequency, infrastructure stability, and historical disruption data.

| Tier       | Cities                                 | Risk Profile                                             | Base Premium (BP) | Daily Payout Cap | Weekly Payout Cap |
| ---------- | -------------------------------------- | -------------------------------------------------------- | ----------------- | ---------------- | ----------------- |
| **Tier 1** | Bangalore, Mumbai, Delhi NCR           | High traffic gridlock, moderate weather, frequent bandhs | ₹250/week         | ₹800/day         | ₹4,000/week       |
| **Tier 2** | Pune, Hyderabad, Chennai, Kolkata      | Moderate traffic, seasonal weather, occasional bandhs    | ₹200/week         | ₹700/day         | ₹3,500/week       |
| **Tier 3** | Ahmedabad, Lucknow, Jaipur, Chandigarh | Lower traffic, seasonal weather extremes (heat/AQI)      | ₹150/week         | ₹600/day         | ₹3,000/week       |
| **Tier 4** | Other cities (Patna, Bhopal, etc.)     | Variable weather, lower traffic density                  | ₹120/week         | ₹500/day         | ₹2,500/week       |

---

## Part 3: Worker Segmentation & Tier Factor

Workers are classified based on **active hours** to ensure fair premium allocation.

| Worker Tier    | Weekly Active Hours | Tier Factor | Adjustment                                      |
| -------------- | ------------------- | ----------- | ----------------------------------------------- |
| **Full-Time**  | >40 hours           | 1.2x        | Higher premium, higher payout caps              |
| **Standard**   | 20–40 hours         | 1.0x        | Base premium                                    |
| **Part-Time**  | 10–20 hours         | 0.8x        | Lower premium, proportionally lower payout caps |
| **Occasional** | <10 hours           | 0.6x        | Minimum coverage, lower caps                    |

**Base Premium Formula:**

```
BP = City Base Premium × Worker Tier Factor

Example:
- Tier 1 City + Full-Time Worker = ₹250 × 1.2 = ₹300/week
- Tier 3 City + Part-Time Worker = ₹150 × 0.8 = ₹120/week
```

---

## Part 4: Seasonal & Regional Risk Premiums (RP)

These are automatically added based on **current season** and **worker's city**—no worker opt-in required.

### 4.1 Weather Seasonals

| Trigger                 | Season           | Affected Cities                                   | Weekly Premium Add-on                 |
| ----------------------- | ---------------- | ------------------------------------------------- | ------------------------------------- |
| Heat Wave               | April–July       | Tier 1,2,3 (North/West/Central)                   | ₹60/week                              |
| Severe AQI              | October–January  | Tier 1,2 (Delhi NCR, Lucknow, Patna)              | ₹100/week                             |
| Dense Fog               | December–January | Tier 1,2 (North India)                            | ₹40/week                              |
| Cyclone                 | June–November    | Coastal Tier 2,3 (Chennai, Mumbai, Kolkata, etc.) | ₹30/week (included in BP for coastal) |
| Monsoon (Water Logging) | June–September   | Tier 1,2 (Mumbai, Chennai, Kolkata, Bangalore)    | ₹50/week                              |

### 4.2 Traffic & Infrastructure

| Trigger                | Geography                                    | Weekly Premium Add-on             |
| ---------------------- | -------------------------------------------- | --------------------------------- |
| Major Traffic Gridlock | Tier 1 cities (Bangalore, Mumbai, Delhi NCR) | Included in BP (already factored) |
| Police Blockades       | Tier 1,2 cities                              | Included in BP                    |

### 4.3 Social & Civic

| Trigger               | High-Risk States                                  | Weekly Premium Add-on                      |
| --------------------- | ------------------------------------------------- | ------------------------------------------ |
| Local Strikes (Bandh) | West Bengal, Bihar, Karnataka, Kerala, Tamil Nadu | ₹30/week (included in BP for these states) |
| Sudden Curfew         | J&K, UP, West Bengal, Northeast                   | ₹40/week (included in BP for these states) |

**Total Risk Premium Formula:**

```
RP = Σ (Seasonal Trigger Premiums active for worker's city and current month)

Example (Delhi NCR, April):
- Heat Wave: ₹60
- Severe AQI: not active (season ends Jan)
- Dense Fog: not active
- Monsoon: not active
Total RP = ₹60/week

Example (Bangalore, July):
- Heat Wave: not active (Bangalore rarely >43°C)
- Monsoon (Water Logging): ₹50
Total RP = ₹50/week
```

---

## Part 5: Optional Riders (OR)

Workers **opt in** to these based on their specific needs and geography.

| Rider                  | Trigger                        | Geography                        | Weekly Premium      | Activation                                        |
| ---------------------- | ------------------------------ | -------------------------------- | ------------------- | ------------------------------------------------- |
| **Hailstorm Rider**    | Hailstorm                      | Maharashtra, MP, Northeast       | ₹40/week (seasonal) | Dec–Feb, Apr–Jun                                  |
| **Cold Wave Rider**    | Cold Wave                      | Himalayan states, Northeast      | ₹60/week (seasonal) | Dec–Feb                                           |
| **Power Outage Rider** | Power Outage                   | UP, Bihar, Jharkhand, MP, Odisha | ₹70/week            | Year-round                                        |
| **Night Shift Rider**  | Late-Night Restaurant Shutdown | Tier 1,2 cities                  | ₹80/week            | Year-round (for workers primarily working nights) |
| **Supply Chain Rider** | Supply Chain Breakdown         | National                         | ₹30/week            | Year-round (catastrophic coverage)                |

**Optional Rider Formula:**

```
OR = Σ (Selected Rider Premiums)

Example (Pune worker, night shift, wants hailstorm coverage):
- Night Shift Rider: ₹80
- Hailstorm Rider: ₹40
Total OR = ₹120/week
```

---

## Part 6: Total Weekly Premium Calculation

### Formula

```
TWP = (City Base Premium × Worker Tier Factor) + RP + OR
```

### Examples

| Worker Profile                             | City Base | Tier Factor | BP   | RP            | OR   | TWP      |
| ------------------------------------------ | --------- | ----------- | ---- | ------------- | ---- | -------- |
| Full-time, Delhi NCR, April                | ₹250      | 1.2         | ₹300 | ₹60 (Heat)    | ₹0   | **₹360** |
| Standard, Bangalore, July                  | ₹250      | 1.0         | ₹250 | ₹50 (Monsoon) | ₹0   | **₹300** |
| Part-time, Kolkata, Oct                    | ₹200      | 0.8         | ₹160 | ₹100 (AQI)    | ₹0   | **₹260** |
| Full-time, Pune, Dec (night worker + hail) | ₹200      | 1.2         | ₹240 | ₹40 (Fog)     | ₹120 | **₹400** |
| Occasional, Patna, year-round              | ₹120      | 0.6         | ₹72  | ₹0            | ₹0   | **₹72**  |

---

## Part 7: Payout Calculation Formulas

### 7.1 Flat Payout Triggers

| Trigger                   | Base Payout | Severity Multiplier | Formula                               |
| ------------------------- | ----------- | ------------------- | ------------------------------------- |
| Cyclone Alert (Red)       | ₹500        | 1.0                 | `FP = ₹500`                           |
| Cyclone Alert (Orange)    | ₹250        | 1.0                 | `FP = ₹250`                           |
| App Server Crash (<2 hrs) | ₹300        | 1.0                 | `FP = ₹300`                           |
| App Server Crash (>2 hrs) | ₹500        | 1.0                 | `FP = ₹500`                           |
| Hailstorm                 | ₹250        | 1.0                 | `FP = ₹250`                           |
| Supply Chain Breakdown    | ₹300/day    | 1.0                 | `FP = ₹300 × Days` (capped at ₹1,500) |
| Mass Restaurant Closure   | ₹250        | 1.0                 | `FP = ₹250 per zone per day`          |

### 7.2 Hourly Payout Triggers

| Trigger                        | Hourly Rate                       | Cap            | Formula                                         |
| ------------------------------ | --------------------------------- | -------------- | ----------------------------------------------- |
| Heat Wave                      | ₹100/hour                         | ₹500/day       | `HP = min(Hours >43°C × ₹100, ₹500)`            |
| Dense Fog                      | ₹50/hour (per 3-hr block)         | ₹150/event     | `HP = (Fog Blocks × ₹50)`                       |
| Dust Storm                     | ₹150/event                        | ₹150           | `HP = ₹150 if event >30 min`                    |
| Water Logging                  | ₹300/zone/day                     | ₹600/day       | `HP = Zones Affected × ₹300 (capped at ₹600)`   |
| Major Traffic Gridlock         | ₹100/hour                         | ₹400/day       | `HP = min(Gridlock Hours × ₹100, ₹400)`         |
| Power Outage                   | ₹125/hour (after 2-hr deductible) | ₹500/day       | `HP = max(0, Hours - 2) × ₹125, capped at ₹500` |
| Sudden Curfew                  | ₹37.50/hour (₹150/4-hr block)     | ₹600/day       | `HP = Blocks × ₹150`                            |
| Local Strikes (Bandh)          | ₹37.50/hour (₹150/4-hr block)     | ₹600/day       | `HP = Blocks × ₹150`                            |
| Police Blockades               | ₹100/hour                         | ₹400/day       | `HP = min(Blockade Hours × ₹100, ₹400)`         |
| Demand Collapse                | ₹100/hour                         | ₹400/day       | `HP = min(Collapse Hours × ₹100, ₹400)`         |
| Delivery Dead Zone             | ₹150/hour                         | ₹450/day       | `HP = min(Dead Zone Hours × ₹150, ₹450)`        |
| Late-Night Restaurant Shutdown | ₹150/hour                         | ₹450/night     | `HP = min(Shutdown Hours × ₹150, ₹450)`         |
| Cold Wave                      | ₹100/day                          | ₹1,000/week    | `HP = Days × ₹100, capped at ₹1,000/week`       |
| Severe AQI (350–450)           | ₹200/day                          | 20 days/season | `HP = Days × ₹200, capped at seasonal limit`    |
| Severe AQI (>450)              | ₹400/day                          | 20 days/season | `HP = Days × ₹400, capped at seasonal limit`    |

### 7.3 Deductible & Co-pay Rules

| Trigger             | Deductible                           | Co-pay | Rationale                                                            |
| ------------------- | ------------------------------------ | ------ | -------------------------------------------------------------------- |
| Severe AQI          | First 3 days of season not covered   | None   | Prevents payout for brief spikes; covers sustained hazardous periods |
| Power Outage        | First 2 hours of any outage          | None   | Short outages are manageable; only significant disruptions trigger   |
| Heat Wave           | First 2 hours above 43°C             | None   | Brief heat spikes are tolerable; sustained heat is hazardous         |
| Water Logging       | None (requires 2+ hours of flooding) | None   | Verification threshold serves as implicit deductible                 |
| Late-Night Shutdown | First 30 minutes                     | None   | Brief restaurant closures are normal; sustained >60 min triggers     |

---

## Part 8: Aggregate Caps & Risk Mitigation

### 8.1 Individual Worker Caps

| Cap Type     | Formula                                       | Example                                                       |
| ------------ | --------------------------------------------- | ------------------------------------------------------------- |
| Daily Cap    | `min(Total Daily Payouts, City Daily Cap)`    | Bangalore worker: max ₹800/day even if multiple triggers fire |
| Weekly Cap   | `min(Total Weekly Payouts, City Weekly Cap)`  | Delhi worker: max ₹4,000/week                                 |
| Seasonal Cap | `min(Seasonal Payouts, Trigger Seasonal Cap)` | AQI: max ₹5,000–8,000 per winter season                       |

### 8.2 Insurer Aggregate Caps

| Cap Type                 | Formula                                     | Purpose                                                                                             |
| ------------------------ | ------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| City Monthly Cap         | `Σ(Worker Payouts) ≤ (City Premiums × 1.5)` | Prevents catastrophic loss from city-wide event (e.g., simultaneous cyclone payout for all workers) |
| Event Aggregate Cap      | `Per-event payouts ≤ ₹50 Lakhs`             | For rare catastrophic events (cyclone, supply chain breakdown)                                      |
| Annual Loss Ratio Target | `Total Payouts / Total Premiums ≤ 65%`      | Ensures underwriting profitability; excess returned as bonus or premium reduction                   |

---

## Part 9: Example Weekly Scenarios

### Scenario 1: Delhi Worker, April (Heat Wave + AQI not active)

| Component                | Calculation                   |
| ------------------------ | ----------------------------- |
| Worker Profile           | Full-time, Delhi NCR (Tier 1) |
| Base Premium             | ₹250 × 1.2 = ₹300             |
| Risk Premium             | Heat Wave ₹60                 |
| Optional Riders          | None                          |
| **Total Weekly Premium** | **₹360**                      |

**Payout Scenario (one week):**

* Tuesday: Heat Wave 5 hours → ₹500 (capped)
* Thursday: Heat Wave 4 hours → ₹400
* **Total Weekly Payout** = ₹900
* **Net Worker Benefit** = ₹900 - ₹360 = ₹540 (150% return)

---

### Scenario 2: Bangalore Worker, July (Monsoon + Gridlock)

| Component                | Calculation                  |
| ------------------------ | ---------------------------- |
| Worker Profile           | Standard, Bangalore (Tier 1) |
| Base Premium             | ₹250 × 1.0 = ₹250            |
| Risk Premium             | Monsoon (Water Logging) ₹50  |
| Optional Riders          | None                         |
| **Total Weekly Premium** | **₹300**                     |

**Payout Scenario (one week):**

* Monday: Traffic Gridlock 3 hours → ₹300
* Wednesday: Water Logging (2 zones) → ₹600 (capped at ₹600/day)
* Friday: Traffic Gridlock 2 hours → ₹200
* **Total Weekly Payout** = ₹1,100
* **Net Worker Benefit** = ₹1,100 - ₹300 = ₹800 (267% return)

---

### Scenario 3: Pune Worker, December (Night Shift + Hail Risk)

| Component                | Calculation                            |
| ------------------------ | -------------------------------------- |
| Worker Profile           | Full-time, Pune (Tier 2)               |
| Base Premium             | ₹200 × 1.2 = ₹240                      |
| Risk Premium             | Dense Fog ₹40                          |
| Optional Riders          | Night Shift ₹80 + Hailstorm ₹40 = ₹120 |
| **Total Weekly Premium** | **₹400**                               |

**Payout Scenario (one week):**

* Tuesday Night: Late-Night Restaurant Shutdown 3 hours → ₹450 (capped)
* Wednesday: Dense Fog 3 hours → ₹150
* **Total Weekly Payout** = ₹600
* **Net Worker Benefit** = ₹600 - ₹400 = ₹200 (50% return)

---

### Scenario 4: Kolkata Worker, October (AQI + Bandh)

| Component                | Calculation                                                 |
| ------------------------ | ----------------------------------------------------------- |
| Worker Profile           | Standard, Kolkata (Tier 2)                                  |
| Base Premium             | ₹200 × 1.0 = ₹200                                           |
| Risk Premium             | Severe AQI ₹100 + Bandh (included in BP for West Bengal) ₹0 |
| Optional Riders          | None                                                        |
| **Total Weekly Premium** | **₹300**                                                    |

**Payout Scenario (one week):**

* Monday: Bandh 8 hours → ₹600 (capped at ₹600/day)
* Wednesday–Friday: AQI >350 for 3 days → ₹200 × 3 = ₹600
* **Total Weekly Payout** = ₹1,200
* **Net Worker Benefit** = ₹1,200 - ₹300 = ₹900 (300% return)

---

## Part 10: Premium Optimization & Sustainability Formulas

### 10.1 Loss Ratio Management

```
Target Loss Ratio = 65%
Actual Loss Ratio = Total Payouts / Total Premiums

If Actual Loss Ratio > 70% for 2 consecutive months:
- Adjust seasonal premiums upward by 10–20%
- Tighten payout caps for high-frequency triggers

If Actual Loss Ratio < 50% for 2 consecutive months:
- Reduce premiums or offer bonus payouts
- Expand coverage thresholds
```

### 10.2 Dynamic Pricing Adjustment

```
Adjusted Premium = Base Premium × (Historical Loss Ratio / Target Loss Ratio)

Example:
- City historical loss ratio = 75%
- Target = 65%
- Adjustment = 75/65 = 1.15
- New premium = ₹300 × 1.15 = ₹345
```

### 10.3 Worker Retention Bonus

If a worker has **no claims for 8 consecutive weeks**:

* 10% premium discount for next 4 weeks
* Encourages responsible riding and reduces moral hazard

---

## Summary Table: Weekly Model at a Glance

| Component                      | Formula                 | Range        |
| ------------------------------ | ----------------------- | ------------ |
| **City Base Premium**          | Tier-based (₹120–250)   | ₹120–250     |
| **Worker Tier Factor**         | 0.6–1.2                 | 0.6–1.2      |
| **Base Premium (BP)**          | City Base × Worker Tier | ₹72–300      |
| **Risk Premium (RP)**          | Seasonal add-ons        | ₹0–150       |
| **Optional Riders (OR)**       | Worker-selected         | ₹0–200       |
| **Total Weekly Premium (TWP)** | BP + RP + OR            | ₹72–650      |
| **Daily Payout Cap**           | City Tier               | ₹500–800     |
| **Weekly Payout Cap**          | City Tier               | ₹2,500–4,000 |
| **Target Loss Ratio**          | Payouts / Premiums      | 65%          |

---

This weekly model ensures:

* **Profitability:** Risk-based pricing, caps, deductibles, and aggregate limits protect the insurer
* **Fairness:** Workers pay based on actual risk exposure (city, season, worker type)
* **Transparency:** Simple formulas workers can understand and verify
* **Flexibility:** Optional riders allow customization without forcing irrelevant coverage
* **Scalability:** Geographic and seasonal segmentation enables expansion to new cities without repricing the entire model

---

# ⚙️ Tech Stack & AI/ML Integration

## 🖥️ Frontend

| Technology              | Purpose                    |
| ----------------------- | -------------------------- |
| **React Native (Expo)** | Mobile app for iOS/Android |
| **React.js**            | Admin web dashboard        |
| **Tailwind CSS**        | Styling                    |
| **Axios**               | API calls                  |
| **React Query**         | Data fetching & caching    |

---

## 🧩 Backend

| Technology                                    | Purpose                                          |
| --------------------------------------------- | ------------------------------------------------ |
| **Node.js + Express** or **Python + FastAPI** | REST API server                                  |
| **PostgreSQL**                                | Primary database (workers, policies, payouts)    |
| **Redis**                                     | Caching, real-time trigger status, rate limiting |
| **Bull / Agenda**                             | Job queue for trigger monitoring                 |
| **JWT**                                       | Authentication                                   |
| **WebSockets (Socket.io)**                    | Real-time notifications to workers               |

---

## 🌐 External APIs

| API                                       | Purpose                                             |
| ----------------------------------------- | --------------------------------------------------- |
| **OpenWeatherMap / IMD API**              | Temperature, cyclones, fog, dust storms, hailstorms |
| **Google Maps API / TomTom**              | Traffic speed data for gridlock detection           |
| **CPCB / WAQI (World Air Quality Index)** | AQI data                                            |
| **NewsAPI / GNews**                       | Bandh, curfew, strike alerts                        |
| **Zomato / Swiggy Status Page**           | App server crash detection                          |
| **Twilio / WhatsApp Business API**        | Push notifications to workers                       |
| **Razorpay / Cashfree**                   | Payment gateway for premium collection & payouts    |

---

## 🤖 AI/ML Stack

| Technology                                           | Purpose                             |
| ---------------------------------------------------- | ----------------------------------- |
| **Python (scikit-learn, pandas, numpy)**             | ML model development                |
| **XGBoost / LightGBM**                               | Risk scoring and premium prediction |
| **Isolation Forest / Statistical Outlier Detection** | Fraud detection (anomaly detection) |
| **Google Colab / Jupyter Notebook**                  | Model prototyping                   |
| **ONNX / Pickle**                                    | Model serialization for deployment  |
| **FastAPI + ONNX Runtime**                           | Model serving as API endpoints      |

---

## 🚀 DevOps & Deployment

| Technology                    | Purpose             |
| ----------------------------- | ------------------- |
| **Vercel / Netlify**          | Frontend hosting    |
| **Render / Railway / Heroku** | Backend API hosting |
| **Supabase / Neon**           | Managed PostgreSQL  |
| **Upstash**                   | Managed Redis       |
| **GitHub**                    | Version control     |
| **GitHub Actions**            | CI/CD (optional)    |

---

## 📊 Summary Table

| Layer             | Technologies                                                      |
| ----------------- | ----------------------------------------------------------------- |
| **Frontend**      | React Native, React.js, Tailwind CSS, Axios, React Query          |
| **Backend**       | Node.js/Python, Express/FastAPI, PostgreSQL, Redis, Bull          |
| **External APIs** | OpenWeatherMap, Google Maps, CPCB/WAQI, NewsAPI, Twilio, Razorpay |
| **AI/ML**         | Python, scikit-learn, XGBoost, Isolation Forest, ONNX, FastAPI    |
| **DevOps**        | Vercel, Render, Supabase, Upstash, GitHub                         |

---

## 🧠 AI/ML Models (Simple Approach)

| Model                  | Algorithm                                          | Purpose                            |
| ---------------------- | -------------------------------------------------- | ---------------------------------- |
| **Risk Score**         | Weighted scoring + Linear Regression               | Dynamic premium calculation        |
| **Fraud Detection**    | Z-score / IQR outlier detection + Rule-based flags | Identify suspicious claim patterns |
| **Trigger Validation** | Multi-source consensus (2 of 3 APIs)               | Verify disruption authenticity     |
| **Demand Baseline**    | Moving average                                     | Compare against actual orders      |

---

## 🔗 Key Integration Points

1. **Premium Calculation** → Risk Score Model → Weekly premium output
2. **Trigger Monitoring** → External APIs → Trigger creation → Validation
3. **Payout Engine** → Validated triggers → Worker eligibility check → Payout via Razorpay
4. **Fraud Detection** → Claim patterns → Anomaly detection → Admin alerts

---

Got it — here’s the corrected version **without serial numbers**, clean and README-ready:

---

# 🔐 Fraud Prevention Strategy

| Method                                   | Implementation                                                                                 |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------- |
| **GPS + IP Validation**                  | Verify that the worker’s location matches the claimed trigger zone; flag any mismatches        |
| **Time-based Activity Tracking**         | Monitor claim frequency; flag more than 3 claims within 24 hours or abnormal behavior patterns |
| **Weather Data Cross-verification**      | Validate claims against official IMD/CPCB data; reject if no external confirmation exists      |
| **Platform Activity Cross-verification** | Ensure the worker was active on the platform during the claimed disruption period              |
| **Duplicate Claim Blocking**             | Prevent multiple claims for the same trigger event by fingerprinting each claim                |
| **Peer Comparison**                      | Flag anomalies where a worker claims a trigger but 90% of nearby workers do not                |

---

# 🌟 Why This Solution Works

| Factor                 | Benefit                                                                        |
| ---------------------- | ------------------------------------------------------------------------------ |
| **Fully Automated**    | Eliminates claim forms and paperwork with instant decision-making              |
| **Weekly Pricing**     | Aligns with gig workers’ earning cycles for better affordability               |
| **Real-time Triggers** | Enables payouts within hours instead of weeks, providing immediate relief      |
| **AI-driven**          | Scales efficiently across thousands of workers with adaptive pricing           |
| **Parametric Model**   | Removes need for manual loss assessment using objective trigger conditions     |
| **Worker Trust**       | Ensures payouts are based on verifiable external data, not subjective judgment |

---

# 📱 Platform Choice Justification

| Factor                    | Rationale                                                                        |
| ------------------------- | -------------------------------------------------------------------------------- |
| **Mobile-first**          | Gig workers primarily operate via smartphones, with limited or no desktop access |
| **Real-time GPS**         | Critical for location validation, zone monitoring, and fraud detection           |
| **Instant Notifications** | Provides real-time alerts for triggers and payout confirmations                  |
| **UPI Integration**       | Enables seamless and instant payouts directly to worker bank accounts            |
| **Low Data Usage**        | Optimized for Indian network conditions and budget smartphones                   |
| **Offline Capability**    | Core functionalities remain accessible during intermittent connectivity          |

---

# 🚀 Future Enhancements

| Enhancement                          | Description                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| **Multi-platform Coverage**          | Expand beyond Zomato/Swiggy to include Amazon Flex, Uber, Dunzo, Zepto |
| **Personalized Savings Insights**    | Recommend optimal premium plans based on individual earning patterns   |
| **Gamified Safe-working Incentives** | Reward low-risk behavior with discounts, rewards, and badges           |
| **AI-based Earning Recommendations** | Suggest optimal zones, time slots, and shifts to maximize earnings     |
| **Weather Alerts**                   | Provide proactive warnings for upcoming disruptions                    |
| **Peer-to-peer Risk Pooling**        | Enable workers to form groups and share surplus premiums               |
| **Micro-savings Integration**        | Automatically allocate a portion of payouts toward emergency savings   |

---

# 📌 Development Plan (6 Weeks)

| Phase                              | Duration | Activities                                                                                                                           |
| ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Phase 1: Ideation & Design**     | Week 1   | Market research, user interviews, UI/UX wireframes, ML model planning, API vendor selection                                          |
| **Phase 2: Core Features**         | Week 2–3 | Worker onboarding, policy subscription, premium calculation engine, trigger monitoring system, basic payout logic                    |
| **Phase 3: Integration & Testing** | Week 4   | Integration of external APIs (weather, traffic, AQI, news), trigger simulation dashboard, fraud detection rules, notification system |
| **Phase 4: Payment & Analytics**   | Week 5   | Razorpay/Cashfree integration, admin dashboard, payout tracking, analytics setup                                                     |
| **Phase 5: Polish & Launch**       | Week 6   | Security hardening, performance testing, bug fixes, documentation, and demo preparation                                              |

---

# 🎥 Video Script

https://drive.google.com/file/d/1KztPhToP2yyT2GnlpnVnSpjqRzTuW3W1/view?usp=sharing

---

# 🎮 How to Run the Prototype

To run the SurakshaPay prototype on your local machine, follow these steps:

1.  **Navigate to the prototype directory:**
    ```bash
    cd prototype
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Access the application:**
    Open your browser and navigate to the URL shown in your terminal (usually `http://localhost:5173`).
