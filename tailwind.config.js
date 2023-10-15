module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: '#3490dc',
        secondary: '#ffed4a',
        // Add more custom colors as needed
      },
      fontFamily: {
        // Custom fonts
        custom: ['CustomFont', 'sans'],
        // Add more custom fonts as needed
      },
      // Custom spacing
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      // Custom typography styles
      typography: {
        'custom-heading': {
          fontWeight: 'bold',
          fontSize: '2rem',
          lineHeight: '2.5rem',
        },
        // Add more custom typography styles as needed
      },
    },
  },
  plugins: [],
};
