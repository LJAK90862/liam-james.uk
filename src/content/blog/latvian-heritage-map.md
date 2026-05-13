---
title: "Building a Heritage Map for the Latvian Diaspora"
description: "The story behind Saknes — an interactive heritage platform layered on Latvia's 1935 topographic map."
pubDate: 2026-05-29
tags: ["saknes", "side-project", "latvia"]
draft: true
---

This one's personal.

My wife is Latvian. I live in Latvia. And the more time I spend here, the more I realise how much history has been scattered by the 20th century — deportations, occupations, emigration. Entire families split across continents, their stories living in shoe boxes and fading memories.

So I'm building Saknes. It means "roots" in Latvian.

## What Saknes Actually Is

At its core, Saknes is an interactive heritage map. But calling it a map undersells it. It's more like a digital family museum, layered on top of Latvia's actual geography.

The base layer is a 1935 topographic map of Latvia — the last detailed survey before the Soviet occupation changed everything. Place names were altered, farms were collectivised, communities were displaced. The 1935 map shows Latvia as it was, before all of that.

On top of that map, users can pin:

**Properties** — the family farmstead, the house in Riga, the summer cottage that was confiscated. Each property can have photos, documents, stories, and a timeline of who lived there and what happened.

**Ancestors** — people connected to places. Birth records, photos, immigration documents, personal stories. Not just names and dates, but the human stuff — what grandmother used to cook, what the farm looked like in winter, the letter they sent from the refugee camp in Germany.

**Heritage items** — physical objects that carry meaning. The embroidered belt, the family Bible, the wooden chest that made it across the Atlantic. Each item can be photographed, described, and connected to the people and places it belongs to.

## Why It Matters

Latvia's population is about 1.8 million. But the Latvian diaspora — people of Latvian heritage living abroad — is enormous relative to that. There are significant communities in the US, Canada, Australia, the UK, Sweden, Germany, and Brazil.

The 1940s and 1950s were catastrophic. Soviet deportations sent tens of thousands to Siberia. Others fled westward ahead of the Red Army, ending up in displaced persons camps before emigrating to wherever would take them. Families were split. Properties were seized. Records were destroyed or scattered across Soviet archives.

The result, two or three generations later, is that many people of Latvian heritage have fragments of their family story but no way to piece them together. Grandmother mentioned a farm near Cesis, but where exactly? Great-uncle was deported in 1949, but what happened to the family home? Cousins emigrated to Australia — did anyone stay behind?

Saknes is meant to be the place where those fragments come together.

## The Community Layer

This is what makes it more than a genealogy app. Saknes has a community layer where users can discover connections.

Imagine you've pinned your grandmother's farm on the map. Someone else — maybe a distant relative, maybe a neighbour's descendant — has pinned the farm next door. Suddenly you can see who else has roots in the same parish, the same village, the same road.

The platform includes:

- **Connections** — discover people researching the same areas or families
- **Chat** — direct messaging between users who share heritage connections
- **Shared history** — community-contributed information about parishes, villages, and historical events
- **Collaborative timelines** — multiple family members can contribute to the same property's story

## The 1935 Map

I need to talk about this map because it's genuinely beautiful and historically significant.

The Latvian Military Topographic Service produced a comprehensive survey of the entire country in the 1930s. It shows every farmstead, every road, every forest, every lake — labelled with the Latvian place names that were in use at the time.

Many of these place names were changed during the Soviet period. Some farms simply ceased to exist as separate entities when agriculture was collectivised. Villages were merged, renamed, or abandoned.

For diaspora Latvians trying to find their family's farm, this map is often the key. "Grandmother said the farm was called Liepkalni" — and there it is on the 1935 map, exactly where she said it would be.

We're using this map as a tile layer in Leaflet, the open-source mapping library. Users can toggle between the 1935 historical map and modern satellite imagery, which is a powerful experience — seeing what was there then versus what's there now.

## The Tech Stack

Saknes is built with:

- **React** for the frontend — it's a fairly interactive application with lots of state management
- **Leaflet** for the mapping — open-source, lightweight, excellent tile layer support
- **Supabase** for the backend — database, authentication, real-time subscriptions, file storage
- **Row-level security** in Supabase to ensure people can only edit their own content while sharing what they choose to

The Supabase choice was deliberate. Heritage data is sensitive — family stories, locations of properties, personal documents. Row-level security means the database itself enforces access controls, not just the application code. Even if there's a bug in the frontend, your private family data stays private.

File storage for photos and documents also runs through Supabase Storage, with the same security model. Upload a scan of your grandmother's deportation notice? It's encrypted at rest and only accessible to you and people you've explicitly shared it with.

## The Personal Angle

I should be honest about why I'm building this. It's not a business play — at least not primarily. My wife's family has exactly these fragmented stories. Photos in a drawer, a vague memory of where the family farm was, relatives in America they've lost touch with.

When we started trying to piece it together, we used a combination of Google Maps, a genealogy website, Facebook groups, and a physical visit to the Latvian State Archives. It was messy and disconnected. Every family doing this research is essentially starting from scratch.

Saknes is the tool I wished existed when we started that journey.

## What's Next

The immediate roadmap:

- **Archive integration** — connecting to Latvian State Archive records so users can link official documents to their family pins
- **Translation layer** — the app needs to work in Latvian, English, and Russian (many diaspora Latvians speak one or more of these)
- **Mobile app** — people often discover heritage items or visit ancestral locations while travelling, so mobile capture is important
- **DNA integration** — connecting with services like 23andMe to suggest potential family connections

The longer-term vision is a comprehensive, community-maintained map of Latvian heritage — a living document that grows as families contribute their pieces of the puzzle.

## If This Resonates

If you're part of the Latvian diaspora, or if you know someone who is, I'd love to hear from you. We're looking for early users who want to start mapping their family's history. The platform is in active development and every bit of feedback shapes what we build next.

And if you're from a different diaspora community and thinking "we need this too" — you're right, and I'd love to talk about how the model could adapt.

---

*Saknes is a labour of love. You can learn more at [liam-james.uk](https://liam-james.uk) or reach out to me directly. I'm always happy to talk about heritage, Latvia, or building things that matter.*