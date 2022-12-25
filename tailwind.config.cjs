const defaultTheme = require('tailwindcss/defaultTheme');
// const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#E4EBF9',
					100: '#C5D4F2',
					200: '#A8BEEA',
					300: '#8AA7E1',
					400: '#6D91D8',
					500: '#517BCF',
					600: '#4769AD',
					700: '#3D578C',
					800: '#31446B',
					900: '#24324C',
				},
				secondary: {
					50: '#F7E9CC',
					100: '#F1D8A7',
					200: '#EAC781',
					300: '#E3B65C',
					400: '#DCA438',
					500: '#D49313',
					600: '#C58508',
					700: '#B47700',
					800: '#A16800',
					900: '#8B5800',
				},
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
