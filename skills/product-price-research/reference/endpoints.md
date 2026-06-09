# product-price-research — endpoint reference

> Generated from `scripts/tools.json` by `scripts/generate.mjs` — do not edit by hand.

Endpoints this skill uses, grouped by platform. Call them via `scripts/crawlora.sh` (see SKILL.md).

All paths are relative to the API base `https://api.crawlora.net/api/v1` and require the header `x-api-key: $CRAWLORA_API_KEY`. Path params like `{id}` are substituted into the URL; `GET` params go in the query string; `POST` params go in a JSON body.

**36 endpoints across 4 platform group(s).**

## Amazon (3)

### `amazon_product`

- **HTTP:** `GET /amazon/product/{asin}`
- **What:** Retrieve Amazon product details. Returns normalized product details for an Amazon ASIN on `amazon.com`, including pricing, availability, overview data, inline review samples, and descriptive content.
- **Params:** `asin` (string, **required**) — Amazon ASIN; `language` (string, optional) — Amazon language; `currency` (string, optional) — Amazon currency

### `amazon_search`

- **HTTP:** `GET /amazon/search`
- **What:** Search Amazon products. Returns normalized Amazon search result cards for `amazon.com`.
- **Params:** `k` (string, **required**) — Search keyword; `s` (string, optional) — Sort order; `page` (integer, optional) — 1-based page number

### `amazon_suggest`

- **HTTP:** `GET /amazon/suggest/{keyword}`
- **What:** Retrieve Amazon search suggestions. Returns typeahead keyword suggestions from Amazon's public suggestion API for `amazon.com`.
- **Params:** `keyword` (string, **required**) — Suggestion prefix

## eBay (6)

### `ebay_item`

- **HTTP:** `GET /ebay/item/{item_id}`
- **What:** Get eBay item details. Returns normalized details for a public eBay item listing.
- **Params:** `item_id` (string, **required**) — eBay item ID

### `ebay_search`

- **HTTP:** `POST /ebay/search`
- **What:** Search eBay listings. Returns normalized eBay search results.
- **Params:** `option` (object, **required**) — eBay search payload

### `ebay_seller`

- **HTTP:** `GET /ebay/seller/{seller}`
- **What:** Get eBay seller profile. Returns normalized details for a public eBay seller profile.
- **Params:** `seller` (string, **required**) — eBay seller username

### `ebay_seller_about`

- **HTTP:** `GET /ebay/seller/{seller}/about`
- **What:** Get eBay seller about details. Returns normalized seller about information from the public eBay store about tab, including seller stats, top-rated status, optional location/member-since fields, and cleaned store categories.
- **Params:** `seller` (string, **required**) — eBay seller username

### `ebay_seller_feedback`

- **HTTP:** `GET /ebay/seller/{seller}/feedback`
- **What:** Get eBay seller feedback. Returns normalized seller feedback summary, detailed ratings, and recent review cards from the public eBay seller feedback tab.
- **Params:** `seller` (string, **required**) — eBay seller username; `page` (integer, optional) — Feedback page number; `per_page` (integer, optional) — Reviews per page

### `ebay_seller_shop`

- **HTTP:** `GET /ebay/seller/{seller}/shop`
- **What:** Get eBay seller shop listings. Returns normalized listings from the public eBay seller shop tab, with pagination backed by the store odtRefresh response.
- **Params:** `seller` (string, **required**) — eBay seller username; `page` (integer, optional) — Shop page number

## Shopify (11)

### `shopify_collection_products`

