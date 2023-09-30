/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './App.{js,jsx,ts,tsx}',
      // using ./src/ dir
      './src/**/*.{js,ts,jsx,tsx}',
      './public/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        screens: {
          xs: '360px', // Min. Mobile Viewport
          sm: '400px',
          lg: '430px', // Max. Mobile Viewport Iphone 14 Pro Max
        },
        fontSize: {
          xs: '12px',
          sm: '14px',
          base: '16px',
          lg: '20px',
          xl: '24px',
          '4xl': ['2.125rem', {lineHeight: '123.5%'}],
        },
        colors: {
          white: '#FFFFFF',
          black: '#000000',
          tahiti: {
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
            900: '#164e63',
          },
          green: {
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          grey: {
            300: '#d1d5db',
            400: '#9ca3af',
          },
        },
      },
    },
    // plugins: [],
  };
  