---
name: prescription-price-research
description: Compare public GoodRx pharmacy price snapshots using Crawlora drug and option discovery. Use to compare posted prices for a specified medication, form, strength, quantity, and US location; excludes diagnosis, dosing advice, medication changes, and purchases.
---

# Prescription price research

## Access and contract

Set `CRAWLORA_API_KEY` to your Crawlora key. Prefer the named Crawlora MCP tools
when connected; otherwise use the bundled `scripts/crawlora.sh`, which sends
`x-api-key` to `https://api.crawlora.net/api/v1`. Read
[reference/endpoints.md](reference/endpoints.md) for exact tool names, methods,
and parameters. Check application `code` as well as HTTP status; payloads are
inside `data`. Stop on authentication errors, back off on `429`, and retry a
transient upstream failure once. Bound pages and calls by the requested scope
and credit budget. Preserve source URLs, identifiers, and collection times.

Compare posted pharmacy prices for the user's specified medication and package.
A price comparison does not select a medication, dose, or clinical substitute.

## Resolve the exact priced product

1. Use the drug directory's initial-letter route to resolve the returned drug
   slug, or a slug already supplied by a verified GoodRx source. Read
   `goodrx_drug_options` before selecting label (brand/generic), form, dosage,
   and quantity. Valid option values form combinations; do not build an arbitrary
   cross-product or equate similarly named formulations.
2. Keep the medication/strength/form fixed unless the user explicitly wants a
   comparison of specified options. Directory class/condition/comparison routes
   can provide attributed publisher context; they do not establish therapeutic
   equivalence or authorise substituting a different medicine.
3. Query prices with the resolved choices and explicit US location. Coordinate
   queries require latitude and longitude together; retain state/ZIP evidence
   rather than inventing coordinates from an approximate city. Missing choices
   can select source defaults, so inspect and report the resolved product before
   treating two quoted prices as comparable.
4. Record quantity, units, brand/generic label, strength, form, location,
   pharmacy, coupon or other eligibility conditions, source URL, and timestamp.
   Use people versus pets only when the selected source actually supports that
   audience; human and veterinary guidance are not interchangeable.

```sh
scripts/crawlora.sh /goodrx/drugs letter=a
# Select the requested drug slug, then discover its exact options:
# scripts/crawlora.sh /goodrx/drug-options slug="$DRUG_SLUG"
# scripts/crawlora.sh /goodrx/drug-prices slug="$DRUG_SLUG" form="$FORM" dosage="$DOSAGE" quantity="$QUANTITY" zip_code="$ZIP"
```

## Compare costs and limitations

Keep cash/list prices, discounted coupon prices, membership prices, and insurance
copays separate; do not assume a coupon combines with insurance. Calculate unit
cost only for the same unit and formulation, and show the package total alongside
it. A snapshot is not guaranteed pharmacy stock, a final checkout price, or an
insurer's benefit determination. Missing prices remain unknown; do not substitute
zero or assume a drug is unavailable. Return a comparable pharmacy-price table,
resolved-option ledger, source/time, and eligibility questions to confirm.
GoodRx health articles and comparisons remain attributed educational content.
Questions about changing medicines, doses, or clinical suitability require a
qualified clinician/pharmacist; price alone cannot settle them. Do not redeem a
coupon, buy medication, or transmit medical/prescription data from this research.
