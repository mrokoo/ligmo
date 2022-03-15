module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    // fontFamily: {
    //   body: ['Inter', 'sans-serif']
    // },
    extend: {
      colors: {
        'app-container': 'var(--app-container)',
        'main-color': 'var(--main-color)',
        'secondary-color': 'var(--secondary-color)',
        'link-color': 'var(--link-color)',
        'link-color-hover': 'var(--link-color-hover)',
        'link-color-active': 'var(--link-color-active)',
        'link-color-active-bg': 'var(--link-color-active-bg)',
        'projects-section': 'var(--projects-section)',
        'search-area-bg': 'var(--search-area-bg)',
        'light-font': 'var(--light-font)',
        'button-bg': 'var(--button-bg)', 
        'button-bgt': 'var(--button-bgt)'
      },
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}