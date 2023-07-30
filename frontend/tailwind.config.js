/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'text': '#000a09',
        'background': '#f3f8fb',
        'primary': '#7ac1fa',
        'secondary': '#cae5fc',
        'accent': '#0e88ec',
        'greenHighlight' : "#7afa98",
        'blueHighlight': "#7a87fa"
      },
    },
  },
  plugins: [],
}
