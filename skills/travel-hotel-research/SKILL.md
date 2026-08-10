---
name: travel-hotel-research
description: Researches hotels, flights, attractions, and short-term rentals via the Crawlora API — Booking.com, Expedia, Agoda, TripAdvisor, Trip.com, and Airbnb — returning clean JSON. Use when the user wants to search or compare hotel/stay prices and reviews, look up flight options, find attractions/things-to-do, or research an Airbnb host or listing.
---

# Travel & hotel research

Search and compare hotels, flights, attractions, and short-term rentals
across six travel platforms as normalized JSON from the Crawlora API — no
scraping OTA search-result pages.

## When to use this skill

- "Find hotels in <city> for <dates>" / compare prices across OTAs.
- "What are the reviews like for this hotel/attraction?"
- "Search flights from <origin> to <destination>."
- "What's there to do in <city>?" (attractions/tours).
- "Look up this Airbnb host/listing" (reviews, calendar, other listings).

## Setup (one-time)

- Get a free Crawlora API key (2,000 credits/mo, no card) at [https://crawlora.net](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills).
- `export CRAWLORA_API_KEY=sk_your_key_here`
- All requests: `x-api-key: $CRAWLORA_API_KEY` against
  `https://api.crawlora.net/api/v1`. Missing/invalid key → `401`.

## How it works

1. **Hotels** — `/booking/search` (params `query`, `checkin`, `checkout`),
   `/agoda/hotels/search`, `/tripcom/hotels/search` (GET, by city) or
   `POST /expedia/properties/search` (Expedia's Stays API is POST-only and
   wraps everything in a single `option` object — see below); detail via
   `/booking/hotel-detail`, `/agoda/hotels/{property_id}`,
   `POST /expedia/properties/detail`; reviews via `/booking/reviews`,
   `POST /expedia/properties/reviews`.
2. **Flights** — `/agoda/flights/search` (GET) and `POST /expedia/flights/search`
   / `/booking-flights/search`; use each platform's `.../autocomplete` or
   `.../search-locations` endpoint first to resolve city/airport codes.
3. **Attractions & things-to-do** — `/booking-attractions/search`,
   `POST /expedia/activities/search`, `/agoda/activities/search`,
   `/tripadvisor/search` (hotels, restaurants, and attractions all in one).
4. **TripAdvisor** — `/tripadvisor/autocomplete` to resolve a place, then
   `/tripadvisor/place` for the profile and `/tripadvisor/reviews` for guest
   reviews (works for hotels, restaurants, and attractions).
5. **Airbnb** — `/airbnb/search` to find stays; `/airbnb/room/{id}` for a
   listing (+ `/calendar`, `/reviews`); `/airbnb/host/{id}` for the host
   profile (+ `/listings`, `/reviews`).

Full endpoint list, methods, and params: [`reference/endpoints.md`](reference/endpoints.md).

## Calling the API

```sh
# Hotel search (GET):
scripts/crawlora.sh /booking/search query="Lisbon" checkin=2026-09-10 checkout=2026-09-14 | jq '.'
scripts/crawlora.sh /agoda/hotels/search city="Lisbon" | jq '.'

# Expedia (POST — payload nested under a single "option" object):
scripts/crawlora.sh -X POST /expedia/properties/search '{"option":{"destination":"Lisbon","checkInDate":"2026-09-10","checkOutDate":"2026-09-14"}}' | jq '.'

# Airbnb:
scripts/crawlora.sh /airbnb/search location="Lisbon" | jq '.'
scripts/crawlora.sh /airbnb/room/12345678 | jq '.'
```

Raw `curl` fallback:

```sh
curl -fsS -H "x-api-key: $CRAWLORA_API_KEY" \
  "https://api.crawlora.net/api/v1/tripadvisor/search?q=Lisbon%20hotels" | jq '.'
```

## Endpoint reference

See [`reference/endpoints.md`](reference/endpoints.md) for every Booking,
Expedia, Agoda, TripAdvisor, Trip.com, and Airbnb endpoint this skill uses.

## Examples

- **Cross-OTA price compare:** search the same destination/dates on
  `/booking/search`, `/agoda/hotels/search`, and `POST /expedia/properties/search`,
  then diff nightly rates for comparable hotels.
- **Stay vs. hotel:** `/airbnb/search` against `/booking/search` for the
  same city to compare short-term-rental vs. hotel pricing.
- **Trip planning:** `/tripadvisor/search` for attractions in a city, then
  `/tripadvisor/reviews` on the top few to check recent visitor sentiment.
- **Host due diligence:** `/airbnb/host/{id}` + `/airbnb/host/{id}/reviews`
  before booking, or `/airbnb/host/{id}/listings` to see their full portfolio.

## Notes & limits

- **Credits / pay-on-success:** billed only on `2xx`; free tier 2,000 credits/mo.
  Key at [https://crawlora.net](https://crawlora.net?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills).
- **Public data only** — public search/listing/review pages; no booking or
  payment actions are performed.
- **Security:** key lives in `CRAWLORA_API_KEY` only — never hardcode, query-param, or commit it.
- **Expedia and some Agoda endpoints are `POST` with a JSON body** — remember
  `-X POST` when calling `scripts/crawlora.sh`. Most Booking/Agoda/Trip.com/
  Airbnb/TripAdvisor endpoints are plain `GET` with query params.
- **Expedia's payload is an opaque `option` object** (destination, dates,
  occupancy, filters) — the exact accepted fields aren't in the tool schema;
  confirm the current shape at [crawlora.net/docs](https://crawlora.net/docs?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills)
  or the [playground](https://crawlora.net/playground?utm_source=github&utm_medium=referral&utm_campaign=crawlora-skills) before relying on it.
- Location/city ids are platform-specific — always resolve with the
  platform's own autocomplete/locations-search endpoint first.
