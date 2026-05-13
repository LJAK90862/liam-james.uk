---
title: "How I Mine GitHub for Sales Leads Using AI"
description: "I built an AI agent that crawls GitHub for potential customers using tool fingerprints, enrichment APIs, and quality scoring."
pubDate: 2026-05-22
tags: ["lead-gen", "ai-agents", "github"]
draft: false
---

I'm going to tell you something that sounds a bit dodgy at first but bear with me: I built an AI agent that crawls GitHub looking for potential customers.

Before you close the tab — it's all public data, the outreach is genuinely helpful, and the results have been surprisingly good. Let me explain how it works.

## Why GitHub?

If you sell to technical founders and developers, GitHub is the most honest data source on the internet. People don't exaggerate on GitHub. Their code is right there. You can see exactly what tools they use, how actively they're building, and whether they've got something real or just a weekend project.

Compare that to LinkedIn, where everyone is a "visionary thought leader" and you have no idea if they've actually shipped anything.

## Meet Dwarf

Dwarf is one of eight AI agents in my GTM system (I call the whole thing the Orchestra). Its job is simple: find GitHub repos that use specific tools, and extract the founder's details so we can reach out.

Right now, Dwarf runs 7 campaigns, each targeting users of a different tool:

1. **Claude** — founders building with Anthropic's API
2. **TMS** — translation management system users
3. **Lovable** — the AI app builder
4. **v0** — Vercel's UI generation tool
5. **Cursor** — the AI code editor
6. **Replit** — the online IDE
7. **Supabase** — the open-source Firebase alternative

Each of these represents a different flavour of technical founder who might need what we sell at Globalize (localisation services for apps and SaaS products).

## How Fingerprint Detection Works

This is the clever bit. Every tool leaves fingerprints in a codebase. Dwarf knows what to look for.

**Package.json patterns:**
If someone has `@anthropic-ai/sdk` in their dependencies, they're using Claude. If they've got `@supabase/supabase-js`, they're on Supabase. Simple as that.

**README patterns:**
A lot of developers mention their stack in their README. "Built with Lovable" or "Powered by Cursor" — Dwarf scans for these phrases.

**Config files:**
Cursor has `.cursorrules`, Replit has `replit.nix`, Supabase has `supabase/config.toml`. These are dead giveaways.

**Framework indicators:**
Sometimes it's a combination of signals. A Next.js project with certain Vercel-specific configs and v0-generated component patterns suggests they're in that ecosystem.

Dwarf doesn't just pattern-match blindly though. Claude's API helps it make judgment calls — is this an actual product or a tutorial repo? Is it actively maintained? Does it look like a solo founder or a larger team?

## The Enrichment Layer

Finding a repo is only half the job. You also need to find the person behind it.

Dwarf pulls the repo owner's profile, checks for a website, and then passes the domain to Hunter.io for email enrichment. We get the founder's name, email, company, and role — all from public data.

The enrichment rate isn't 100%, obviously. Some repos are anonymous, some founders don't have public emails, some domains don't have discoverable contacts. But across 9,000+ repos scanned, we've pulled out 1,095 qualified leads. That's a solid hit rate for zero-cost lead generation.

## The Daily Rhythm

Dwarf runs daily via GitHub Actions. Every morning, it:

1. Searches GitHub's API for new repos matching each campaign's criteria
2. Filters out forks, tutorials, archived repos, and anything that doesn't look like a real product
3. Runs fingerprint detection on promising repos
4. Enriches the founder's contact details
5. Scores the lead (another agent, Qualy, handles this)
6. Pushes qualified leads into Smartlead for email sequences

By the time I open my laptop, there are new leads sitting in the pipeline ready to go.

## The Numbers So Far

- **9,000+** repos scanned across all campaigns
- **1,095** qualified leads extracted
- **7** active campaigns running
- **~120** new leads per week on average

The Claude and Supabase campaigns are the strongest performers. Makes sense — those ecosystems have a lot of solo founders building real products who are exactly our target audience.

## The Ethics of All This

I think about this a lot, actually. Is it okay to scrape GitHub for sales leads?

Here's my honest take:

**It's public data.** Everything Dwarf accesses is publicly available on GitHub. No private repos, no hacking, no scraping behind authentication.

**The outreach isn't salesy.** Our emails aren't "BUY OUR THING." They're more like "We found your project, tested it, and here's what we noticed about the user experience in other languages." We lead with value.

**People can opt out.** Every email has an unsubscribe link. We respect it immediately.

**We're not selling junk.** If someone has built a product with Claude and they're looking to expand internationally, localisation is genuinely useful to them. We're not pushing something irrelevant.

Could someone use the same technique for spammy, irrelevant outreach? Sure. But that's true of any lead generation method. The tool isn't the problem — it's how you use it.

## What I'd Do Differently

If I were starting again, I'd spend more time on the scoring model upfront. Early on, Dwarf was finding lots of repos but many weren't real products — they were experiments, coursework, or abandoned side projects. Adding better quality filters earlier would have saved time.

I'd also add more data sources beyond GitHub. GitLab, Bitbucket, even Product Hunt and Indie Hackers have similar signals you could mine.

## Want to Build Something Similar?

The core stack is pretty accessible:

- **GitHub API** for repo discovery and data
- **Claude API** for intelligent filtering and analysis
- **Hunter.io** for email enrichment
- **Node.js** for the agent logic
- **GitHub Actions** for scheduling

The hardest part isn't the code — it's designing the fingerprint patterns and quality filters that separate real leads from noise. That's where you'll spend most of your time, and it's worth getting right.

---

*I'm building AI-powered GTM tools at [Gotomar](https://liam-james.uk/gotomar) and writing about the process. If you're a technical founder trying to figure out go-to-market, check it out or follow along at [liam-james.uk](https://liam-james.uk).*