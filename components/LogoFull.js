function LogoFull(props) {
	return (
		<svg width={102} height={28} viewBox="0 0 102 28" fill="none" {...props}>
			<path
				d="M.053 27.787H4.41v-8.15h.225c.478.815 1.77 2.052 4.187 2.052 3.99 0 6.716-3.204 6.716-7.869 0-4.665-2.782-7.7-6.829-7.7-2.472 0-3.709 1.35-4.13 2.024h-.225V6.486h-4.3v21.3zm7.672-10.033c-1.995 0-3.4-1.49-3.4-3.85 0-2.22 1.32-3.85 3.4-3.85 2.023 0 3.4 1.518 3.4 3.85 0 2.277-1.377 3.85-3.4 3.85zM25.55 17.005c4.778 0 8.01-3.4 8.01-7.784s-3.232-7.784-7.982-7.784c-4.805 0-8.008 3.4-8.008 7.784s3.231 7.784 7.98 7.784zm0-3.934c-2.051 0-3.569-1.574-3.569-3.85 0-2.248 1.518-3.85 3.57-3.85 2.079 0 3.596 1.602 3.596 3.85s-1.517 3.85-3.597 3.85zM42.429 21.689c2.445 0 3.681-1.377 4.103-2.052h.224v1.686h4.328V.247h-4.356v7.925h-.224c-.506-.787-1.855-2.052-4.188-2.052-3.99 0-6.744 3.204-6.744 7.869 0 4.665 2.782 7.7 6.857 7.7zm.983-3.935c-2.051 0-3.428-1.545-3.428-3.85 0-2.276 1.377-3.85 3.4-3.85 1.995 0 3.429 1.49 3.429 3.85 0 2.192-1.321 3.85-3.4 3.85zM56.444 4.828c1.49 0 2.557-.9 2.557-2.36 0-1.462-1.067-2.361-2.557-2.361s-2.557.899-2.557 2.36c0 1.461 1.068 2.36 2.557 2.36zM54.28 21.323h4.356V6.486H54.28v14.837zM67.054 21.689c1.995 0 3.4-1.012 3.962-1.996h.225v1.63h4.131V6.486h-4.356v8.318c0 1.573-1.011 2.838-2.529 2.838-1.49 0-2.388-1.068-2.388-2.614V6.486h-4.356v9.891c0 3.091 2.023 5.312 5.311 5.312zM78.787 21.323h4.356v-8.346c0-1.602.955-2.81 2.388-2.81 1.49 0 2.305 1.068 2.305 2.585v8.571h4.355v-8.318c0-1.658.956-2.838 2.389-2.838 1.517 0 2.248 1.068 2.248 2.698v8.458h4.356v-9.976c0-3.091-2.164-5.227-5.396-5.227-1.854 0-3.26.647-4.3 2.024h-.196c-.9-1.265-2.36-2.024-4.3-2.024-1.967 0-3.26.984-3.877 1.967h-.225V6.486h-4.103v14.837z"
				fill="#E6E5E5"
			/>
			<path
				fill="url(#paint0_radial)"
				d="M19.2747 17.8105H32.1546V21.32319H19.2747z"
			/>
			<defs>
				<radialGradient
					id="paint0_radial"
					cx={0}
					cy={0}
					r={1}
					gradientUnits="userSpaceOnUse"
					gradientTransform="matrix(-1.03565 3.8237 -15.92115 -4.31225 26.892 17.298)">
					<stop stopColor="#50F3FE" />
					<stop offset={1} stopColor="#33A7FB" />
				</radialGradient>
			</defs>
		</svg>
	)
}

export default LogoFull

LogoFull.defaultProps = {
	height: 35,
	width: 135,
	fill: "var(--gray-100)",
}
