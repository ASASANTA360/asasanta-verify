<p align="center">
  <img src="docs/cover.png" alt="Asasanta Verify" width="100%">
</p>

# 🛡️ Asasanta Verify

AI-Powered Trust Infrastructure for Customer Verification, Risk Analysis, and Compliance.



AI-Powered Trust Infrastructure for Customer Verification, Risk Analysis, and Compliance.

Built with Next.js, Gemini AI, AWS Aurora PostgreSQL, DynamoDB, and Vercel.

---

## 🚀 Overview

Asasanta Verify helps organizations automate customer verification, assess trustworthiness, detect fraud risks, and maintain compliance-ready audit records.

The platform combines Artificial Intelligence with AWS databases to generate real-time trust scores and verification reports.

---

## ❗ Problem

Organizations face significant challenges when onboarding customers:

* Identity fraud
* Fake registrations
* High manual review costs
* Compliance requirements
* Lack of transparent trust scoring

Traditional verification processes are slow, expensive, and difficult to scale.

---

## 💡 Solution

Asasanta Verify provides:

* AI-powered customer verification
* Automated risk analysis
* Trust score generation
* Compliance audit history
* Real-time analytics dashboard
* Scalable AWS database infrastructure

---

## 🧠 AI Verification Engine

Customer information is submitted through the verification portal.

Gemini AI evaluates:

* Identity consistency
* Customer credibility
* Risk indicators
* Potential fraud signals

The system returns:

* Trust Score (0–100)
* Risk Level
* Recommendation
* Detailed Findings

---

## ☁️ AWS Database Architecture

### Aurora PostgreSQL

Used for:

* Customer profiles
* Verification history
* Compliance records
* Structured reporting

### DynamoDB

Used for:

* Trust score caching
* Audit logs
* Fast lookups
* Event tracking

---

## 🏗️ Architecture

```text
Frontend (Next.js)

        │

        ▼

Verification API

        │

        ▼

Gemini AI Risk Engine

        │

 ┌──────┴────────┐

 ▼               ▼

Aurora       DynamoDB
PostgreSQL   Audit Logs

 └──────┬────────┘

        ▼

Analytics Dashboard
```

---

## 📊 Features

### Customer Verification

* Customer onboarding
* Trust score generation
* Risk categorization

### Verification History

* Stored in Aurora PostgreSQL
* Searchable records
* Full audit trail

### Analytics Dashboard

* Total verifications
* Average trust score
* Risk distribution
* Real-time insights

### Compliance

* Audit-ready records
* Historical verification tracking

---

## 🛠️ Tech Stack

* Next.js 16
* TypeScript
* Tailwind CSS
* Gemini 2.5 Flash
* AWS Aurora PostgreSQL
* AWS DynamoDB
* Vercel

---

## 📂 Routes

### Frontend

* `/`
* `/verify`
* `/history`
* `/analytics`

### API

* `/api/verify`
* `/api/history`
* `/api/setup-db`
* `/api/test-db`

---

## ⚙️ Local Development

```bash
git clone https://github.com/ASASANTA360/asasanta-verify.git

cd asasanta-verify

npm install

npm run dev
```

---

## 🔑 Environment Variables

```env
DATABASE_URL=

GEMINI_API_KEY=

AWS_REGION=

AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=
```

---

## 📸 Screenshots

### Homepage

(Add screenshot)

### Verification Dashboard

(Add screenshot)

### History Dashboard

(Add screenshot)

### Analytics Dashboard

(Add screenshot)

---

## 🎥 Demo Video

(Add demo video link)

---

## 🌍 Real-World Use Cases

* Fintech onboarding
* Digital banking
* KYC verification
* Marketplace trust systems
* Lending platforms
* Compliance automation

---

## 🏆 H0 Hackathon Submission

Asasanta Verify demonstrates how AI-powered verification systems can leverage AWS Aurora PostgreSQL and DynamoDB to create scalable, compliance-ready trust infrastructure.

Built for:

* Vercel
* AWS Databases
* Real-time AI Verification
* Production-ready deployment

---

## 📄 License

MIT License

© 2026 Asasanta Global Technologies
