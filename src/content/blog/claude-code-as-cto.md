---
title: "How I Use Claude Code as a Fractional CTO"
description: "I'm not a developer. But with Claude Code, I've built four production apps, an 8-agent automation system, and a deal room portal."
pubDate: 2026-06-02
tags: ["claude-code", "building", "vibe-coding"]
draft: true
---

I need to make something clear upfront: I am not a developer. My background is sales and go-to-market. I've spent my career helping companies figure out how to sell things, not how to build them.

And yet, in the past year, I've built four production applications, an 8-agent GTM automation system, a deal room portal, and a heritage mapping platform. All deployed. All working. All being used by real people.

The reason is Claude Code. And I think it's going to change who gets to build software.

## What Claude Code Actually Is

For anyone who hasn't used it: Claude Code is Anthropic's CLI tool that lets you have a conversation with Claude directly in your terminal. You describe what you want, it writes the code, you iterate together.

It's not a code autocomplete tool like Copilot. It's not a chatbot you paste code snippets into. It's more like having a very patient, very competent senior developer sitting next to you who never gets annoyed when you ask "but why does it work that way?"

You say "I need a serverless API endpoint that takes a GitHub repo URL, checks if it has a package.json, and returns a list of dependencies." Claude Code writes it. You run it. If something breaks, you paste the error message. It fixes it. You iterate.

## My Workflow

Here's what a typical building session looks like for me:

**1. I describe the feature in plain English.**
Not in technical jargon. Just "I need users to be able to upload a photo and pin it to a location on the map." Claude Code understands intent, not just syntax.

**2. Claude Code writes the implementation.**
It creates the files, writes the functions, handles the imports. It often suggests approaches I wouldn't have thought of — "Should we use Supabase Storage for this and generate signed URLs?" Yes. Good idea. Do that.

**3. I test it.**
This is where I add value. I know what the user experience should feel like. I click through it, find the rough edges, and describe what's wrong. "When I upload a large photo it takes forever and there's no loading indicator."

**4. We iterate.**
Back and forth until it works properly. Sometimes this takes 5 minutes. Sometimes it takes an hour. But it always progresses.

**5. I deploy.**
Usually to Vercel or similar. Claude Code helps with deployment configs too.

## What I've Built

This isn't theoretical. Here's what's running in production right now:

**Globalize GTM Orchestra** — 8 AI agents that mine GitHub for leads, score them, and run email campaigns. Node.js, Claude API, Smartlead integration, HubSpot sync. Processes thousands of repos daily.

**Edge Energy Deal Rooms** — a portal where energy brokerage customers track their deals from LOA to contract. Vercel serverless, Supabase, Signable integration. Used by actual brokers managing real pipelines.

**Saknes Heritage Map** — an interactive map for the Latvian diaspora to pin family properties, ancestors, and heritage items on a 1935 topographic map. React, Leaflet, Supabase.

**Gotomar** — a GTM strategy tool for technical founders. Next.js, Prisma, Stripe, AI-powered analysis. Generates actionable go-to-market playbooks.

A year ago, building any one of these would have required hiring a developer or a small agency. The cost would have been tens of thousands of pounds. The timeline would have been months.

I built all four.

## The Honest Limitations

I'd be lying if I said Claude Code makes everything easy. Here's what's genuinely hard:

**You need to understand architecture.** Claude Code can write any individual piece of code, but you need to know how the pieces fit together. What should be a serverless function vs a database trigger? When do you need a queue vs a webhook? This isn't stuff Claude Code teaches you — you have to learn it through building and breaking things.

**You can't be lazy with requirements.** "Make it work better" is a useless prompt. "The email sending function times out when processing more than 50 leads because it's sequential — can we make it process them in parallel batches of 10?" That gets results.

**Debugging is still hard.** When something breaks in production and the error message is cryptic, you're in the same boat as any developer. Claude Code helps, but you still need patience and systematic thinking.

**You'll build technical debt.** When you're moving fast and don't fully understand every line of code, you accumulate shortcuts and suboptimal patterns. That's fine for now, but it'll need cleaning up eventually.

## The Multiplier Effect

Here's what fascinates me about this: I'm one person, with a laptop, in Latvia, running four companies. Not because I'm working 80-hour weeks — I'm really not — but because I have leverage.

Claude Code lets me build the tools my companies need instead of paying someone else to build them (slowly) or settling for off-the-shelf solutions that don't quite fit.

Need a custom CRM integration? Built it Tuesday afternoon.

Need an automated reporting pipeline? Done by end of day.

Need a customer portal? Give me a week.

This isn't superhuman productivity. It's just removing the bottleneck. Previously, every technical need was a project: scope it, find a developer, brief them, review, iterate, pay. Now it's a conversation with Claude Code.

## Not Replacing Developers

I want to be clear about this because it matters: Claude Code is not replacing developers. What it's doing is enabling founders who can't yet afford a development team to build and validate their ideas.

Once something works and has traction, you absolutely want proper developers involved. They'll refactor my Claude Code-built prototypes, add proper test coverage, handle edge cases I haven't thought of, and build things to scale.

What Claude Code gives you is the ability to get to that point. To build a working product, find customers, generate revenue — and then hire developers with that revenue. It collapses the gap between "I have an idea" and "I have something people are using."

For a sales person like me, that's genuinely life-changing.

## If You're Thinking About Trying It

Start small. Don't try to build a full SaaS product on day one. Build a script that automates something annoying in your workflow. Then build something slightly bigger. Get comfortable with the rhythm of describing, iterating, deploying.

And don't be embarrassed about not knowing technical things. I still Google what "middleware" means sometimes. That's fine. The point isn't to become a developer — it's to become someone who can build what they need.

---

*I write about building companies with AI tools, from the perspective of someone who definitely isn't a developer. More at [liam-james.uk](https://liam-james.uk).*