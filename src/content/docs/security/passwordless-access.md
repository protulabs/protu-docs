---
title: Passwordless Access
description: How magic links provide secure, password-free authentication for candidates and employees.
---

Candidates and employees access Protu through magic links: secure, time-limited URLs sent by email. No passwords to create, remember, or reset.

## How It Works

### The magic link flow

1. **You receive an email:** When invited to Protu, you get an email with a unique link.
2. **You click the link:** It takes you directly to Protu, already authenticated.
3. **You're in:** No login form, no password. Straight to your assessment or insights.

Magic links work on any device with email access (desktop, phone, or tablet).

---

## Who Uses Passwordless Access

### Candidates

When invited to a role, candidates receive a magic link to:
- Complete their assessment
- View their personal insights
- Access their profile (while the link is valid)

### Employees

When added to a team, employees receive a magic link to:
- Complete their assessment
- View their personal insights
- Contribute to Team Intelligence

### Workspace users (different)

Owners and Admins use traditional email/password login with optional [two-factor authentication](/security/data-security/). This provides additional security for accounts with administrative access.

---

## Link Expiry Times

Magic links are time-limited for security:

| User type | Link validity | Why |
|-----------|---------------|-----|
| **Candidates** | 30 days | Time to fit assessment into schedule; hiring can span weeks |
| **Employees** | 72 hours | Ongoing access needs; shorter validity is more secure |

After expiry, you'll need to request a new link.

---

## Security Measures

### Unique tokens

Each magic link contains a cryptographically random token. These tokens are:
- Impossible to guess (cryptographically secure, high-entropy random values)
- Single-purpose (tied to one user and action)
- Bound to your email address

### Expiration

Links become invalid after their expiry time. Old links cannot be reused, even if they weren't clicked.

### Email verification

The link only works if you have access to the email it was sent to. Your email acts as proof of identity.

### Activity logging

Protu logs when links are used, from where, and on what devices. Unusual patterns trigger security reviews.

---

## Getting a New Link

### If your link expired

**For candidates:**
Contact the person who invited you and ask them to resend the invitation. They can do this from the role page in Protu.

**For employees:**
1. Go to the Protu link you received (you'll see an "expired" message)
2. Click "Request new link"
3. Enter your email address
4. Check your inbox for the new link

**Rate limit:** You can request up to 3 new links per hour to prevent abuse.

### If you didn't receive a link

- Check your spam or junk folder
- Search for emails from `noreply@protu.io`
- Verify the email address was entered correctly
- Ask your admin to resend the invitation
- If using corporate email, ask IT to whitelist `protu.io`

