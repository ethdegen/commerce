# Next.js Commerce

The all-in-one starter kit for high-performance e-commerce sites. e.vercel.store/

## Run minimal version locally

> To run a minimal version of Next.js Commerce you can start with the sample provider that has all features disabled (cart, auth) and uses static files for the backend

```bash
pnpm dev # run this command in the site folder
```

> If you encounter any problems while installing and running for the first time, please see the Troubleshoot section

## Features

- Performant by default
- SEO Ready
- Internationalization
- Responsive
- UI Components
- Theming
- Standardized Data Hooks
- Dark Mode Support

## Considerations

- `site/lib/commerce` contains all types, helpers and functions to be used as a base to build a new **provider**.
- The **provider** lives under `site/lib/framework`and extends Next.js Commerce types and functionality (`site/lib/commerce`).

### Features

The provider defines the features that it supports under `site/lib/framework/commerce.config.json`

#### Features Available

The following features can be enabled or disabled. This means that the UI will remove all code related to the feature.
For example: turning `cart` off will disable Cart capabilities.

- cart
- search
- wishlist
- customerAuth
- customCheckout

#### How to turn Features on and off

> NOTE: The provider should support the feature that you are toggling. (This means that you can't turn wishlist on until you have implemented this functionality in the provider)

- Open `site/commerce.config.json`
- You'll see a config file like this:
  ```json
  {
    "features": {
      "wishlist": false,
      "customCheckout": true
    }
  }
  ```
- Turn `wishlist` on by setting `wishlist` to `true`.
- Run the app and the wishlist functionality should be back on.

### How to flesh out the provider

Follow our docs for [Adding a new Commerce Provider](site/lib/commerce/new-provider.md).
