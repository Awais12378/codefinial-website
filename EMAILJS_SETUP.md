# EmailJS Setup Guide for Custom Domain Email (mailbux.com)

EmailJS is a free service that lets you send emails directly from your frontend without needing a backend server.

## Quick Setup for Custom Email (mailbux.com)

### Step 1: Get SMTP Credentials from mailbux.com
1. Log in to your mailbux.com/mailbox.com account
2. Go to Settings or SMTP settings
3. Find your SMTP credentials:
   - **SMTP Host** (usually: smtp.mailbux.com or similar)
   - **SMTP Port** (usually: 587 for TLS, 465 for SSL)
   - **SMTP Username** (usually: your full email, e.g., contact@codefinial.tech)
   - **SMTP Password** (may need to generate an app password)
4. Save these credentials

### Step 2: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email (you can use any email to sign up)

### Step 3: Add Custom SMTP Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose **"SMTP"** or **"Custom SMTP"**
4. Enter your mailbux.com SMTP credentials:
   - **Host**: Your SMTP host from mailbux.com
   - **Port**: 587 (TLS) or 465 (SSL)
   - **Username**: contact@codefinial.tech
   - **Password**: Your SMTP password from mailbux.com
5. Click "Add Service"
6. EmailJS will test the connection

### Step 4: Create Email Template
1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Name it "Consultation Request"
4. Set the "From Email" to: contact@codefinial.tech
5. Set the "To Email" to: contact@codefinial.tech
6. Set the "CC Email" to: hello@codefinial.tech
7. Use this template:

```
Subject: New Consultation Request - {{from_name}}

New Consultation Request

Name: {{from_name}}
Email: {{from_email}}
Company: {{company_name}}
Website: {{website}}
Service Required: {{service}}
Budget: {{budget}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}} ({{time_zone}})
Project Description:
{{project_description}}
```

8. Click "Save"

### Step 5: Get Your Credentials
In the EmailJS dashboard:
1. Click "Account" (top right)
2. Copy your **Public Key** (also called API Key)
3. Go to "Email Services" and copy your **Service ID**
4. Go to "Email Templates" and copy your **Template ID**

### Step 6: Add to Your Project
Create a `.env` file in your project root (D:\Cold Emailing) and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 7: Install EmailJS Package
Run this command in your terminal:

```bash
npm install
```

### Step 8: Test
1. Restart your dev server: `npm run dev`
2. Fill out the form on your website
3. Submit the form
4. Check your contact@codefinial.tech email (and hello@codefinial.tech in CC)

## Troubleshooting mailbux.com SMTP

**Can't find SMTP credentials?**
- Log in to mailbux.com/mailbox.com
- Look for "SMTP Settings", "Outgoing Mail", or "Mail Settings"
- Contact mailbux.com support if you can't find it
- Common mailbux.com SMTP:
  - Host: smtp.mailbux.com
  - Port: 587 (TLS) or 465 (SSL)

**Connection failed in EmailJS?**
- Double-check SMTP username and password
- Make sure you're using the correct port
- Some providers require "App Password" - generate one in mailbux.com settings
- Try both port 587 and 465

**Email not sending?**
- Check EmailJS dashboard for error logs
- Verify your mailbux.com account is active
- Make sure the SMTP service is enabled in mailbux.com

## Alternative: Use Your Other Email

If SMTP setup is too complex, you can:
1. Use a Gmail account for EmailJS (easier setup)
2. Set up email forwarding in mailbux.com to forward contact@codefinial.tech to your Gmail
3. Then use Gmail in EmailJS
4. Replies will still come from contact@codefinial.tech

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- Unlimited email templates
- Perfect for your needs!

## Need Help?

EmailJS documentation: https://www.emailjs.com/docs/
mailbux.com support: Check their help center for SMTP settings
