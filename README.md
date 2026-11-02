# Merga Bekele Hirkate — Portfolio (Step 1)

## What's here
- `index.html` — all sections from your design (hero, documentary, memory book, experience, honors, testimonials, contact, footer)
- `css/styles.css` — the visual system
- `js/script.js` — dark/light toggle, contact form handler, footer year/visit count

## How to use it
Drop these three files/folders straight into your `Portifolio` VS Code folder (keep the `css/` and `js/` subfolders), then open `index.html` with the Live Server extension (or just double-click it).

## Design direction
Since your story leans on a documentary, a memory book, and a career timeline — i.e. footage of your life — the whole page runs inside a **film strip**: sprocket-hole rails down both edges, section labels styled as scene slates ("SCN 01 — OPEN"), and your experience section reads like film timecodes instead of generic numbered steps.

- **Display type:** Fraunces (headlines) — warm, editorial
- **Body/UI type:** Inter
- **Labels/timecodes:** IBM Plex Mono
- **Palette:** deep charcoal-navy base, warm amber accent (`#D9A441`), muted clay + sage as secondary accents
- Toggle in the nav switches to a light/parchment mode

## Everything you still need to replace
Search for **`[ ... ]`** text or the gold italic `.editable` styling — those mark every placeholder:
- Hero photo (`hero__portrait` — currently a placehold.co image)
- Profession tagline
- Social links (X / GitHub / LinkedIn / email — currently `#`)
- Documentary video `<iframe src="...">` — swap for your real YouTube/Vimeo embed or a local `<video>` tag
- 3 memory-book photos + captions
- Experience bullet numbers/company names
- Award context lines
- 4 testimonial quotes, names, orgs, photos, emails
- Contact email + the form's submit handler (currently just shows a placeholder message — wire it to Formspree, EmailJS, or your own backend when ready)

## Next steps (say the word and I'll do any of these)
1. Swap in your real photos/video and I'll wire up the paths
2. Add a proper "About" long-form section if you want one beyond the hero
3. Make the contact form actually send (e.g. via Formspree — free tier, no backend needed)
4. Add scroll-reveal animation on section entry
5. Add a real "Services/Components" page if that footer link should go somewhere
