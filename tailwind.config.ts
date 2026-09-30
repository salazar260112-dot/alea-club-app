/** @type {import('tailwindcss').Config} */
const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const buildScale = (role: string) =>
  STEPS.reduce<Record<string, string>>((acc, step) => {
    acc[step] = `oklch(var(--${role}-${step}) / <alpha-value>)`;
    return acc;
  }, {});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: buildScale("background"),
        foreground: buildScale("foreground"),
        primary: buildScale("primary"),
        accent: buildScale("accent"),
        secondary: buildScale("secondary"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px -4px oklch(var(--foreground-950) / 0.10)",
        card: "0 10px 30px -16px oklch(var(--foreground-950) / 0.18)",
        ring: "0 0 0 1px oklch(var(--background-300) / 0.9)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in .35s ease-out both",
        "fade-up": "fade-up .45s ease-out both",
        "fade-down": "fade-down .45s ease-out both",
        "scale-in": "scale-in .28s ease-out both",
        "slide-up": "slide-up .35s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
  plugins: [],
}