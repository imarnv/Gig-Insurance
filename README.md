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

SurakshaPay is an **AI-powered parametric insurance platform** that automatically compensates gig workers for income lost due to real-world disruptions — without requiring any manual claims.

Unlike traditional insurance, SurakshaPay replaces manual processes with a **fully automated, data-driven system** built on real-time signal processing, AI-based income modeling, and instant payout infrastructure. The platform operates on a **zero-claim process, instant payouts, and a weekly pricing model**, aligned with the earning patterns of gig workers.

---

## 🚀 Core System Architecture

SurakshaPay is designed as an **event-driven intelligent system** where multiple external signals are continuously ingested, processed, and evaluated to determine whether a worker’s earning ability has been disrupted.

The system integrates:

* A **multi-source trigger engine** (supporting a wide range of disruption signals)
* An **AI-based income prediction system (Earnings DNA Engine)**
* A **micro-zone risk scoring framework**
* A **fraud detection and validation layer**
* A **real-time payout execution system**

All components communicate through asynchronous pipelines to ensure **low latency and high scalability**.

---

## ⚡ Parametric Trigger Engine (Multi-Signal Detection System)

At the core of SurakshaPay is a **parametric trigger engine** that detects income-impacting disruptions using structured external data streams.

---

### ⚙️ Technical Implementation:

The system follows a **stream-processing architecture**:

```id="3r3a1k"
Data Ingestion → Feature Normalization → Threshold Evaluation → Zone Mapping → Trigger Activation
```

### 🔌 Data Sources (Abstracted):

* Environmental data streams
* Air quality and atmospheric data
* Traffic and mobility metrics
* Public advisories and civic signals
* Platform/system availability signals
* Marketplace activity indicators
* Crowdsourced validation inputs

---

### 🧠 Processing Layer:

* Each incoming signal is:

  * Time-aligned (temporal normalization)
  * Geo-mapped to micro-zones
  * Evaluated against predefined dynamic thresholds

* A **Trigger Scoring Engine** assigns:

  * Binary activation (0/1)
  * Or weighted severity score (0–1)

---

### 📌 Output:

* **Disruption Event Object**:

```id="n7qf0u"
{
  zone_id,
  start_time,
  end_time,
  severity_score,
  disruption_type
}
```

👉 This abstraction allows the system to support **any number of triggers without changing core logic**

---

## 🧬 Earnings DNA Engine (Personalized Income Modeling)

SurakshaPay calculates payouts based on **individual earning behavior**, not fixed averages.

Each worker’s earning pattern is modeled as a **time-series function of contextual variables**, creating a unique “income signature”.

---

### ⚙️ Technical Implementation:

* Model: **LSTM / Temporal Neural Network**

* Input Features:

  * Time-based features (hour, weekday, seasonality)
  * Location encoding (zone embeddings)
  * Historical activity signals
  * Demand proxies
  * Worker engagement patterns

* Output:

  * Predicted **hourly earning potential**

---

### 📌 Payout Calculation:

```id="r0w7tn"
Payout = Predicted Earnings Rate × Effective Disruption Duration × Severity Weight
```

👉 Enables **fine-grained, personalized compensation**

---

## 🗺️ Micro-Zone Risk Index (MZRI)

Instead of treating cities as uniform entities, SurakshaPay models risk at a **micro-geographic level**.

---

### ⚙️ Technical Implementation:

* Spatial Grid: ~500m resolution zones

* Model: **Gradient Boosting / Ensemble Models**

* Input Features:

  * Historical disruption frequency
  * Temporal patterns of activity drop
  * Infrastructure reliability signals
  * Environmental variability trends
  * Demand-supply imbalance indicators

* Output:

  * **Zone risk coefficient (0–1)**

---

### 📌 Usage:

```id="2dr8pt"
Weekly Premium = Base Rate × Zone Risk × Coverage Factor
```

👉 Enables **dynamic, location-aware pricing**

---

## 🔮 Predictive Shield Activation (Proactive Intelligence)

SurakshaPay anticipates disruptions before they occur using **short-term predictive modeling**.

---

### ⚙️ Technical Implementation:

* Forecast ingestion (short horizon: 1–6 hours)
* Time-series forecasting models
* Threshold-based pre-activation logic

---

### 📌 Functionality:

* Pre-emptive activation of coverage windows
* Early risk alerts to users

👉 Shifts system from **reactive → predictive protection**

---

## 🤖 Zero-Claim Autopilot (Event-Driven Execution Engine)

The entire claim lifecycle is automated through an **event-triggered workflow**.

---

### ⚙️ System Flow:

```id="c4t4c9"
Trigger Event Generated
→ Worker-Zone Matching
→ Fraud Risk Scoring
→ Earnings Loss Computation
→ Payout Instruction Generation
→ Payment Gateway Execution
→ Notification Dispatch
```

---

### 🧩 System Components:

* Event Broker: Kafka / RabbitMQ
* Processing Services: Microservices (Node.js / Django)
* Rule Engine: Dynamic trigger validation
* Payment Layer: UPI / sandbox gateway

---

👉 Result: **fully autonomous, real-time payouts**

---

## 🕵️ Intelligent Fraud Detection System

SurakshaPay integrates a **multi-layer fraud detection pipeline** to ensure system integrity.

---

### ⚙️ Technical Implementation:

* Models:

  * **Isolation Forest (anomaly detection)**
  * Statistical deviation scoring
  * Behavioral pattern analysis

* Signals:

  * Location consistency
  * Temporal activity patterns
  * Device-level fingerprinting
  * Claim frequency anomalies
  * Cross-zone inconsistencies

---

### 🧠 Architecture:

* Real-time fraud scoring during payout pipeline
* Optional federated learning layer for distributed model training

---

👉 Ensures **low false positives + high trust system**

---

## 💬 Interaction Layer (Low-Friction Access)

To maximize adoption, SurakshaPay uses a **lightweight interaction layer** instead of heavy app dependency.

---

### ⚙️ Implementation Options:

* WhatsApp Business API
* Progressive Web App (PWA) fallback

---

### Features:

* Registration
* Policy selection
* Premium payment
* Coverage updates
* Payout notifications

---

👉 Designed for **minimal friction and high accessibility**

---

## 📊 Dynamic Coverage & Pricing Engine

SurakshaPay uses a **configurable coverage system** tied to risk and user preference.

---

### ⚙️ Technical Implementation:

* Rule-based + ML-assisted recommendation engine
* Inputs:

  * Forecasted disruption probability
  * Historical exposure
  * User affordability signals

---

### Output:

* Suggested weekly plans
* Coverage limits
* Premium adjustments

---

👉 Enables **adaptive, user-specific financial protection**

---

## 🧠 Additional System Components (Important for Build)

To make this system production-ready, SurakshaPay also includes:

* **Feature Store:** Centralized storage for ML features
* **Model Serving Layer:** Real-time inference APIs
* **Monitoring System:** Tracks trigger accuracy, payout latency
* **Audit Logs:** For transparency and compliance
* **Fallback Rules Engine:** Ensures payouts even if ML fails

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
