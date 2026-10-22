# MarCorpAi website

This project is a responsive single-page corporate website for MarCorpAi built with HTML, CSS, and JavaScript.

## Structure

- `index.html` — main markup and page sections
- `styles.css` — visual design system, layout, and responsive behavior
- `site-data.js` — content data for ventures, industries, case studies, and news
- `script.js` — navigation, animations, and form validation

## Update company details

To replace placeholder text, update the arrays in `site-data.js` and the static content in `index.html`.

- Add or change venture details in `siteContent.ventures`
- Update industry narratives in `siteContent.industries`
- Add future product concepts in `siteContent.caseStudies`
- Replace email, office, and social settings in the contact and footer sections of `index.html`

## Preview locally

Open the project folder in a browser or run a local static server from the project root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Notes

- The design uses a dark premium theme with purple and pink accents.
- Forms include front-end validation and success/error messaging.
- SEO metadata and social tags are included in the document head.
- The site is designed to be easy to extend into a CMS or React structure later.
