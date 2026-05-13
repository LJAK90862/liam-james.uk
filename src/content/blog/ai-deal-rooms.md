---
title: "We Replaced Spreadsheets with AI Deal Rooms"
description: "How I built a deal room portal for energy brokerage that replaced spreadsheet chaos with automated stage-based workflows."
pubDate: 2026-05-26
tags: ["edge-energy", "ai", "sales-tools"]
draft: true
---

Energy brokerage is a mess. I don't mean that in a Silicon Valley "let's disrupt it" way — I mean it's literally people emailing spreadsheets back and forth, losing track of which customer is at which stage, and wondering why their pipeline is a disaster.

I know this because I run Edge Energy, and until recently, we were doing exactly that.

So I built a deal room portal. And it changed everything about how we work.

## The Problem with Energy Brokerage

If you're not familiar with the industry, here's how it works. A business wants a better energy deal. They sign a Letter of Authority (LOA) giving us permission to negotiate on their behalf. We gather their usage data, get quotes from suppliers, present options, and handle the contract.

Simple enough in theory. In practice, it's a nightmare of coordination.

The broker needs to track dozens of deals at different stages. The customer has no idea what's happening with their quote. Documents get lost in email threads. Someone forgets to follow up after sending an LOA. The supplier sends quotes to the wrong email address.

Most brokerages manage all of this with — I kid you not — a shared spreadsheet and an overflowing inbox.

## What a Deal Room Actually Is

Think of it like a shared space for each deal. The customer logs in and sees their journey from start to finish. The broker logs in and manages their pipeline. Everything lives in one place.

Here's what the customer sees:

- **Their current stage** — are we waiting for their LOA, gathering info, comparing quotes, or finalising contracts?
- **Documents** — LOAs to sign, quotes to review, contracts to approve
- **Timeline** — what's happened so far, what's coming next
- **Direct communication** — no more lost emails

Here's what the broker sees:

- **Full pipeline view** — every deal, every stage, at a glance
- **Automated reminders** — follow up on unsigned LOAs, chase missing information
- **Quote comparison tools** — side-by-side supplier quotes with margin calculation
- **Activity feed** — who opened what, when

## The Stage-Based Flow

Every deal moves through a clear pipeline:

### Stage 1: LOA
The customer receives a Signable link (we integrated with Signable's API) to electronically sign their Letter of Authority. No printing, no scanning, no posting. They sign on their phone in 30 seconds. When it's signed, the deal automatically moves to the next stage.

### Stage 2: Information Request
We need their current supplier details, meter numbers, usage data. The deal room has a structured form for this — no more "can you send me your latest bill?" emails back and forth. The customer fills it in once, we have everything we need.

### Stage 3: Quotes
We go to market, get quotes from multiple suppliers, and present them in the deal room. The customer can compare options, see the savings, and ask questions — all in one place. No more attaching PDFs to emails and hoping they open the right one.

### Stage 4: Contract
Customer picks a quote, we handle the contract. They can track the status — submitted, accepted, confirmed — without having to ring us and ask "what's happening with my deal?"

## The Automation Layer

This is where it gets good. The portal doesn't just display information — it acts on it.

**Automated emails** fire at each stage transition. Customer signed the LOA? They get a confirmation email and a request for their information. Quotes are ready? They get a notification with a link to their deal room. Contract is confirmed? Celebration email with next steps.

**HubSpot sync** keeps the CRM up to date. Every stage change, every document, every interaction gets logged in HubSpot automatically. The broker doesn't have to update two systems.

**Reminder sequences** catch things that slip through the cracks. LOA sent but not signed after 3 days? Automatic nudge. Information requested but not provided after a week? Gentle follow-up. No deal falls through because someone forgot.

## The Tech Behind It

I built this with a deliberately simple stack:

- **Vercel serverless functions** for the backend — no servers to manage, scales automatically
- **Supabase** for the database and authentication — real-time updates, row-level security
- **Vanilla HTML/JS** for the frontend — no React, no framework overhead, just fast pages
- **Signable API** for electronic signatures
- **HubSpot API** for CRM sync
- **Resend** for transactional emails

Why vanilla HTML/JS instead of React? Because the brokers using this aren't tech people. The pages need to load instantly, work on any device, and never break. Simplicity is a feature.

The whole thing runs on Vercel's free tier for now. Serverless functions handle the API calls, Supabase handles data and auth, and static pages handle the UI. Total infrastructure cost: basically nothing.

## What It Actually Changed

Before the deal room:
- Average time from LOA to quote: **12 days**
- Follow-up emails sent manually per deal: **8-10**
- Deals lost to "went quiet": **~30%**

After the deal room:
- Average time from LOA to quote: **5 days**
- Follow-up emails sent manually per deal: **0** (all automated)
- Deals lost to "went quiet": **~12%**

The biggest win isn't even the numbers. It's that brokers actually enjoy the process now. They open their dashboard, see their pipeline, know exactly what needs attention. No more digging through emails wondering what they've missed.

## Lessons for Anyone Building Internal Tools

**Start with the workflow, not the tech.** I mapped out every step of the brokerage process on paper before writing a line of code. The tool mirrors how people actually work, not how I thought they should work.

**Make the default action the right action.** Brokers don't have to remember to send follow-ups or update the CRM. The system does it. Design for laziness — in the best possible way.

**Keep the frontend boring.** This isn't a consumer app that needs to look trendy. It needs to work reliably for people who aren't technical. Vanilla HTML loads in milliseconds and never has dependency conflicts.

**Integrate with what people already use.** We didn't replace HubSpot or email — we connected to them. The deal room is the new interface, but HubSpot is still the source of truth for management reporting.

## What's Next

I'm adding AI-powered quote analysis — feeding supplier tariffs into Claude to flag the best deals and explain the trade-offs in plain English. Also working on a customer-facing chatbot that can answer "where's my quote?" without the broker having to pick up the phone.

But honestly, the biggest impact came from the simplest features. Automated follow-ups and a clear pipeline view. Sometimes you don't need AI — you just need to stop using spreadsheets.

---

*I build tools for the companies I run — energy brokerage, localisation, heritage tech. If you're interested in how AI and simple automation can transform old-school industries, follow along at [liam-james.uk](https://liam-james.uk).*