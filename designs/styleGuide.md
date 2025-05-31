# Style Guide

## Typography System
- **Font Families:**
    - **Primary (Headings):** 'Inter', sans-serif (Modern, clean, highly readable)
    - **Secondary (Body Text):** 'Roboto', sans-serif (Versatile, legible, good for long-form content)
    - **Monospace (Code/Data):** 'Fira Code', monospace (For code snippets, ensuring readability and consistent character width)
- **Font Loading:** Use Google Fonts or self-host for optimal performance. Implement font-display: swap for better perceived loading.

- **Font Scales (Tailwind CSS based):**
    - `text-xs`: 0.75rem (12px) - Fine print, captions
    - `text-sm`: 0.875rem (14px) - Small text, secondary info
    - `text-base`: 1rem (16px) - Default body text
    - `text-lg`: 1.125rem (18px) - Larger body text, subheadings
    - `text-xl`: 1.25rem (20px) - Section titles
    - `text-2xl`: 1.5rem (24px) - Main headings
    - `text-3xl`: 1.875rem (30px) - Large headings
    - `text-4xl`: 2.25rem (36px) - Hero titles
    - `text-5xl`: 3rem (48px) - Extra large hero titles
    - `text-6xl`: 3.75rem (60px) - Max hero titles

- **Line Heights (Tailwind CSS based):**
    - `leading-none`: 1
    - `leading-tight`: 1.25
    - `leading-snug`: 1.375
    - `leading-normal`: 1.5 (Default for body text)
    - `leading-relaxed`: 1.625
    - `leading-loose`: 2

## Color Tokens
(Refer to `designs/brandContext.md` for rationale and usage rules. These are the Tailwind CSS custom properties/variables.)

```css
/* In tailwind.config.js or global CSS */
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-accent: #28a745;
  --color-neutral-50: #f8f9fa;
  --color-neutral-100: #e9ecef;
  --color-neutral-200: #dee2e6;
  --color-neutral-800: #343a40;
  --color-neutral-900: #212529;
  --color-text-primary: #343a40;
  --color-text-secondary: #6c757d;
  --color-link: #007bff;
  --color-error: #dc3545;
}
```

- **Contrast Guidance:**
    - Ensure text on background meets WCAG 2.1 AA contrast ratio (minimum 4.5:1 for normal text, 3:1 for large text).
    - Tools like WebAIM Contrast Checker should be used for verification.

## Spacing System (rem-based scale divisible by four)
- **Base Unit:** 1rem = 16px (assuming default browser font size)
- **Spacing Scale (Tailwind CSS based):**
    - `space-px`: 1px
    - `space-0.5`: 0.125rem (2px)
    - `space-1`: 0.25rem (4px)
    - `space-2`: 0.5rem (8px)
    - `space-3`: 0.75rem (12px)
    - `space-4`: 1rem (16px) - Standard unit for small gaps
    - `space-5`: 1.25rem (20px)
    - `space-6`: 1.5rem (24px)
    - `space-8`: 2rem (32px) - Standard unit for medium gaps
    - `space-10`: 2.5rem (40px)
    - `space-12`: 3rem (48px) - Standard unit for large gaps
    - ... and so on, following Tailwind's default spacing scale.

- **CSS Variables (for custom spacing if needed):**
    ```css
    :root {
      --spacing-xs: 0.5rem;   /* 8px */
      --spacing-sm: 1rem;    /* 16px */
      --spacing-md: 1.5rem;  /* 24px */
      --spacing-lg: 2rem;    /* 32px */
      --spacing-xl: 3rem;    /* 48px */
    }
    ```

## Accessibility Notes
- **WCAG Contrast Ratios:** Strictly adhere to AA or AAA for all text and interactive elements.
- **Responsive Text Sizes:** Ensure font sizes scale appropriately across devices, preventing unreadable small text on mobile or excessively large text on desktop.
- **Keyboard Navigation:** All interactive elements must be reachable and operable via keyboard (Tab, Enter, Space).
- **Semantic HTML:** Use appropriate HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, `<article>`, `<section>`) to convey meaning and improve screen reader navigation.
- **ARIA Roles:** Use ARIA attributes (`aria-label`, `aria-describedby`, `role`) judiciously when native HTML semantics are insufficient.
- **Focus Outlines:** Ensure visible and clear focus outlines for keyboard users. Customize if necessary, but never remove.
- **Image Alt Text:** All meaningful images must have descriptive `alt` attributes. Decorative images should have `alt=""`.
