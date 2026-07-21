# EverRail Wiki PRD and Implementation Plan

Checked: 2026-07-21  
Project: `everrail`  
Canonical: `https://www.everrail.wiki`  
Platform: Steam

## 1. Product decision

Build an English, decision-first Early Access guide hub for Steam App `4134600`. EverRail launched on July 20, 2026 and has system breadth but little mature written coverage. The launch site therefore uses 15 supported intent pages rather than a speculative 30–50-page database.

The primary player promise is:

> Keep the train charged, passengers fed and every expedition recoverable.

The site must teach stable decision logic while clearly dating values that can change during Early Access.

## 2. Verified identity

| Field | Value |
| --- | --- |
| Game | EverRail |
| Site | EverRail Wiki |
| Steam | `https://store.steampowered.com/app/4134600/EverRail/` |
| App ID | `4134600` |
| Developer | Aesir Interactive |
| Publisher | Aesir Interactive |
| Official website | `https://aesir-interactive.com/games/19/everrail` |
| Release | July 20, 2026 Early Access |
| Released co-op limit | Online co-op for up to four players |
| Current platform | Windows |
| Official demo | Offered from the main Steam listing; no separate App ID verified |

Identity exclusions: EverRain, Unrailed!, Underrail, Voidtrain, Frostrail, Railborn, Frostliner and Enginefall are separate games. Their mechanics, data and routes cannot be treated as EverRail facts.

## 3. Research result

- Exact-game English search coverage is thin one day after launch.
- Official Steam, Aesir, launch-day YouTube gameplay and Steam achievements are the strongest current sources.
- Current player problems concentrate on battery pressure, unclear first-run priorities, rations/passengers, co-op, controls/performance and the difference between demo/playtest information and the released four-player build.
- The current Steam achievement page exposes 33 achievements, including two hidden Long Thaw descriptions.
- No redeem-code system, ranked-unit system or fixed global map supports `codes`, `tier list` or static map pages.

## 4. Keyword matrix

