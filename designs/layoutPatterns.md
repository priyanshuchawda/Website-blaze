# Layout Patterns

## Grid Layouts and Breakpoint Definitions
The design will primarily use a responsive grid system, leveraging Tailwind CSS's utility-first approach.

- **Default Grid:** `grid grid-cols-1` for mobile, adapting to `grid-cols-2`, `grid-cols-3`, `grid-cols-4` etc., as screen size increases.
- **Container:** A fixed-width container for content, centered horizontally.
    - `max-w-sm` (640px) for small screens
    - `max-w-md` (768px) for medium screens
    - `max-w-lg` (1024px) for large screens
    - `max-w-xl` (1280px) for extra large screens
    - `max-w-2xl` (1536px) for 2x extra large screens
    - `mx-auto` for centering.
- **Gutters:** Consistent spacing between grid items, typically using Tailwind's `gap-x-*` and `gap-y-*` utilities (e.g., `gap-4` for 16px).

### Breakpoint Definitions (Tailwind CSS Defaults)
- **`sm`:** 640px (e.g., `sm:grid-cols-2`)
- **`md`:** 768px (e.g., `md:grid-cols-3`)
- **`lg`:** 1024px (e.g., `lg:grid-cols-4`)
- **`xl`:** 1280px (e.g., `xl:grid-cols-5`)
- **`2xl`:** 1536px (e.g., `2xl:grid-cols-6`)

## Section Blueprints

### Hero Section
- **Structure:** Full-width background (image/gradient/particle effect), centered content (heading, subheading, CTA button).
- **Responsiveness:** Text sizes, padding, and image scaling adjust for mobile. Content stack vertically on small screens.
- **Example Classes:** `relative h-screen flex items-center justify-center text-center bg-cover bg-center`

### Cards
- **Structure:** Flexible container with image/icon, title, description, and optional CTA.
- **Layout:** Used in grid layouts (e.g., `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
- **Emphasis:** Subtle shadows (`shadow-md`), rounded corners (`rounded-lg`), hover effects (`hover:shadow-xl`).
- **Example Classes:** `bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center`

### Forms
- **Structure:** Vertically stacked labels and input fields, clear error messages, submit button.
- **Input Styling:** Consistent border, padding, focus state.
- **Responsiveness:** Full-width inputs on mobile, multi-column layouts on larger screens.
- **Example Classes:** `w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`

### Testimonials
- **Structure:** Carousel or grid of individual testimonial blocks (quote, author, image).
- **Layout:** Centered content, clear separation between testimonials.
- **Emphasis:** Distinct background or border for testimonial blocks.
- **Example Classes:** `bg-gray-100 p-6 rounded-lg italic text-gray-700`

## Gestalt Rules (Applied in Design)

### Similarity
- **Application:** Visually similar elements (e.g., all buttons having the same style, all headings using the same font and weight for a given level) are perceived as related.
- **Implementation:** Consistent use of Tailwind CSS utility classes for components.

### Proximity
- **Application:** Elements close to each other are perceived as more related than elements that are farther apart.
- **Implementation:** Strategic use of spacing utilities (`margin`, `padding`, `gap`) to group related content and create visual hierarchy.

### Visual Hierarchy
- **Application:** Guiding the user's eye through the content by varying size, color, contrast, and placement.
- **Implementation:** Larger, bolder text for headings; primary colors for CTAs; ample white space around important elements.
