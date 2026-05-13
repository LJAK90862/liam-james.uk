---
title: "AI Agents That Actually Do Things (Not Chatbots)"
description: "The difference between a chatbot and a real AI agent, with concrete examples from the 8-agent system I built."
pubDate: 2026-06-16
tags: ["ai-agents", "automation", "opinion"]
draft: true
---

I'm a bit tired of the phrase "AI agent."

Every week there's a new product that claims to be an "AI agent" and it turns out to be ChatGPT with a system prompt. You type something in, it types something back. That's a chatbot, mate. A good one, maybe, but still a chatbot.

An actual AI agent does things without you sitting there prompting it. It runs on a schedule. It makes decisions. It calls APIs. It moves data from one place to another. It acts.

I know this because I've built eight of them. Here's what real AI agents look like in practice.

## The Difference, Simply

A **chatbot** waits for you to say something, then responds.

An **agent** wakes up on its own, checks what needs doing, does it, and goes back to sleep.

That's really it. The key distinction is autonomy. A chatbot is reactive — it needs you. An agent is proactive — it works while you don't.

My agents run on cron jobs. Every morning at 7am, Dwarf wakes up and mines GitHub for new leads. Nobody prompts it. Nobody clicks a button. It just runs. When it finds leads, it passes them to the next agent in the chain. No human in the loop until there's a decision that actually needs human judgment.

## Real Examples from the Orchestra

Let me show you what agents that actually do things look like.

### Dwarf: Mines GitHub for leads

**Trigger:** Daily cron job via GitHub Actions
**What it does:** Searches GitHub's API for repos matching specific tool fingerprints. Analyses each repo using Claude to determine if it's a real product. Extracts the owner's details. Enriches contact info via Hunter.io. Pushes qualified leads into Smartlead.
**Decisions it makes:** Is this repo a real product or a tutorial? Is it actively maintained? Does it match our ICP? Should we include this lead or skip it?

No chat interface. No prompts. It runs, does its job, and posts a summary to Discord.

### Angie: Sends contextual follow-ups

**Trigger:** Webhook from Smartlead when a lead opens an email but doesn't reply
**What it does:** Pulls the lead's project details. Generates a follow-up email that references something specific about their product — not a generic "just checking in." Submits the email to Smartlead's queue.
**Decisions it makes:** What angle to take based on the lead's product type. Whether to mention localisation, GTM, or user growth. How much detail to include based on what we know about the lead.

Angie doesn't have a conversation with anyone. She generates emails based on context and sends them.

### Rex: Analyses campaign performance

**Trigger:** Daily cron job, evening
**What it does:** Pulls stats from all Smartlead campaigns. Calculates open rates, reply rates, bounce rates, and spam complaints. Compares performance across campaigns and time periods. Generates a summary report and posts it to Discord.
**Decisions it makes:** Which campaigns to flag as underperforming. Whether a change in open rates is a trend or noise. What specific metrics to highlight.

Rex is essentially a reporting analyst who works for free and never forgets to check the numbers.

## The Architecture

Most "AI agent" frameworks are overcomplicated. My agents are simple:

### The basics

Each agent is a Node.js script. It has a clear input (data from an API, a database query, a webhook payload), a processing step (usually involving Claude's API for the thinking part), and a clear output (data pushed to another API, a database update, a message sent).

That's it. No agent framework. No LangChain. No vector databases (unless you genuinely need retrieval, which most agents don't). Just code that runs, thinks, and acts.

### How they connect

**Cron jobs** for time-based triggers — "run every morning at 7."
**Webhooks** for event-based triggers — "run when a lead opens an email."
**API calls** for data flow — agents read from and write to Smartlead, HubSpot, GitHub, Hunter, and Discord.
**Claude API** for the thinking step — when an agent needs to make a judgment call, it asks Claude.

### The thinking step

This is where AI actually adds value. Without Claude, Dwarf would just be a GitHub scraper that returns every repo matching a keyword. With Claude, Dwarf can look at a repo and determine: "This is a recipe-sharing app built with Supabase. It has daily commits, 23 stars, and a live URL. The owner appears to be a solo founder in Germany. Quality score: 7/10."

That judgment call — is this repo worth reaching out to? — is the part that used to require a human. Now Claude does it at scale.

## Why Most "AI Agents" Are Just ChatGPT Wrappers

Here's what I see constantly:

**"AI sales agent"** — it's a chatbot that writes email drafts. You still have to send them.
**"AI research agent"** — it's a chatbot that summarises web pages. You still have to find them.
**"AI scheduling agent"** — it's a chatbot that suggests times. You still have to book them.

These are useful tools! I'm not knocking them. But they're not agents. They're assistants. The word matters because it sets expectations.

When I say I have agents running my GTM, I mean they're actually running it. Leads are being found, scored, emailed, and followed up — overnight, while I sleep, without me doing anything. That's agency.

The test is simple: **does it work when you're not watching?** If yes, it's an agent. If no, it's a tool.

## What Actually Works vs What's Hype

**Works: Narrow, well-defined tasks with clear inputs and outputs.**
Mining GitHub for leads. Sending follow-up emails based on engagement signals. Generating daily reports. Scoring leads against criteria. These are all things that benefit from AI judgment but don't require human creativity.

**Works: Pipelines where agents hand off to each other.**
Dwarf finds a lead, passes it to Qualy for scoring, Qualy passes qualified leads to Smartlead, Angie handles follow-ups when there's engagement. Each agent does one thing. The pipeline does the complex thing.

**Hype: General-purpose agents that "can do anything."**
Every demo looks amazing. In practice, they break on edge cases, hallucinate actions, and need constant supervision. A general agent that needs supervision isn't really an agent.

**Hype: Agents that make high-stakes decisions autonomously.**
I don't let my agents decide how much to spend, what to say in a final sales conversation, or whether to change our pricing. Those decisions need judgment that AI doesn't reliably have yet. My agents handle volume and routine; I handle strategy and judgment.

**Hype: Agent-to-agent conversations.**
Two LLMs talking to each other sounds cool in demos. In practice, they agree with each other, go in circles, or generate increasingly unhinged outputs. It's much more reliable to have agents communicate through structured data — JSON payloads, database records, API calls — not natural language conversations.

## How to Build Your First Real Agent

Start here:

1. **Pick a task you do every day that's boring and well-defined.** Checking analytics. Pulling data from one tool to another. Sending a summary to your team.

2. **Write a script that does the mechanical part.** API calls, data transformation, posting results somewhere. No AI needed yet.

3. **Add Claude for the judgment steps.** Where do you currently make a decision that requires looking at the data and thinking? That's where Claude goes.

4. **Put it on a cron job.** GitHub Actions is free for public repos and cheap for private ones. Set it to run daily. Walk away.

5. **Monitor for a week.** Check the outputs. Is Claude making reasonable decisions? Adjust the prompts. Tighten the criteria. Then trust it.

You'll have a real agent — one that does things while you sleep — in an afternoon.

---

*I write about building real AI agents, not theoretical ones. More about the Orchestra and how it works at [liam-james.uk](https://liam-james.uk).*