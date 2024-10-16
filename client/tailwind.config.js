module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure all your component paths are included
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'], // Include the themes you want to use
  },
};
