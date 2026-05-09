/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./layout/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid",
    "./statics/**/*.liquid",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "hsl(var(--theme-color-base-100) / <alpha-value>)",
          200: "hsl(var(--theme-color-base-200) / <alpha-value>)",
          300: "hsl(var(--theme-color-base-300) / <alpha-value>)",
          content: "hsl(var(--theme-color-base-content) / <alpha-value>)",
        },
        primary: "hsl(var(--theme-color-primary) / <alpha-value>)",
        "primary-content": "hsl(var(--theme-color-primary-content) / <alpha-value>)",
        secondary: "hsl(var(--theme-color-secondary) / <alpha-value>)",
        "secondary-content": "hsl(var(--theme-color-secondary-content) / <alpha-value>)",
        accent: "hsl(var(--theme-color-accent) / <alpha-value>)",
        "accent-content": "hsl(var(--theme-color-accent-content) / <alpha-value>)",
        neutral: "hsl(var(--theme-color-neutral) / <alpha-value>)",
        "neutral-content": "hsl(var(--theme-color-neutral-content) / <alpha-value>)",
        info: "hsl(var(--theme-color-info) / <alpha-value>)",
        "info-content": "hsl(var(--theme-color-info-content) / <alpha-value>)",
        success: "hsl(var(--theme-color-success) / <alpha-value>)",
        "success-content": "hsl(var(--theme-color-success-content) / <alpha-value>)",
        warning: "hsl(var(--theme-color-warning) / <alpha-value>)",
        "warning-content": "hsl(var(--theme-color-warning-content) / <alpha-value>)",
        error: "hsl(var(--theme-color-error) / <alpha-value>)",
        "error-content": "hsl(var(--theme-color-error-content) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