| Keyword | Intent | Route | Priority | Status | Evidence / decision |
| --- | --- | --- | --- | --- | --- |
| everrail | Entity | `/` | P0 | keep | Official Steam entity |
| everrail wiki | Structured help | `/` | P0 | keep | Exact-match domain; no mature dedicated wiki |
| everrail guide | Browse help | `/guides` | P0 | keep | Current search and YouTube result language |
| everrail beginner guide | First-run help | `/guides/beginner-guide` | P0 | keep | Direct current video result and tutorial changes |
| everrail tips | Avoid mistakes | `/guides/beginner-guide` | P0 | keep | Merge with beginner intent |
| everrail train battery | Charge/stop timing | `/guides/train-battery-energy-guide` | P0 | keep | Core official rule plus player complaint |
| everrail energy guide | Shared power | `/guides/train-battery-energy-guide` | P0 | keep | Same battery intent |
| everrail passengers | Lives/respawn | `/guides/passengers-rations-respawn` | P0 | keep | Core Steam mechanic |
| everrail rations | Prevent starvation | `/guides/passengers-rations-respawn` | P0 | keep | Official eight-hour ration update |
| everrail expeditions | Safe stops | `/guides/expeditions-return-plan` | P0 | keep | Official pillar |
| everrail glider | Scout and land | `/guides/glider-scouting-iso-guide` | P0 | keep | Official pillar and achievements |
| everrail iso | Collect resource | `/guides/glider-scouting-iso-guide` | P1 | keep | Official UI and achievement chain |
| everrail crafting guide | Craft priorities | `/guides/crafting-building-recycler` | P0 | keep | Official pillar and station achievements |
| everrail recycler salvager | Recycle safely | `/guides/crafting-building-recycler` | P1 | keep | Official update and achievement chain |
| everrail wagons | Expand train | `/guides/wagons-storage-train-upgrades` | P0 | keep | Store copy and achievements |
| everrail storage | Organize resources | `/guides/wagons-storage-train-upgrades` | P1 | keep | Official storage tiers |
| everrail cold hunger | Survive exposure | `/guides/cold-hunger-survival` | P0 | keep | Official July update |
| everrail robots emp | Combat help | `/guides/combat-robots-emp-guide` | P1 | keep | Official enemy update |
| everrail co op | Multiplayer roles | `/guides/co-op-roles-multiplayer-fixes` | P0 | keep | Steam and Co-Optimus |
| everrail multiplayer not working | Join fix | `/guides/co-op-roles-multiplayer-fixes` | P1 | keep | Official restart workaround |
| everrail achievements | Completion checklist | `/guides/achievements-guide` | P0 | keep | 33 public Steam entries |
| everrail system requirements | Compatibility | `/system-requirements` | P0 | keep | Official hardware table |
| everrail steam deck | Handheld status | `/system-requirements#steam-deck` | P1 | watch | Community question; no badge verified |
| everrail controller support | Input support | `/system-requirements#controller` | P1 | keep | Steam says Partial Controller Support |
| everrail demo | Version separation | `/guides/demo-vs-early-access` | P1 | keep | Demo remains on main listing |
| everrail review | Buying decision | `/review` | P1 | keep | Early Access disclosure and launch reviews |
| everrail download | Safe install | `/download` | P0 | keep | Official Steam channel |
| everrail release date | Launch status | `/review` | P1 | keep | July 20, 2026 official record |
| everrail roadmap | Future status | `/review#early-access` | P2 | watch | Roadmap mentioned, public board URL not verified |
| everrail map | Fixed map | none | P2 | watch | Procedural world makes a static page misleading |
| everrail codes | Redeem rewards | none | P3 | ignore | No verified code system or demand |
| everrail tier list | Rank entities | none | P3 | ignore | No ranked-entity system |
| everrail trainer / crack / APK | Unsafe shortcut | `/download` | P3 | ignore | Safe official-download answer only |
| everrail guía principiantes | Spanish help | English beginner route | P2 | localize_later | English core first |

## 5. Competitor benchmark

### Exact EverRail results

| Competitor | Strength | Gap to exploit |
| --- | --- | --- |
| Steam Store / Community | Authoritative facts, updates, discussions and achievements | Not organized into answer-first player paths |
| Aesir Interactive | Official identity, media and feature pillars | No searchable system-guide matrix |
| Co-Optimus | Direct co-op intent | Single profile, no complete role or troubleshooting guide |
| YouTube launch results | Current gameplay and high visual trust | Hard to search for one decision; long videos mix many intents |

### Adjacent structural references

| Reference | Useful pattern | Avoid |
| --- | --- | --- |
| Voidtrain Wiki | Train/entity taxonomy after systems mature | Importing Voidtrain mechanics or launching thin EverRail entities |
| Voidtrain Steam Guides | Beginner progression and quick decisions | Long undated catch-all prose |
| Same-operator `.wiki` pattern | Homepage hub, category hub, exact-intent articles, schema | Inflating page count or localization before English quality |

Pages to match or improve:

- exact game entity homepage;
- beginner and train-power answers;
- co-op player count and role breakdown;
- official achievements checklist;
- hardware/controller status;
- safe demo/download and current-build separation.

## 6. Source and video policy

Primary sources:

1. Steam App `4134600` store page.
2. Aesir Interactive EverRail page.
3. Steam global achievements.
4. Official Steam community announcements.
5. Aesir official videos and launch stream.

Selected supporting videos:

| Video | Strategy | Use |
| --- | --- | --- |
| Aesir `Game Intro Trailer` (`wbhRwLzRn6k`) | official | Homepage trust video |
| ProRogueBear `Day ONE... SOLO` (`cFRnk_m22As`) | user_intent_youtube | Beginner route cross-check |
| JaWoodle `MY BASE IS A TRAIN!` (`LDkiIufi_PA`) | popular_youtube | Battery and wagon context |
| FGS `7 Things You NEED To Know` (`mQv_Xn-KSS4`) | youtube_explainer | Glider/system overview |
| Raptor launch co-op stream (`ZROv2zyK6FE`) | user_intent_youtube | Released co-op roles |
| Aesir launch stream (`uaj5scvMCIY`) | official | Demo/EA and buying-status context |

