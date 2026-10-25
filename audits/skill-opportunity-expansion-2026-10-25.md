# New decision workflows from the current catalog — 2026-10-25

## Catalog review

The published MCP catalog is still 3,829 tools across 480 groups, and all
public tools already have focused references. This pass therefore looked for
new decision workflows that compose existing public tools, rather than adding
another endpoint or relabeling an existing bundle.

Two workflow gaps were selected:

| Skill | Decision supported | Difference from neighboring skills |
|---|---|---|
| consumer-product-opportunity | Decide whether to explore or test a physical consumer-product idea in a specified market using public search, listing, and feedback evidence. | topic-demand-validation focuses broad query/discussion signals; product-price-research compares known offers; retail-assortment-gap-analysis compares supplied or existing retailer catalogs. |
| company-fundamentals-comparison | Build a period- and unit-aligned financial-statement matrix for a user-supplied public-company peer set. | finance-markets-research is a broad data retrieval workflow; sec-filings-research focuses filings and issuer facts; earnings-event-research focuses a single earnings event. |

## External research and evidence limits

- Amazon's [Product Opportunity Explorer](https://sell.amazon.com/tools/product-opportunity-explorer)
  identifies niches using customer search/purchase behavior, competition, and
  review/return signals. Access requires Seller Central. The public Crawlora
  routes used by this skill do not expose those private metrics, so the skill
  uses observed Amazon charts/listings, cross-market listings, Trends, and
  sampled feedback as proxies. It must not estimate sales, conversion, market
  size, or profit.
- Product research is an established seller workflow: [Helium 10 Black Box](https://kb.helium10.com/hc/en-us/articles/6710274045339-Black-Box-Product-Tab-Overview)
  and [Jungle Scout Opportunity Finder](https://support.junglescout.com/hc/en-us/articles/360037689513-Opportunity-Finder)
  describe demand, competition, price, and listing research. These vendor pages
  support the task shape; their private sales estimates are not available in
  this public-data skill.
- SEC's [EDGAR API documentation](https://www.sec.gov/search-filings/edgar-application-programming-interfaces)
  says standard-taxonomy XBRL facts can be comparable across companies and
  time, while frame periods align to calendar periods rather than every issuer's
  fiscal calendar. [Investor.gov's 10-K guide](https://www.investor.gov/introduction-investing/getting-started/researching-investments/how-read-10-k)
  identifies audited income statements, balance sheets, and cash-flow
  statements as core filing evidence. The new skill preserves dates, units,
  taxonomy, filing accession, and company-defined adjustments and makes no
  buy/sell or price-target recommendation.

## Coverage and validation

No API catalog or runtime route changed. The new skills select from the
verified published catalog and add focused output instructions around
comparability, uncertainty, and decision boundaries. The six account-usage
tools remain excluded from public research skills.

Validation passed: 176 installable skills and 138 marketplace skills; generated
reference parity; and all 32 repository tests. Both new skills passed the Skill
Creator validator, and the shared shell helper passed bash -n. The public tool
catalog remains 3,829 tools across 480 groups; focused coverage remains 3,824
tools, with only the five Usage routes outside research workflows.
