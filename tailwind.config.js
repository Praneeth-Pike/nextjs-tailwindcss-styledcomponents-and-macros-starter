module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				gray: {
					50: "var(--gray-50)",
					100: "var(--gray-100)",
					200: "var(--gray-200)",
					300: "var(--gray-300)",
					400: "var(--gray-400)",
					500: "var(--gray-500)",
					600: "var(--gray-600)",
					700: "var(--gray-700)",
					800: "var(--gray-800)",
				},
				black: {
					100: "var(--black-100)",
					200: "var(--black-200)",
					300: "var(--black-300)",
					400: "var(--black-400)",
					500: "var(--black-500)",
					600: "var(--black-600)",
					700: "var(--black-700)",
					800: "var(--black-800)",
				},
			},
			borderRadius: {
				2: "0.5rem",
				4: "1rem",
				8: "2rem",
			},
			fontFamily: {
				primary: [
					"inter-ui",
					"Helvetica",
					"-apple-system",
					"BlinkMacSystemFont",
					"Arial",
					"sans-serif",
				],
			},
			screens: {
				dark: { raw: "(prefers-color-scheme: dark)" }, // => @media (prefers-color-scheme: dark) { ... }
				xs: "320px",
				xl: "1440px",
				xxl: "1600px",
			},
			fontSize: {
				2: "0.125rem",
				4: "0.25rem",
				6: "0.375rem",
				8: "0.5rem",
				12: "0.75rem",
				base: "1rem",
				20: "1.25rem",
				24: "1.5rem",
				28: "1.75rem",
				32: "2rem",
				36: "2.25rem",
				40: "2.5rem",
				44: "2.75rem",
				48: "3rem",
				52: "3.25rem",
				56: "3.5rem",
				58: "3.75rem",
				66: "8.25rem",
				"7xl": "5rem",
				"8xl": "6rem",
			},
			zIndex: {
				999: 999,
			},
		},
		opacity: {
			0: "0",
			10: ".1",
			20: ".2",
			30: ".3",
			40: ".4",
			50: ".5",
			60: ".6",
			70: ".7",
			80: ".8",
			90: ".9",
			100: "1",
		},
		zIndex: {
			0: 0,
			10: 10,
			20: 20,
			30: 30,
			40: 50,
			999: 999,
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/ui")],
}

/**
 *
 * sm: 320px
 * md: 768px
 * lg: 1024px
 * xl: 1920px
 *
 *                   sm             md                       lg                      xl
 * [0 --------- 639][640 ----- 767][768 ---------------1023][1024 -------------1279][1280 ------------ infinity]
 *
 *
 */
