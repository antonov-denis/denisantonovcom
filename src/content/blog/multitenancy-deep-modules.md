---
title: "Multitenancy: a case for deep modules"
description: "How a sprawl of per-product configuration became a single deep module."
type: case-study
pubDate: 2026-06-12
---

Multitenancy has a quiet way of multiplying your code. The premise is innocent enough — one page, served to several products, each with its own data and its own behaviour. But the moment you start configuring those differences, the configuration itself becomes the system, and it tends to grow in the worst direction.

This is a story about one such mess, and about the principle that got me out of it: deep modules with thin interfaces — an idea I'd been chewing on for a while, finally with the right problem to apply it to.

## The shape of the problem

We had a handful of pages fully shared across six products. Same page, six faces. To make one page behave correctly for six tenants, it was assembled from configuration — the SSR layer (the backend of the frontend) needed its own config, and the client needed its own. So every page carried two config files per product, composed into a server page-config and a client page-config, and resolved at request time from the host the product was served on.

The arithmetic is the first punchline. Roughly fourteen configuration files for a *single* shared page. Six shared pages. Eighty-four files in total.

And this is the important part: they weren't simply duplicates you could delete. The tenants genuinely differ, and the configuration carried real logic — runtime decisions that depend on user state, conditions that resolve differently per product, branches that have to be made on every request. So the eighty-four files were the worst of both worlds: heavily repetitive in shape, yet tangled up with real complexity, so you couldn't dedupe them blindly. The sameness and the genuine difference were knotted together in the same place.

## Why this stays shallow

The instinct here is to reach for composition — small config objects, wired together, imported and merged. It feels modular. But it produces a *shallow* module: one where the interface is about as complicated as the thing it's hiding. You haven't buried any complexity, you've just spread it across more files and added the cost of wiring them together. Every change meant touching a scattering of objects and trusting that the same value, or the same condition, wasn't quietly diverging in three of them.

That's the real failure — not the file count, but the fact that all that surface area bought you nothing. The structure was fighting the shape of the problem instead of describing it.

## Deep modules, thin interfaces

The better idea is the opposite: the best modules are *deep*. They let a lot of functionality — and a lot of genuine complexity — sit behind a small, simple interface. Complexity should be pulled downward, into the implementation, and kept away from the surface that everyone else has to use. A good module is one where the caller gets a great deal and has to understand very little.

Held against that bar, the eighty-four files were the textbook anti-pattern: maximum interface, minimum hiding.

## Turning the problem ninety degrees

The fix was to stop slicing horizontally by product and slice vertically by domain instead.

A single base configuration holds the truest, most shared data — the head elements, the components that repeat everywhere, the values needed to make API calls like header values — resolved per tenant. Each page then *extends* that base and adds only what's genuinely domain-specific.

Crucially, the real per-tenant and per-user-state logic didn't disappear — it moved inward. The runtime decisions, the conditions that branch on user state, the places where tenants genuinely diverge: all of that now lives *inside* the module, resolved internally, instead of being scattered across the surface. The differences are still real and still made at runtime; they're just no longer your problem to track from the outside.

This is also where I made a deliberately unfashionable call: inheritance. "Favour composition over inheritance" is almost a reflex now, and often it's right. But composition was precisely what had kept this module shallow — lots of pieces, lots of wiring, lots of surface. What was actually true about this problem was that the tenants share a common base and diverge along clean, well-defined axes. Inheritance let that shared truth live in exactly one place, and let the interface stay narrow. Used where the domain genuinely is hierarchical, it's not the villain it's been cast as.

## The interface that's left

All of that work now happens inside a deep module, but what it exposes is deliberately thin. Constructing a single page-config from the tenant — one line in the handler — hands back the server and client configs, fully typed, with TypeScript's inference carrying the type safety for free across the exposed interface. No more importing magical composed objects from six directions. Behind that one call sit all the runtime decisions and per-tenant conditions; in front of it there's almost nothing to learn.

## What the principle buys you

Roughly fourteen files per page became one configuration per page. The eighty-four collapsed to about ten files of real logic, and the codebase shrank by about a third.

But the number that matters is the one that's harder to chart. Adding or changing a page is now a matter of extending the base with the part that's actually different, instead of opening fourteen files and reasoning about where a value — or a condition — might be hiding. That's what depth actually buys: not less complexity, but a smaller thing to understand. The complexity didn't vanish; it moved to where it belongs. And the next person doesn't have to reconstruct the whole picture to make one safe change — which, in the end, is the only definition of maintainable I trust.
