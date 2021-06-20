module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        header: 'var(--header-height)',
        contentcontainer: 'calc(100vh - var(--header-height))'
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-main)',
          light: 'var(--primary-main-light)'
        }
      },
      spacing: {
        header: 'var(--header-height)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
