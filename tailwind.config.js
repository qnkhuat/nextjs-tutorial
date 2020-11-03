module.exports = {
	corePlugins:{
		preflight:false,
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
		}
	},
	variants: {},
	plugins: [
	],
}
