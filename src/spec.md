# Specification

## Summary
**Goal:** Build a single-page, playful Valentine proposal for Palak with “Yes/No” choices, a shrinking “No” button, and a celebratory “Yes” message, styled in a warm Valentine theme.

**Planned changes:**
- Create a single-page UI asking Palak to be the user’s Valentine with two prominent buttons: “Yes” and “No”.
- Implement “No” click behavior to progressively shrink the “No” button on each click without breaking layout usability.
- Implement “Yes” click behavior to transition the UI to a large message: “YAYYYY I LOVEEEEEEE YOUUUUUUUU”, and prevent further “No” interactions.
- Apply a consistent Valentine-themed design using warm reds/pinks/creams (no blue/purple dominant palette) and ensure responsive layout on mobile/desktop.
- Add and use generated static images from `frontend/public/assets/generated` within the page layout.

**User-visible outcome:** The user can open a Valentine-themed page addressed to Palak, click “No” to watch it shrink, or click “Yes” to see a big celebratory message take over the screen.
