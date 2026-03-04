---
title: Data Retention
description: How long Protu keeps your data and what happens when it's deleted.
---

How long Protu keeps your data and what happens when it's deleted.

---

## Overview

We retain data to provide our service and meet legal obligations. This page explains what we keep, for how long, and how deletion works.

---

## Active Workspaces

While your workspace is active, we retain:

### Assessment data

- All assessment responses
- Generated insights
- Personal profiles

This data is kept indefinitely while the workspace is active, ensuring you always have access to historical insights.

### Hiring data

- Role information
- Candidate records
- Hiring decisions
- Pipeline history

Historical hiring data is preserved for reference, even after roles are closed and archived.

### Team data

- Team configurations
- Employee assignments
- Team Intelligence snapshots
- Membership history

Team data remains available for analysis and comparison.

### User data

- Account information
- Login history
- Activity logs

Needed to provide the service and maintain security.

---

## Specific Retention Periods

Some data has defined retention periods:

| Data type | Retention period |
|-----------|------------------|
| **Audit logs** | 7 years |
| **Session data** | 90 days |
| **Email delivery logs** | 90 days (1 year for failures) |
| **Magic link tokens** | Until expiry + 30 days |
| **Deleted roles** | 14 days before permanent deletion |
| **Deleted workspace** | 30 days before permanent deletion |
| **Backup data** | Up to 180 days (backup rotation) |
| **Closed role candidate access** | 30 days after role closure |
| **Employee insights links** | 72 hours per link |
| **Candidate insights links** | 30 days |

---

## Archived Data

When you archive roles or teams:

| What changes | What stays the same |
|--------------|---------------------|
| Data becomes **read-only** | All information is **preserved** |
| Can't invite new people | Insights remain **viewable** |
| Can't modify settings | Historical data available for reference |

### Archive undo window

**Roles:** You have **24 hours** to undo an archive. After 24 hours, archival is permanent (the role remains viewable but cannot be restored to active status).

**Teams:** Archives can be restored at any time.

### Auto-archive

Hired roles are automatically archived after **30 days** to keep your active view clean. The data is preserved; it just moves to your archive.

Archiving is not deletion. It's long-term storage for completed hiring records and dissolved teams.

---

## How Deletion Works

### The deletion process

When you delete data in Protu:

1. **Soft delete:** Data is marked as deleted but retained temporarily
2. **Recovery period:** You can restore within 30 days
3. **Hard delete:** Data is permanently removed after the recovery period

### What can be deleted

| Item | Can delete? | Recovery period |
|------|-------------|-----------------|
| **Candidates** | Yes | 30 days |
| **Employees** | Yes (deactivate first) | 30 days |
| **Roles** | Yes (soft delete) | 14 days |
| **Roles (archived)** | No | Permanent historical record |
| **Teams** | Archive only | Restorable indefinitely |
| **Workspace** | Owner request only | 30 days |

### What we retain after deletion

Even after deletion, we may retain:

| Data | Reason |
|------|--------|
| **Audit logs** | Required for compliance (anonymised where possible) |
| **Aggregate statistics** | No personal data, used for service improvement |
| **Backup copies** | Until backup rotation completes (typically 30 days) |

---

## Your Data Rights

### Request a copy

You can request a copy of your personal data at any time.

**For workspace data:**
Contact support@protu.io from your Owner or Admin email.

**For candidates/employees:**
Contact your company first, as they manage your records. For direct requests to Protu, email support@protu.io.

### Request deletion

You have the right to request deletion of your personal data, subject to:
- Legal retention requirements
- Legitimate business needs
- Technical feasibility

We process deletion requests within 30 days as required by GDPR.

### How to make a request

Include in your email:
- Your name and email address
- Your company name
- What you're requesting (copy, deletion, correction)
- Any relevant details

For full details, see [Privacy & GDPR](/security/privacy/).

---

## Workspace Closure

If you close your Protu workspace:

| Timeline | What happens |
|----------|--------------|
| **Immediately** | Access revoked for all users |
| **30 days** | Data retained for recovery |
| **After 30 days** | Data permanently deleted |

During the 30-day window, you can contact support to restore the workspace.

**Only Owners can request workspace closure.** Contact support@protu.io to initiate this process.

---

## Legal Holds

In certain circumstances (legal proceedings, regulatory requirements), we may be required to preserve data beyond normal retention periods.

When a legal hold applies:
- Normal deletion is suspended
- Data is preserved as required
- We notify you when legally permitted

---

## Candidate Data After Role Closure

When a role closes (Hired or Cancelled):

| Candidate type | Access period |
|----------------|---------------|
| **All candidates** | Retain access to their own insights for 30 days |
| **Hired candidate** | Converted to employee; ongoing access |
| **Not selected** | 30-day access, then link expires |

After 30 days, candidates can no longer access their insights from that role. Their data remains in your workspace for your reference.

---

## Employee Data After Leaving

When an employee leaves your organisation:

1. **Deactivate** them in Protu (Settings → Employees)
2. Their profile becomes read-only
3. Historical contribution to Team Intelligence is preserved
4. They can no longer access their insights
5. You can permanently delete if needed (30-day recovery applies)

Deactivating preserves data for compliance and historical reference. You can permanently delete their record if your organisation's data policies require it.

