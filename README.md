# Layerstead Technologies

A personal, monochrome website for local network and technology services, built on the existing Next.js project.

## Run

```sh
npm ci
npm run dev
npm run build
```

## Content and branding

`app/site-config.js` centrally defines all logo slots (light, dark, mobile, footer), public contact details, Formspree endpoint, portrait, services, and document version. Existing logo assets are unaltered. The footer uses the supplied black logo on a white plate until a separate dark-background variant is approved. The supplied seated white-shirt portrait is used for About Josiah; it is not described as a client job or a business location.

Home, services, biography, process, FAQ, and consultation are organized sections on `/`. Separate routes: `/privacy`, `/terms`, `/service-disclaimer`, `/service-agreement`.

## Consultation

Preserved Formspree endpoint: `https://formspree.io/f/xrpglbqn`.
A labeled integration test (`LAYERSTEAD-20261001-REBUILD`) was accepted and its Formspree notification was read in the existing Formspree receiving inbox on October 1, 2026. The received fields included service area, interest, booking clarification, and document version. This verified the original processor-to-inbox path. The Formspree email workflow was subsequently changed to the owner-verified address `breckenridge.josiah@layersteadtech.com`; delivery to this new destination has not yet been verified. Repeat one live browser submission after deployment and confirm receipt to verify the new destination, production origin, account limits, and any domain restrictions.

Required name, email, city, interest, and description; optional phone. Browser validation, length limits, `_gotcha` honeypot, duplicate-submit guard, loading feedback, 20-second timeout, server failure handling, preserved entries on failure, and success confirmation. Only a response with `ok: true` is presented as accepted. No appointment or work is authorized by a request. The checkbox is a booking clarification, not a signed contract; its wording and document version are submitted to Formspree.

## Before final publication

- Confirm registered legal entity and business address. Do not infer LLC suffix.
- Public email confirmed by the owner: `breckenridge.josiah@layersteadtech.com`. Confirm the published phone remains the desired business number.
- Formspree confirmed that its enabled email workflow was saved with `breckenridge.josiah@layersteadtech.com` as the recipient. Confirm receipt of a test inquiry at this new destination; no access to the new inbox was requested or used. Gmail access was disconnected at the owner’s request.
- Approve inquiry, Formspree, email, and customer-record retention/deletion periods.
- Confirm no-sale practice and provider/account spam-prevention settings.
- Identify deployment provider, logging, retention, and any external analytics.
- Review proposed Virginia law and dispute wording with counsel.
- Complete project agreement decisions: scope, prices, payment, equipment, access, cancellation, warranty, liability, and signatures.

Legal pages are visibly marked drafts with explicit placeholders. The Service Agreement route is an unsigned framework and has no electronic-signature flow. Preserve final accepted documents and versions outside this website's inquiry form.

## Validation

Production build and whitespace checks passed. Production HTTP checks returned 200 for all five pages and both displayed image assets. DOM interaction tests passed for concern selection and focus, welcome once per session and Escape, mobile menu Escape, form validation, mocked success/failure, preserved values after failure, reset after success, and document-version payload. Real Formspree delivery was verified as described above. The available cloud browser blocks localhost, and a local Chromium download was unavailable, so desktop/mobile visual browser QA remains outstanding. Do not treat the unexecuted Playwright script as a passing check. Complete browser QA at 320, 390, 768, and 1440 pixels, keyboard navigation, reduced motion, 200% text zoom, welcome once per session and Escape, accordion expansion, concern selection, validation, success, failure, and timeout states before release.

The owner authorized publishing the rebuild branch and opening a pull request. Release remains subject to the review items above; the branch does not itself update the live website.
