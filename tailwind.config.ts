/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--main-bg-color)',
        'bg-secondary': 'var(--secondary-bg-color)',
        'bg-controls': 'var(--controls-bg-color)',
        'font-main': 'var(--main-font-color)',
        'font-secondary': 'var(--secondary-font-color)',
        'font-contrast': 'var(--contrast-font-color)',
        'btn-rendered': 'var(--rendered-button-bg-color)',
        'tab-main': 'var(--action-tab-main-bg-color)',
        'tab-secondary': 'var(--action-tab-secondary-bg-color)',
        'btn-clone': 'var(--clone-button-bg-color)',
        'bg-active': 'var(--active-block-bg-color)',
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        sm: 'var(--small-font-size)',
        base: 'var(--main-font-size)',
        lg: 'var(--large-font-size)',
        xl: 'var(--huge-font-size)',
      },
      fontWeight: {
        normal: 'var(--main-font-weight)',
      },
      spacing: {
        tiny: 'var(--tiny-gap)',
        basic: 'var(--basic-gap)',
        medium: 'var(--medium-gap)',
        large: 'var(--large-gap)',
        header: 'var(--header-height)',
        editor: 'var(--editor-height)',
      },
      borderRadius: {
        sm: 'var(--small-border-radius)',
        md: 'var(--medium-border-radius)',
        lg: 'var(--large-border-radius)',
      },
    },
  },
  plugins: [],
};
