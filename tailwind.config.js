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
		container: {
			center: true,
		}
	},
	variants: {},
	plugins: [
	],
}
