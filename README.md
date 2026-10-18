# Alltime Wellness website

This site uses React 19 and Vite. The page is split into focused components, with content and business details kept in a shared data module.

## Run locally

1. Install dependencies with `npm install`.
2. Start the local site with `npm run dev`.
3. Open `http://localhost:3000`.

Create a production build with `npm run build`. The generated site is written to `dist/`.

## Structure

- `src/components/` - layout and section components
- `src/data/site.js` - treatments and business details
- `src/App.jsx` - page composition and global interactions
- `styles.css` - existing brand and responsive styles

## Edit details
All business details are in `site.config.js`: WhatsApp number, phone, email, hours, social links, and each treatment's duration and price (empty values stay hidden).

## Add photos
Approved Unsplash wellness photography is stored locally in `images/` and mapped through `src/data/site.js`. Replace an import there when final commissioned photography becomes available.

## Logo files (`brand/`)

- `legacy-typeface.png` - legacy full lockup retained only as a source asset
- `onlylogo-alltime.png` - standalone mark used as the browser icon and for compact branding

The previous generated SVG marks and temporary treatment images have been removed.

## Booking
The form is an enquiry. It opens WhatsApp with the details pre-filled and never claims a booking is confirmed.
