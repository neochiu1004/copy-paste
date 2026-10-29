/** Tailwind config for ClipFlow.
 * Previously inlined for the Play CDN; now used to prebuild app.css:
 *   npx tailwindcss -c tailwind.config.js -i src.css -o app.css --minify
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        "primary": "#00658d",
        "primary-container": "#c6e7ff",
        "on-primary-container": "#001e2d",
        "on-primary": "#ffffff",
        "surface": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e6eeff",
        "surface-container-high": "#dce9ff",
        "on-surface": "#0d1c2e",
        "on-surface-variant": "#3e4850",
        "outline": "#6e7881",
        "outline-variant": "#bdc8d1",
        "secondary": "#4f616a",
        "secondary-container": "#cfe3ee",
        "tertiary": "#725c00",
        "tertiary-container": "#ffe07c",
        "error": "#ba1a1a"
      },
      fontFamily: {
        "body-md": ["Noto Sans TC", "Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Noto Sans TC", "Quicksand", "sans-serif"],
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
