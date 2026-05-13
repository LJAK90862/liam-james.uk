---
title: "7 Outbound Campaigns Running on Autopilot"
description: "How I set up 7 automated outbound campaigns targeting different tool ecosystems, with daily mining and personalised sequences."
pubDate: 2026-06-05
tags: ["outbound", "automation", "gtm"]
draft: true
---

A week ago I had zero outbound campaigns running. Now I have seven, all targeting different tool ecosystems, all automated, all sending daily.

Here's what I set up, what's working, and what I've learned so far.

## The Strategy

Most outbound fails because it's generic. "Hi {first_name}, I noticed your company {company_name} and thought you might be interested in..."

Delete. Everyone deletes those.

My approach is different. Each campaign targets founders who use a specific tool — Claude, Cursor, Lovable, v0, Replit, Supabase, or TMS — and the outreach references their actual product. Not in a creepy way. In a "we genuinely looked at what you built" way.

The theory: if you know exactly what someone is building and can say something specific about it, you'll stand out from the 47 other cold emails they got that day.

## The 7 Campaigns

### 1. Claude Builders
Targeting founders using Anthropic's Claude API. These are usually building AI-powered products — chatbots, analysis tools, automation platforms. Our angle: their product is great, but does it work in other languages? Most AI products are English-only, and that's a massive market gap.

### 2. TMS Users
Translation management system users already care about localisation — they're just doing it in-house or with a different provider. Our angle: we can do it better, faster, or more cost-effectively.

### 3. Lovable Projects
Lovable lets you build apps from prompts. The founders using it are typically non-technical (like me) who've built something and are now trying to grow it. Our angle: you've built the product, now let's make it accessible globally.

### 4. v0 Builders
Vercel's v0 generates UI components from descriptions. People using it are usually building web apps quickly. Similar angle to Lovable — you've moved fast, now let's help you scale internationally.

### 5. Cursor Users
Cursor is an AI code editor, and its users tend to be more technical but still move fast. These founders often have well-built products that could expand to new markets with localisation.

### 6. Replit Builders
Replit's community includes a lot of indie hackers and student founders. Smaller projects sometimes, but high energy and open to new ideas. Our angle is educational — "here's how localisation could help you reach more users."

### 7. Supabase Projects
Supabase users are building serious applications with proper backends. These are often the most ready for internationalisation because their architecture already supports it. Our angle is practical — "your stack already supports i18n, here's how to activate it."

## The Email Sequences

Each campaign has a 3-email sequence, spaced about 4 days apart.

**Email 1: The Value Lead**
We reference their specific project and offer a genuine observation. "We looked at [project name] and noticed it's only available in English. Given your user growth signals, here's what expanding to even 2-3 languages could do for your addressable market."

No pitch. No CTA to buy anything. Just a useful observation.

**Email 2: The Case Study**
If they didn't reply to the first, we share a relevant example. "A similar project in the [same tool] ecosystem expanded to 5 languages last quarter and saw a 40% increase in non-English signups."

Still no hard sell. Just social proof.

**Email 3: The Soft Ask**
"If internationalisation is on your roadmap at all — even for next year — happy to share what we've learned working with technical founders. No pitch, just 15 minutes."

That's it. Three emails. If they don't engage after three, they go into a much longer cooldown before any reactivation.

## The Sending Infrastructure

This part matters more than people think.

**4 sending domains.** Not our main domain — separate domains that forward to us. This protects our primary domain reputation if anything goes sideways.

**Warmup strategy.** Each domain went through a 2-week warmup period before sending any campaigns. Gradually increasing send volume, building reputation with email providers.

**Smartlead** handles the sending, warmup, and reply management. It's not cheap, but it's good. Automatic warmup, inbox rotation, reply detection, and analytics.

**Daily limits.** Each domain sends a maximum of 30-40 emails per day. Low volume, high quality. We're not blasting 10,000 emails — we're sending a few hundred per week total across all campaigns.

## The Daily Mining Pipeline

Every morning, a GitHub Action triggers Dwarf (our mining agent) to search for new repos matching each campaign's criteria. The pipeline:

1. **Mine** — search GitHub API for new matching repos
2. **Fingerprint** — verify they actually use the target tool
3. **Filter** — exclude forks, tutorials, abandoned projects
4. **Enrich** — find the founder's contact details via Hunter
5. **Score** — qualify the lead based on activity, product maturity, team size
6. **Load** — push qualified leads into the appropriate Smartlead campaign

By mid-morning, new leads are entering the sequences without me doing anything.

## The Numbers (So Far)

It's early days, but here's where things stand:

- **Total leads loaded:** 1,095
- **Emails sent (across all campaigns):** ~2,400
- **Average open rate:** 52%
- **Average reply rate:** 4.2%
- **Positive replies:** 38
- **Meetings booked:** 12

The open rate is solid. The reply rate is decent for cold outbound. And 12 meetings from a system I set up in a week and barely touch? I'll take that.

## What's Working

**Specificity wins.** The campaigns that reference the founder's actual project by name perform dramatically better than generic ones. "We looked at your recipe-sharing app built with Supabase" beats "We noticed your company" every single time.

**Claude and Supabase campaigns lead.** These ecosystems have the most solo founders building real products. The lead quality is highest there.

**Short emails perform better.** Our best-performing emails are under 100 words. Say something specific, offer value, stop talking.

## What's Not Working

**Replit campaign underperforms.** The leads tend to be earlier-stage or student projects. Not a bad thing — just not ready for paid localisation yet.

**Second emails get ignored.** Our Email 2 (case study) has a much lower open rate than Email 1 or 3. People either engage on the first email or skip to the third. Might need to rethink the middle of the sequence.

**Weekend sends are dead.** We tried sending on Saturdays. Open rates cratered. Now all campaigns pause Friday evening and restart Monday morning.

## What I'd Tell Someone Starting Outbound

**Pick one ecosystem first.** Don't try to run 7 campaigns simultaneously from day one. Pick the one where you have the strongest angle, prove it works, then expand.

**Invest in warmup.** Seriously. Two weeks of warming up your sending domains feels like wasted time when you're eager to start. It's not. Skip it and your emails go straight to spam.

**Write emails you'd actually want to receive.** If it reads like marketing, rewrite it. If it starts with your company name, rewrite it. If it doesn't mention anything specific about the recipient, rewrite it.

**Track everything.** Open rates, reply rates, unsubscribes, bounces, spam complaints. One bad campaign can poison your domain. Watch the numbers daily at first.

---

*I'm documenting the build-out of this whole system at [liam-james.uk](https://liam-james.uk). If you're doing outbound and want to compare notes, I'm always up for a chat.*