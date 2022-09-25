module.exports = {
  content: [
	"./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		keyframes: {
			'fade-in-down': {
				'0%': {
					opacity: '0',
					transform: 'translateY(-10px)'
				},
				'100%': {
					opacity: '1',
					transform: 'translateY(0)'
				},
			}
		},
		animation: {
			'fade-in-down': 'fade-in-down 2s ease-out infinite'
		}
	},
  },
  plugins: [],
}