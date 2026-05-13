---
title: "From Idea to Deployed SaaS in One Session"
description: "I turned my GTM consulting frameworks into a working SaaS product in a single evening using Claude Code."
pubDate: 2026-06-09
tags: ["gotomar", "building", "claude-code"]
draft: true
---

I had a problem. I kept giving the same GTM advice to technical founders: figure out your positioning, define your ICP, plan your first 90 days. Over and over. Same frameworks, same questions, same outputs.

So one afternoon I thought — what if I turned this into a tool?

By the end of that evening, Gotomar was live. A working SaaS product. Sign up, answer some questions about your product and market, get an AI-generated go-to-market playbook. Deployed, with payments, an admin panel, and a waitlist.

Here's how that happened.

## The Irony

I should flag the irony immediately: I built a go-to-market tool using go-to-market knowledge. It's the one area where I'm not winging it. I've spent 15+ years helping companies figure out how to sell things. I've been a fractional CRO, a GTM advisor, run sales teams across multiple industries.

So when I say Gotomar generates "actionable GTM playbooks," I mean it generates the same playbooks I would create if you hired me as a consultant. The frameworks are mine. The AI just scales the delivery.

## The Build Session

I sat down with Claude Code and described what I wanted:

"I need a web app where technical founders answer questions about their product, target market, and current traction. Then AI analyses their answers and generates a go-to-market strategy document they can download as a PDF."

That's the brief. That's all I started with.

### The Stack That Emerged

Claude Code suggested (and I agreed with) this stack:

- **Next.js** — React framework, handles both frontend and API routes
- **Prisma** — database ORM, makes database work feel like writing normal code
- **PostgreSQL** — the database itself, hosted on Supabase
- **Stripe** — payments, because I wanted to charge for the full reports
- **OpenAI API** — for generating the strategy analysis (yes, I use Claude for building and OpenAI for some product features — use whatever works best for each job)

### What We Built, Step by Step

**Hour 1: The intake form.**
A multi-step questionnaire that asks about your product, your target customer, your current traction, your pricing model, and your competitive landscape. Each question is designed to extract the information I'd ask in a consulting call.

**Hour 2: The AI analysis engine.**
This is the brain. It takes the questionnaire responses and generates a structured GTM playbook covering: positioning, ideal customer profile, channel strategy, first 90-day plan, messaging framework, and key metrics to track. The prompts encode my actual consulting frameworks.

**Hour 3: PDF generation and the admin panel.**
Users get their playbook as a downloadable PDF report. Clean, professional, something you could show to a co-founder or investor. The admin panel lets me see all users, their submissions, and their generated reports.

**Hour 4: Stripe integration and deployment.**
Free tier gives you a summary. Paid tier gives you the full report. Stripe Checkout handles the payment flow. Webhooks update the user's access level. Deployed to Vercel.

**Cleanup: Waitlist and landing page.**
A landing page explaining what Gotomar does, with a waitlist for people who aren't ready to try it yet. Email capture, basic analytics.

Was it really one session? Mostly. I did some polish and bug fixes the next morning. But the core product — from zero to "people can sign up and pay" — was done in an evening.

## What the Output Looks Like

A Gotomar playbook isn't a generic "10 steps to go-to-market" blog post. It's specific to the founder's situation.

If you tell it you've built a developer tool with 50 GitHub stars and no revenue, it'll give you a very different strategy than if you tell it you've built a B2B SaaS with 10 paying customers and $2k MRR.

The playbook covers:

- **Positioning statement** — one sentence that explains what you do, for whom, and why it matters
- **ICP definition** — who your first 10 customers should be, specifically
- **Channel strategy** — where to find those customers (hint: it's often not where you think)
- **Messaging framework** — how to talk about your product at each stage of the funnel
- **90-day action plan** — week by week, what to focus on
- **Metrics** — what to measure and what "good" looks like at your stage

## Lessons from Building This Fast

### Ship fast, don't over-engineer

Gotomar v1 doesn't have user accounts with full profile management. It doesn't have a team collaboration feature. It doesn't have A/B testing on the questionnaire. None of that matters yet.

It has the one thing that matters: you put in your details, you get a useful strategy out. Everything else can wait until I know people actually want this.

### Let AI handle the boilerplate

About 70% of the code in Gotomar is boilerplate — form handling, API routes, database schemas, Stripe webhook processing, PDF layout. None of this is novel. None of it requires creative thinking. It's plumbing.

Claude Code is brilliant at plumbing. It writes the Prisma schema, creates the API endpoints, handles the Stripe integration — all of it production-quality, first time. That frees me up to focus on the 30% that actually matters: the questions we ask and the quality of the analysis.

### The domain expertise is the moat

Anyone could build the same technical stack. Next.js, Prisma, Stripe, AI API calls — it's not rocket science. What they can't easily replicate is 15 years of GTM consulting experience encoded into the prompts and frameworks.

This is the thing I keep telling technical founders: your moat isn't your code. It's your understanding of the problem. The code is just the delivery mechanism.

### Charge from day one

I debated making Gotomar completely free to start. But charging, even a small amount, does two things: it filters for people who are serious about their GTM, and it validates that the product has real value. Free users give polite feedback. Paying users give honest feedback.

## What's Next

I'm iterating based on real usage now. The biggest requests so far:

- More specific channel recommendations (not just "try Twitter" but "here are 5 specific subreddits where your ICP hangs out")
- Competitive analysis integration
- Ongoing strategy updates as the founder's situation changes (not just a one-time report)

The beauty of building with Claude Code is that adding features is fast. I can describe the feature, build it, deploy it, and see if anyone uses it — all in an afternoon.

## The Meta Lesson

The real lesson from Gotomar isn't about the tool itself. It's that the gap between "I know how to do this" and "I've built a product that does this" has collapsed to basically nothing.

If you have expertise — real, earned expertise in any domain — you can now package it into a product in hours, not months. You don't need a technical co-founder. You don't need to learn to code from scratch. You need Claude Code and a clear picture of the problem you're solving.

That's what I keep telling founders. Stop looking for a CTO. Start building.

---

*Gotomar is live at [liam-james.uk/gotomar](https://liam-james.uk/gotomar). If you're a technical founder figuring out your go-to-market, give it a try. And if you just want to follow the journey, [liam-james.uk](https://liam-james.uk) is where I write about all of this.*