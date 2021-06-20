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
          main: 'var(--primary-main)'
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