- **HTTP:** `GET /shopify/collections/{handle}/products`
- **What:** List Shopify collection products. Returns normalized products from a public Shopify collection `/products.json` endpoint.
- **Params:** `handle` (string, **required**) — Collection handle; `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum products, defaults to 50 and supports up to 250

### `shopify_collections`

- **HTTP:** `GET /shopify/collections`
- **What:** List Shopify collections. Returns normalized collections from a public Shopify `/collections.json` endpoint. Valid empty result pages return `200` with an empty collections array.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum collections, defaults to 50 and supports up to 250

### `shopify_page`

- **HTTP:** `GET /shopify/pages/{handle}`
- **What:** Get Shopify page. Returns normalized page detail from Shopify's credential-free `/pages/{handle}.json` endpoint. Page body HTML is returned as cleaned text only.
- **Params:** `handle` (string, **required**) — Page handle; `url` (string, **required**) — Shopify storefront URL

### `shopify_pages`

- **HTTP:** `GET /shopify/pages`
- **What:** List Shopify pages. Returns normalized static pages from a public Shopify `/pages.json` endpoint. Page body HTML is returned as cleaned text only.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum pages, defaults to 50 and supports up to 250

### `shopify_product`

- **HTTP:** `GET /shopify/products/{handle}`
- **What:** Get Shopify product. Returns normalized product detail from Shopify's credential-free product handle `.js` endpoint.
- **Params:** `handle` (string, **required**) — Product handle; `url` (string, **required**) — Shopify storefront URL

### `shopify_product_recommendations`

- **HTTP:** `GET /shopify/products/{handle}/recommendations`
- **What:** List Shopify product recommendations. Returns normalized recommended products from Shopify's credential-free recommendations Ajax endpoint. The route handle is resolved to a Shopify product id before fetching recommendations.
- **Params:** `handle` (string, **required**) — Product handle; `url` (string, **required**) — Shopify storefront URL; `limit` (integer, optional) — Maximum products, defaults to 10 and supports up to 20; `intent` (string, optional) — Recommendation intent. Allowed values: related, complementary

### `shopify_products`

- **HTTP:** `GET /shopify/products`
- **What:** List Shopify products. Returns normalized products from a public Shopify `/products.json` endpoint. Valid empty result pages return `200` with an empty products array.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `page` (integer, optional) — 1-based page, defaults to 1; `limit` (integer, optional) — Maximum products, defaults to 50 and supports up to 250

### `shopify_search_suggest`

- **HTTP:** `GET /shopify/search/suggest`
- **What:** Get Shopify search suggestions. Returns products, collections, and query suggestions from Shopify's credential-free predictive search Ajax endpoint.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `q` (string, **required**) — Search query; `types` (string, optional) — Comma-separated suggestion types. Allowed values: product, collection, query; `limit` (integer, optional) — Maximum results per type, defaults to 10 and supports up to 20

### `shopify_sitemap_urls`

- **HTTP:** `GET /shopify/sitemap/urls`
- **What:** List Shopify sitemap URLs. Fetches capped URL entries from Shopify child sitemaps matching the requested type.
- **Params:** `url` (string, **required**) — Shopify storefront URL; `type` (string, optional) — Sitemap type. Allowed values: all, products, collections, pages, blogs, agentic_discovery, other; `limit` (integer, optional) — Maximum URL entries, defaults to 50 and supports up to 250

### `shopify_sitemaps`

- **HTTP:** `GET /shopify/sitemaps`
- **What:** List Shopify sitemaps. Returns child sitemap URLs from a public Shopify `/sitemap.xml` index with inferred sitemap types.
- **Params:** `url` (string, **required**) — Shopify storefront URL

### `shopify_store`

- **HTTP:** `GET /shopify/store`
- **What:** Get Shopify store metadata. Resolves a public Shopify storefront and returns normalized metadata from credential-free storefront JSON. If the vanity domain blocks `/products.json`, the service may fall back to a public `*.myshopify.com` domain discovered from the storefront page.
- **Params:** `url` (string, **required**) — Shopify storefront URL

## Shop.app (16)

### `shop_app_analysis`

- **HTTP:** `GET /shop-app/analysis`
- **What:** Analyze Shop.app query results. Returns a market snapshot derived from Shop.app search results, including price ranges, currencies, sale counts, discounts, and top shops. Limit defaults to 20 and accepts values up to 50.
- **Params:** `query` (string, **required**) — Search query; `limit` (integer, optional) — Maximum products to analyze, defaults to 20 and supports up to 50; `in_stock` (boolean, optional) — Request in-stock products; `on_sale` (boolean, optional) — Request sale products; `deep_search` (boolean, optional) — Enable Shop.app deep search mode

### `shop_app_categories`

- **HTTP:** `GET /shop-app/categories`
- **What:** List Shop.app categories. Returns public Shop.app product categories.
- **Params:** _none_

### `shop_app_collection_products`

- **HTTP:** `GET /shop-app/shops/{handle}/collections/{collection_id}/products`
- **What:** List Shop.app collection products. Returns public product cards from a Shop.app merchant collection. sort_by allowed values: MOST_SALES, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, RELEVANCE.
- **Params:** `handle` (string, **required**) — Shop handle; `collection_id` (string, **required**) — Collection id; `limit` (integer, optional) — Maximum products, defaults to 30 and supports up to 60; `sort_by` (string, optional) — Sort mode; `in_stock` (boolean, optional) — Request in-stock products

### `shop_app_product`

- **HTTP:** `GET /shop-app/products/{id}`
- **What:** Get Shop.app product. Returns normalized public product details from Shop.app.
- **Params:** `id` (string, **required**) — Product id; `variant_id` (string, optional) — Variant id

### `shop_app_product_related`

- **HTTP:** `GET /shop-app/products/{id}/related`
- **What:** List Shop.app related products. Returns related product cards from a public Shop.app product page.
- **Params:** `id` (string, **required**) — Product id; `limit` (integer, optional) — Maximum products, defaults to 20 and supports up to 50

### `shop_app_product_reviews`

- **HTTP:** `GET /shop-app/products/{id}/reviews`
- **What:** List Shop.app product reviews. Returns public product reviews from a Shop.app product page.
- **Params:** `id` (string, **required**) — Product id; `limit` (integer, optional) — Maximum reviews, defaults to 20 and supports up to 50

### `shop_app_product_shop`

- **HTTP:** `GET /shop-app/products/{id}/shop`
- **What:** Get the Shop.app shop for a product. Resolves the public Shop.app merchant profile for a product id.
- **Params:** `id` (string, **required**) — Product id

### `shop_app_product_variant`

- **HTTP:** `GET /shop-app/products/{id}/variant`
- **What:** Get a Shop.app product variant by selected options. Returns the exact public product variant matching selected options. selected_options must be a JSON object when provided. Repeated option filters may also be sent as option.Name=value or option[Name]=value.
- **Params:** `id` (string, **required**) — Product id; `selected_options` (string, optional) — Selected options JSON object

### `shop_app_product_variants`

- **HTTP:** `GET /shop-app/products/{id}/variants`
- **What:** List Shop.app product variants. Returns adjacent variants for a Shop.app product. selected_options must be a JSON object when provided. Repeated option filters may also be sent as option.Name=value or option[Name]=value.
- **Params:** `id` (string, **required**) — Product id; `selected_options` (string, optional) — Selected options JSON object; `limit` (integer, optional) — Maximum variants, defaults to 50 and supports up to 100

### `shop_app_search`

- **HTTP:** `GET /shop-app/search`
- **What:** Search Shop.app products. Searches Shop.app product results using the credential-free public web search flow. Limit defaults to 20 and accepts values up to 50.
- **Params:** `query` (string, **required**) — Search query; `limit` (integer, optional) — Maximum products, defaults to 20 and supports up to 50; `in_stock` (boolean, optional) — Request in-stock products; `on_sale` (boolean, optional) — Request sale products; `deep_search` (boolean, optional) — Enable Shop.app deep search mode

### `shop_app_shop`

- **HTTP:** `GET /shop-app/shops/{handle}`
- **What:** Get Shop.app shop. Returns public Shop.app merchant profile details.
- **Params:** `handle` (string, **required**) — Shop handle

### `shop_app_shop_locations`

- **HTTP:** `GET /shop-app/shops/{handle}/locations`
- **What:** List Shop.app shop locations. Returns public retail locations for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum locations, defaults to 10 and supports up to 50

### `shop_app_shop_products`

- **HTTP:** `GET /shop-app/shops/{handle}/products`
- **What:** List Shop.app shop products. Returns public product cards from a Shop.app merchant profile. sort_by allowed values: MOST_SALES, PRICE_LOW_TO_HIGH, PRICE_HIGH_TO_LOW, RELEVANCE.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum products, defaults to 30 and supports up to 60; `sort_by` (string, optional) — Sort mode; `in_stock` (boolean, optional) — Request in-stock products

### `shop_app_shop_reviews`

- **HTTP:** `GET /shop-app/shops/{handle}/reviews`
- **What:** List Shop.app shop reviews. Returns public reviews for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `limit` (integer, optional) — Maximum reviews, defaults to 20 and supports up to 50

### `shop_app_shop_typeahead`

- **HTTP:** `GET /shop-app/shops/{handle}/typeahead`
- **What:** Suggest products and collections inside a Shop.app shop. Returns public store typeahead suggestions for a Shop.app merchant profile.
- **Params:** `handle` (string, **required**) — Shop handle; `query` (string, **required**) — Typeahead query; `limit` (integer, optional) — Maximum suggestions, defaults to 20 and supports up to 20

### `shop_app_suggestions`

- **HTTP:** `GET /shop-app/suggestions`
- **What:** Suggest Shop.app searches. Returns Shop.app autocomplete suggestions. Limit defaults to 10 and supports up to 20.
- **Params:** `query` (string, **required**) — Search query; `limit` (integer, optional) — Maximum suggestions, defaults to 10 and supports up to 20
