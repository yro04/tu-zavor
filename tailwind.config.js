module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Specify where Tailwind should look for class names
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      height: {
        '60': '15rem',
      },
    },
  },
  
  plugins: [],
};
