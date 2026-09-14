# PriceFinder SA

A privacy-first, no-account South African retail price-comparison MVP. It provides natural-language product search, tolerant product matching, local-store comparison, unit-price calculation, sort controls, optional geolocation, and retailer outbound links.

## Run locally

```bash
cp .env.example .env
npm start
```

Open `http://localhost:3000`. Run automated checks with `npm test`.

## Architecture

- `frontend/` is a responsive Bootstrap 5.3/vanilla-JS client that can be hosted separately.
- `backend/api/` provides a small JSON API; `backend/services/search.js` normalises quantities and ranks word-order-tolerant matches while enforcing matching pack sizes.
- `backend/database/mock-data.js` is the current realistic demonstration dataset.
- `backend/providers/provider.js` defines the independent `RetailerProvider` contract. Connect one authorised provider per retailer without coupling search/UI to an individual retailer.
- `docs/schema.sql` provides the scalable persistence shape and `docs/API.md` documents endpoints.

## Live provider configuration

This build deliberately uses mock data. Add server-side credentials and provider implementations for official APIs, feeds, licensed third-party services, or retailer-approved integrations. Mapping/geocoding is intentionally an integration boundary: use a provider via server configuration, never expose its key to the browser. A live rollout additionally needs store coordinates, a persistent price store, scheduled freshness checks, request validation, rate limits, and monitoring.

Do not bypass CAPTCHAs, logins, robots restrictions, rate limits, paywalls, anti-bot controls, or retailer terms. Disable a provider immediately if authorisation changes. Prices are comparison information, not guarantees.

## Next steps

1. Obtain written authorisation/API credentials per retailer and implement the provider methods.
2. Add a compliant geocoding/directions adapter and exact store coordinates.
3. Move mock records to a database, add ingestion jobs and freshness alerts.
4. Add production security headers, validation, rate limiting, monitoring and accessibility review.
