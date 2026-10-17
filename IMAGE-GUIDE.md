# Photo guide and credits

The website currently uses a coordinated set of locally stored Unsplash photographs. Image imports and card assignments live in `src/data/site.js`; files are bundled by Vite and lazy-loaded by the photo component.

## Current image map

| File in `images/` | Website use | Unsplash photographer |
|---|---|---|
| `massage-full-body.jpg` | Full body massage | [Massage a Domicile](https://unsplash.com/photos/nMVUTY8_gGw) |
| `massage-deep-tissue.jpg` | Deep tissue massage | [Jakub Klucký](https://unsplash.com/photos/7yeqemd-p90) |
| `sports-recovery.jpg` | Sports recovery | [Julius Toltesi](https://unsplash.com/photos/close-up-of-a-person-receiving-treatment-on-their-heel-QBzckSn4fpo) |
| `facial-treatment.jpg` | Facial and de-tan | [Rosa Rafael](https://unsplash.com/photos/Pe9IXUuC6QU) |
| `spa-towels.jpg` | Philosophy section | [Usen Parmanov](https://unsplash.com/photos/I3VF9Cu4agc) |
| `facial-care.jpg` | Gallery | [Dominique Rivas](https://unsplash.com/photos/rWwuf8yKw4Y) |
| `spa-interior.jpg` | Gallery | [Camille Brodard](https://unsplash.com/photos/VxAwTeiqDao) |
| `spa-candles.jpg` | Gallery | [Denny Müller](https://unsplash.com/photos/s9zGsWDiFO4) |
| `spa-detail.jpg` | Gallery | [Susan Wilkinson](https://unsplash.com/photos/GmR4OXwt2p8) |
| `spa-oils.jpg` | Gallery | [Pablo R. Bartol](https://unsplash.com/photos/rAFwCVfMiUg) |
| `wellness-stones.jpg` | Gallery | [Adrian Motroc](https://unsplash.com/photos/87InWldRhgs) |

These photographs are used under the [Unsplash License](https://unsplash.com/license). Keep this source list when replacing, editing, or redistributing the images.

## Replacing an image

Use licensed or commissioned photography, ideally around 1600 px on the long edge. Add the file to `images/`, import it in `src/data/site.js`, and replace the relevant `image` or gallery mapping there.
