module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      'm-blue-darker': '#062a38',
      'm-blue-dark-middle': '#083647',
      'm-blue-dark': '#003b52',
      'm-blue': '#004c6a',
      'm-blue-hover': '#4d8297',
      'm-blue-active': '#003c57',
      'm-blue-outline-hover': '#e0eaed',
      'm-blue-outline-active': '#b3c9d2',
      'm-green': '#00a796',
      'm-green-hover': '#4dc1b6',
      'm-green-active': '#007f6f',
      'm-green-outline-hover': '#e0f4f2',
      'm-green-outline-active': '#b3e5e0',
      'm-green-top': '#d0f0f2',
      'm-green-medium': '#eef8f7',
      'm-green-light': '#effbff',
      'm-text-darker': '#2c2f33',
      'm-text-dark': '#42474d',
      'm-text-medium': '#585f66',
      'm-text-light': '#6e7780',
      'm-text-lighter': '#848e99'
    },
    extend: {
      boxShadow: {
        'm-shadow': '0px 5px 16px rgb(0 0 0 / 7%)'
      }
    }
  },
  plugins: [require('tailwindcss-labeled-groups')(['1', '2', '3'])]
}
