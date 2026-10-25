# Business-location screening workflow — 2026-10-25

## Research and scope

The latest public MCP catalog is unchanged at 3,829 tools across 480 groups, and
all public tools already have focused references. The remaining opportunity is a
distinct decision workflow for comparing candidate storefront sites, not an
endpoint-coverage gap.

The [SBA location guide](https://www.sba.gov/counseling/launch-your-business/)
identifies customer-market fit, zoning, taxes, and location-dependent startup
costs as parts of choosing a business location. The [Census Bureau's small
business data guide](https://www.census.gov/topics/business-economy/small-business/about/powerful-data.html)
describes demographics, income, consumer spending, and competition as key site
research inputs.

The current Crawlora catalog provides local business directories, place details,
sampled reviews, route/ETA information, Numbeo city indices, and US residential
housing-market measures. It does not contain structured local demographic
profiles, commercial lease rates, pedestrian traffic, property availability,
or zoning determinations. Therefore the skill is an early comparison of
user-supplied candidates, with those missing inputs called out as required
follow-up evidence.

This is distinct from local-competitive-landscape: that workflow compares
matched business supply and review samples across areas, while this one starts
from proposed locations and adds route/access context and due-diligence gaps.
It does not select a lease, estimate sales, or rank locations without
user-supplied criteria and weights.

## Workflow surface

The new skill selects 22 existing tools across Google Maps, Apple Maps, Yelp,
the Google Maps business dataset, housing markets, Numbeo, Bing, and Web
scraping. It deduplicates provider observations cautiously, keeps search bounds
and review samples visible, and treats city-level cost data as context rather
than commercial rent.

## Validation

No API route or public MCP tool changed.

Validation passed: 177 installable skills and 139 marketplace skills; generated
reference parity; all 32 repository tests; the Skill Creator validator; and
shared helper shell syntax. The published catalog remains 3,829 tools across
480 groups. Focused coverage remains 3,824/3,829, with the five Usage tools
outside the public research skills.