Videos are research and support media, not transcript sources. Guide prose must remain original, decision-first and independent of a single creator’s narration.

## 7. Launch route inventory

### Hubs

- `/` — EverRail Wiki homepage hub
- `/guides` — complete guide index with `ItemList`

### Guide articles

1. `/guides/beginner-guide`
2. `/guides/train-battery-energy-guide`
3. `/guides/passengers-rations-respawn`
4. `/guides/expeditions-return-plan`
5. `/guides/glider-scouting-iso-guide`
6. `/guides/crafting-building-recycler`
7. `/guides/wagons-storage-train-upgrades`
8. `/guides/cold-hunger-survival`
9. `/guides/combat-robots-emp-guide`
10. `/guides/co-op-roles-multiplayer-fixes`
11. `/guides/achievements-guide`
12. `/guides/demo-vs-early-access`

### High-intent standalone routes

- `/system-requirements`
- `/review`
- `/download`

### Legal

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## 8. Information architecture

Desktop sidebar groups:

- Start Here
- Train & Survival
- Explore & Build
- Combat & Co-op
- Steam & Status

Groups remain collapsed by default. The active group opens automatically and the active route is highlighted. Mobile uses a compact expandable wiki menu.

Homepage modules:

- compact hero with official video, primary CTA and short quick links;
- six current game facts;
- `Start here` decision panel;
- featured guide grid;
- train/survival/exploration topic bands;
- official record links;
- keyword hub covering every kept route;
- FAQ.

## 9. Data architecture

```text
src/data/everrail/
  types.ts
  sources.ts
  guides.ts
  localized.ts
```

Every guide stores:

- title, description, category and current status;
- checked source strategy and notes;
- video query and metadata when selected;
- current official cover or relevant video thumbnail;
- route-specific body sections and FAQ;
- explicit related routes.

## 10. Metadata and schema

- Homepage: `WebSite`, `Organization`, `VideoGame`, `VideoObject`, `FAQPage`.
- Guide hub: `ItemList`, `BreadcrumbList`.
- Guide/standalone articles: `Article`, `BreadcrumbList`, `FAQPage`, optional `VideoObject`.
- Canonical host: `https://www.everrail.wiki`.
- English-only launch; no inflated localized copies.
- Homepage description stays under 160 characters and names actual mechanics.
- Sitemap includes hubs, 15 high-intent pages and legal pages.

## 11. Visual direction

- Official Steam screenshots and header only; no inherited template art.
- Dark frozen-night base, icy blue/cyan highlights, warning amber and survival red.
- Compact industrial panels rather than faux-computer windows.
- Homepage first viewport must show identity, train-survival positioning, CTA, quick links and official video without hiding the next section.
- Related links must wrap safely in the 272px sidebar.

## 12. Migration and launch QA

- Remove all prior-template names, domains, App IDs, creators, puzzle routes, data and assets.
- Remove all inherited advertising variables, routes, components and configuration; do not add disabled placeholders.
- Remove the inherited GA measurement ID before creating the EverRail stream.
- Verify 15 guide records and explicit route-label coverage.
- Run Biome, TypeScript, Next build and Cloudflare build.
- Inspect desktop and mobile homepage plus a long-title guide/sidebar.
- Check official/video thumbnail rendering and no source-status debug cards.
- Initialize clean Git history only after secret scan and validation.
- Create/push GitHub, deploy Worker, bind apex + `www`, create GA4, verify GSC Domain Property and submit full sitemap.
- Register exactly two core links in Shipmanager after routes are live.
