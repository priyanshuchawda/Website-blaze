# Component Library

## Reusable UI Components

### Buttons
- **Primary Button:**
    - **Purpose:** Main call to action.
    - **Appearance:** Solid background (Primary Color), white text, rounded corners, medium padding.
    - **States:**
        - `Hover`: Slightly darker background, subtle scale up.
        - `Focus`: Visible outline (Accent Color).
        - `Active`: Slightly pressed appearance.
        - `Disabled`: Lighter background, greyed-out text, no interaction.
    - **Accessibility:** High contrast, keyboard navigable, `aria-label` if text is not descriptive.
    - **Example Classes:** `bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50`

- **Secondary Button:**
    - **Purpose:** Alternative actions, less emphasis.
    - **Appearance:** Outlined (Secondary Color border), transparent background, text matching border color.
    - **States:** Similar to primary button, but with border/text color changes.
    - **Accessibility:** High contrast, keyboard navigable.
    - **Example Classes:** `border border-secondary text-secondary px-6 py-3 rounded-md font-semibold hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50`

### Inputs (Text, Email, Password)
- **Appearance:** Light background, subtle border (Neutral-200), rounded corners, consistent padding.
- **States:**
    - `Focus`: Primary Color ring/border.
    - `Error`: Red border (Error Color), accompanying error message.
    - `Disabled`: Lighter background, greyed-out text.
- **Accessibility:** Clear `label` elements, `placeholder` text, `aria-invalid` for error states, `autocomplete` for common fields.
- **Example Classes:** `w-full p-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary`

### Modals
- **Purpose:** Display critical information or gather input without navigating away.
- **Structure:** Overlay background (semi-transparent dark), centered content box (white background, rounded corners, padding), close button.
- **Interaction:** Close on overlay click or ESC key.
- **Accessibility:** Focus trapping, `aria-modal="true"`, proper heading structure within modal.
- **Example Classes:** `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50` (overlay) `bg-white p-8 rounded-lg shadow-lg max-w-md w-full` (content)

### Navigation (Navbar)
- **Structure:** Fixed at top, logo, navigation links, optional CTA button.
- **Responsiveness:** Hamburger menu for mobile, full navigation for desktop.
- **States:** Active link highlighting.
- **Accessibility:** Semantic `<nav>` element, `aria-current` for active links, keyboard navigable.
- **Example Classes:** `fixed top-0 left-0 w-full bg-white shadow-md z-40 p-4 flex justify-between items-center`

## Emphasis Patterns

### Shadows
- **Subtle:** `shadow-sm` (for small elements, subtle depth)
- **Medium:** `shadow-md` (for cards, sections)
- **Large:** `shadow-lg` (for modals, prominent elements)
- **Hover:** `hover:shadow-xl` (for interactive elements)

### Gradients
- **Usage:** Backgrounds, hero sections, subtle accents.
- **Direction:** `bg-gradient-to-r`, `bg-gradient-to-br` etc.
- **Colors:** Use brand colors or complementary shades.
- **Example Classes:** `bg-gradient-to-r from-primary to-blue-400`

### Hover & Focus States
- **Consistency:** Apply consistent hover/focus effects across all interactive elements (buttons, links, cards, inputs).
- **Visual Feedback:** Provide clear visual feedback on interaction.
- **Accessibility:** Ensure focus states are always visible and distinct.

## Accessibility
- **Focus Outlines:** Ensure default browser focus outlines are visible or provide custom, highly visible outlines.
- **ARIA Roles:** Use `role` attributes (e.g., `role="button"`, `role="navigation"`) where native HTML elements don't fully convey semantic meaning.
- **Keyboard Interactions:** All interactive elements must be fully operable via keyboard. Test with Tab, Enter, Space keys.
- **Semantic Markup:** Prioritize using native HTML elements (`<button>`, `<a href>`, `<input>`) over generic `div`s for interactive components.
