# API

- `GET /api/search?q=<query>&location=<city>` returns normalised product matches, store prices, unit prices, freshness and availability.
- `GET /api/products/:id` returns a canonical mock product.
- `GET /api/retailers` returns enabled retailer metadata and datasource status.
- `GET /api/stores/nearby` is reserved for a geocoding/store service implementation.

The API is separate from the frontend and returns JSON with CORS enabled. For production, add request validation, rate limiting, observability, durable persistence and an authorised provider per retailer.
