---
title: "I Built an 8-Agent GTM System. Here's What Each One Does."
description: "How I built an 8-agent AI system that sources leads, scores them, writes personalised outreach, and runs campaigns on autopilot."
pubDate: 2026-05-19
tags: ["ai-agents", "gtm", "automation"]
draft: false
---

Most founders I talk to are using AI to write emails or summarise meeting notes. Which is fine. But I wanted to see what happens when you give AI agents actual jobs — not tasks, jobs — and let them run.

So I built what I call the Orchestra. Eight AI agents, each with a single responsibility, passing work between them like a relay team. It's not theoretical. It's running right now across 7 campaigns, and it's sourced over 1,095 leads in the past few weeks.

Here's how it works.

## The Problem I Was Solving

I run Globalize, a localisation company. Our best customers are technical founders who've built something with modern tools — Claude, Cursor, Lovable, v0 — and now need to take it global. But finding those founders manually? Painful. You're scrolling LinkedIn, guessing who might be a fit, sending messages into the void.

I wanted a system that could find the right people, check they're worth talking to, write something relevant, and follow up — all without me sitting there doing it.

## Meet the Orchestra

### 1. Dwarf (The Miner)

Dwarf's job is simple: dig through GitHub and find repos that use specific tools. It looks at package.json files, README patterns, config files — the fingerprints that tell you what someone built their product with. Right now it's mining for users of Claude, Cursor, Lovable, v0, Replit, Supabase, and TMS.

It doesn't just grab any repo. It filters for quality — looking for actual products, not tutorials or forks.

### 2. Scout (The Watcher)

Scout monitors the repos Dwarf finds. It watches for new commits, stars, and activity patterns. A repo that was last updated 8 months ago probably isn't worth reaching out to. A repo that's been getting daily commits? That founder is actively building. Scout flags the hot ones.

### 3. Qualy (The Scorer)

Not every lead is worth an email. Qualy scores each one based on a bunch of signals: repo activity, whether they have a live product, team size indicators, and how well they match our ideal customer profile. It spits out a score, and only the ones above the threshold move forward.

### 4. Angie (The Nudger)

Angie handles the gentle follow-ups. Not the "just checking in" kind that everyone hates, but context-aware nudges. She knows what the lead's product does, what stage they're at, and what might actually be useful to them. Each message references something specific about their project.

### 5. Eddy (The Reactivator)

Some leads go cold. They opened an email but didn't reply. They visited the site but didn't book. Eddy's job is to re-engage those people with a different angle. Maybe the first approach was about localisation, and Eddy tries a GTM angle instead. Fresh context, fresh approach.

### 6. Wingman (The Booker)

When someone shows buying signals — replies, clicks, visits — Wingman steps in to make booking a call as frictionless as possible. It handles the scheduling dance, suggests times, and gets the meeting on the calendar.

### 7. Rex (The Analyst)

Rex watches everything and reports back. Open rates, reply rates, which campaigns are performing, which subject lines land. It pipes daily summaries into Discord so I can see what's happening without logging into five different dashboards.

### 8. Strat (The Planner)

Strat takes Rex's analysis and suggests adjustments. Should we increase volume on the Lovable campaign because it's converting well? Should we pause the Replit one because the leads aren't qualifying? Strat makes recommendations. I make the final call.

## How They Hand Off

This is the bit that makes it actually work. Each agent doesn't operate in isolation — they pass data to each other through a shared pipeline.

Dwarf finds a repo. Scout enriches it with activity data. Qualy scores it. If it passes, the lead goes into Smartlead for email sequences. Angie and Eddy handle follow-ups based on engagement signals. Wingman jumps in when there's intent. Rex tracks everything. Strat adjusts the playbook.

The whole thing runs on Node.js, with Claude's API doing the thinking, Smartlead handling email delivery, HubSpot as the CRM, and Discord for notifications. GitHub Actions runs the daily mining jobs.

## The Numbers

Across 7 campaigns so far:

- **9,000+ repos** scanned
- **1,095 qualified leads** generated
- **7 active email campaigns** running simultaneously
- **4 sending domains** with proper warmup

It's not a massive operation. It's one person with a laptop in Latvia running a system that would normally need a 3-4 person SDR team.

## What I've Learned

The biggest lesson is that AI agents work best when they have narrow, well-defined jobs. The temptation is to build one mega-agent that does everything. Don't. Each agent in the Orchestra does one thing, does it well, and passes the baton.

The second lesson is that the handoff logic matters more than the individual agents. Getting Dwarf to find repos is straightforward. Getting the whole pipeline to flow smoothly from discovery to booking — that's where the real engineering is.

And the third lesson: you still need a human in the loop. Strat suggests changes, but I decide. Angie drafts messages, but I review the templates. The system handles the volume; I handle the judgment.

## What's Next

I'm working on tightening the feedback loops. Right now, if a campaign performs well, I manually increase its budget. I want Strat to do that automatically within guardrails I set. I also want to add more campaign types beyond email — LinkedIn, community engagement, content syndication.

But honestly? The current setup already does more than I expected. If you're a founder doing outbound manually, there's a better way.

---

*I write about building GTM systems with AI, running companies from Latvia, and the things I'm learning along the way. You can find more at [liam-james.uk](https://liam-james.uk) or follow what I'm building on GitHub.*