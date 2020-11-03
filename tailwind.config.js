module.exports = {
	corePlugins:{
		preflight:false
	},
	future: {
		//removeDeprecatedGapUtilities: true,
		//purgeLayersByDefault: true,
	},
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
		},
		container: {
			center: true,
			padding: {
				default: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
			}
		}
	},
	variants: {},
	plugins: [],
}
