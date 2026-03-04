---
title: Data Security
description: Technical security measures, encryption, access controls, and infrastructure protecting your data.
---

Protu protects your data with encryption at every layer, strict access controls, continuous monitoring, and EU-hosted infrastructure. Here is how each measure works.

## Security Overview

Protu uses layered security, meaning multiple overlapping protections so that no single point of failure compromises your data.

| Layer | Protection |
|-------|------------|
| **Transport** | TLS 1.3 encryption for all connections |
| **Storage** | AES-256 encryption for all data at rest |
| **Access** | Role-based controls and authentication |
| **Monitoring** | 24/7 threat detection and logging |
| **Physical** | Secure, certified data centres |

---

## Encryption

### In transit

All data moving between your browser and Protu is encrypted:

- **Protocol:** TLS 1.3 (the latest standard)
- **Coverage:** 100% of connections, no exceptions
- **Enforcement:** HTTPS required; HTTP automatically redirected
- **Certificates:** Regularly rotated, monitored for expiry

This protects data from interception while travelling over networks.

### At rest

All stored data is encrypted:

- **Algorithm:** AES-256 (industry-standard, used by banks and governments)
- **Scope:** Databases, file storage, backups
- **Key management:** Keys stored separately from data, rotated regularly
- **Sensitive fields:** Additional encryption for assessment responses

Even if storage was compromised, data would be unreadable without encryption keys.

---

## Access Controls

### Application level

**Role-based access control (RBAC):**

| Role | Access |
|------|--------|
| **Owner** | Full access including billing, settings, user management |
| **Admin** | Roles, teams, employees, candidates (no billing or user management) |

Users only see what their role permits. No exceptions.

**Authentication:**

- Email-based magic links (passwordless option)
- Password authentication with strength requirements
- Two-factor authentication (2FA) available
- Session timeout after inactivity

**Session management:**

- Sessions expire after period of inactivity
- Users can view and revoke active sessions
- Owners can force sign-out for any user
- Suspicious activity triggers automatic sign-out

### Infrastructure level

**Network security:**

- Firewalls restrict traffic to necessary ports only
- DDoS protection against volumetric attacks
- Private networks for internal communication
- No direct database access from internet

**Server security:**

- Minimal attack surface (only required services running)
- Regular security patching
- Hardened configurations following CIS benchmarks (industry-standard security baselines)
- Servers are replaced rather than modified, preventing tampering with existing systems

---

## Monitoring & Detection

### What we monitor

- **Authentication:** Failed login attempts, unusual patterns
- **Access:** Who accessed what data, when
- **Changes:** Modifications to sensitive settings
- **Anomalies:** Unusual activity patterns
- **Infrastructure:** System health, performance, errors

### How we respond

| Severity | Response time | Actions |
|----------|---------------|---------|
| **Critical** | Immediate | Automated containment, on-call alert |
| **High** | Within 1 hour | Investigation, potential containment |
| **Medium** | Within 4 hours | Investigation, monitoring |
| **Low** | Next business day | Review, trend analysis |

### Audit logging

All significant actions are logged:

- User authentication events
- Data access and modifications
- Settings changes
- Administrative actions

Logs are:
- Retained for 7 years
- Tamper-protected
- Available for compliance audits


---

## Compliance & Certifications

### Current compliance

- **GDPR:** Full compliance with EU data protection regulations
- **UK GDPR:** Compliant with UK data protection requirements

### Infrastructure certifications

Our cloud infrastructure providers maintain:

- SOC 2 Type II
- ISO 27001
- PCI DSS (for payment processing)

### Security assessments

- **Penetration testing:** Annual third-party assessments
- **Vulnerability scanning:** Continuous automated scanning
- **Security audits:** Available for enterprise customers

---

## Incident Response

### Our process

If a security incident occurs:

1. **Detect:** Automated monitoring identifies the issue
2. **Contain:** Immediate action to limit impact
3. **Assess:** Determine scope and severity
4. **Notify:** Affected customers informed promptly
5. **Remediate:** Fix the root cause
6. **Review:** Post-incident analysis and improvements

### Notification commitment

If your data is affected by a security incident:

- **Notification:** Within 72 hours of confirmation
- **Details:** What happened, what data was affected, what we're doing
- **Updates:** Regular communication until resolved
- **Support:** Dedicated contact for questions

---

## Report a Security Issue

If you discover a security vulnerability:

**Email:** security@protu.io

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Your contact information

**Our commitment:**
- Acknowledge within 24 hours
- Keep you informed of progress
- Credit you (if desired) when fixed
- No legal action for good-faith reports

---

## Infrastructure & Reliability

### Where Your Data Lives

Protu runs on enterprise-grade cloud infrastructure:

- **Primary hosting:** Secure cloud data centres (DigitalOcean EU)
- **Data location:** EU (Netherlands/Germany) for EU/UK customers
- **Redundancy:** Multiple availability zones for resilience
- **Data isolation:** Each company's data is logically separated

Your data is never mixed with other customers' data. Access controls ensure users only see their own company's information.

### Backups & Recovery

**Regular backups:**
- **Frequency:** Automated daily backups
- **Retention:** Up to 180 days (backup rotation)
- **Geographic redundancy:** Backups stored in separate locations
- **Testing:** Regular backup restoration tests

**Disaster recovery:**
- Designed for rapid restoration
- Business continuity plans tested regularly
- Recovery procedures documented and rehearsed

### Uptime & Reliability

Protu is designed for high availability:

- Multiple server instances for redundancy
- Automatic failover if issues occur
- Load balancing across infrastructure
- Zero-downtime deployments for most updates

**Maintenance:**
- Planned maintenance scheduled during low-usage periods
- Advance notice for any planned downtime
- Most updates don't require downtime

### Third-Party Services

We use carefully selected third-party services:

| Service | Provider | Purpose | Location |
|---------|----------|---------|----------|
| **Cloud hosting** | DigitalOcean | Application and database | EU |
| **Email delivery** | Mailgun | Invitations and notifications | EU |
| **Error monitoring** | Sentry | Bug detection and logging | US |
| **Payments** | Stripe | Subscription management | US |

All providers are GDPR compliant with appropriate data protection safeguards.
