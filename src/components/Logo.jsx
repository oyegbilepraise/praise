import * as React from "react";

const Logo = React.forwardRef(({ color = "currentColor", width = 34, ...props }, ref) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			role="img"
			{ ...props }
			ref={ ref }
			width={ width }
		>
			<title>Oyegbile Praise</title>
			<rect
				x="3"
				y="3"
				width="42"
				height="42"
				rx="12"
				fill="none"
				stroke={ color }
				strokeWidth="3"
			/>
			<path
				d="M18 34 V14 h7 a6 6 0 0 1 0 12 h-7"
				fill="none"
				stroke={ color }
				strokeWidth="3.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28 34 h5"
				fill="none"
				stroke={ color }
				strokeWidth="3.5"
				strokeLinecap="round"
			/>
		</svg>
	);
})
export default Logo;
