/* eslint-disable no-mixed-spaces-and-tabs */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {'xl': {'max': '1230px'},
			        'lg': {'max': '1023px'},
							'md': {'max': '767px'},
							'sm': {'max': '639px'}},
		
		extend: {
			boxShadow: {'herolearnmore': 'inset 0 0 0 3px #fff',
									'pricing': 'inset 0 0 0 1.5px #e67e22',
									'mealcard': '0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)',
									'mealcardhover': '0 3.2rem 6.4rem rgba(0, 0, 0, 0.06)',
									'contact': '0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)',
									'click': '0 0.5rem 1.2rem rgba(69,38,10,0.49)'},
			
			backgroundImage: {'contact': "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('./assets/img/eating.jpg')"},
			
			fontFamily: {'rubik400': ['rubik-400', 'sans-serif'],
									 'rubik500': ['rubik-500', 'sans-serif'],
									 'rubik600': ['rubik-600', 'sans-serif'],
									 'rubik700': ['rubik-700', 'sans-serif']},
			
			colors: {'primary': {'100': '#fdf2e9', '200': '#fae5d3', DEFAULT: '#e67e22', '600': '#cf711f',
													 '700': '#45260a', '800': 'rgba(69, 38, 10, 0.49)'},
							 'grey': {'100': '#ddd', '200': '#6f6f6f', DEFAULT: '#555', '700': '#333'}},
			
			gridTemplateColumns: {'pricing': '28% 28% 28%',
														'contact': '2fr 1fr'},
			
			maxWidth: {'8xl': '96rem'},   // 1536px
		},
	},
	plugins: [],
}
