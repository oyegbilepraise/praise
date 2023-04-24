import * as React from "react";

const Logo = React.forwardRef(({ color = "#292525", width = 30, ...props }, ref) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 127.07 174.28"
				{ ...props }
				ref={ ref }
				width={ width }
			>
				<defs>
					<style>
						{ `.prefix__cls-2{stroke:${ color };stroke-miterlimit:10;fill:#fff}` }
					</style>
				</defs>
				<g id="prefix__Layer_2" data-name="Layer 2">
					<g id="prefix__Layer_1-2" data-name="Layer 1">
						<path
							d="M126.52 74.36v48.48c0 12.94-5.46 22.68-16.81 29.11-9.84 5.58-19.51 11.46-29.37 17-10.84 6.1-22.2 6.62-32.88.34C17.73 151.84 2.38 125.47.52 91.12c-.18-3.23 1-5.27 3.86-6.83 6.85-3.77 13.48-8 20.4-11.59 3.66-1.92 5.27-4.16 5-8.49-.41-7.81 0-15.66-.16-23.49a7.35 7.35 0 014.16-7.25Q61.37 17.75 88.74 1.76C91.75 0 94.16.14 97 1.85c8.44 5 16.93 10 25.51 14.74 3 1.69 4.06 3.91 4 7.28-.05 16.83.01 33.66.01 50.49zM9.55 96.87c4.06 29 17.62 50.55 41.94 64.62a24.52 24.52 0 0036.85-20.82c.6-19.81.11-39.64.06-59.46 0-.2-.41-.4-.89-.83-5.45 3.13-11.18 6.14-16.58 9.67a7.77 7.77 0 00-3.11 5.34c-.32 9-.26 18-.1 27 .1 5.73-2.06 10.07-7 12.82-5.13 2.84-10.28 2.41-15.14-.73a33.46 33.46 0 01-15.09-22c-.35-1.65-1-3.83-2.2-4.62-5.75-3.71-11.73-6.95-18.74-10.99zm108.16-67.79c-16.81 9.71-32.62 18.82-48.37 28a3.86 3.86 0 00-1.58 2.77c-.13 6.9-.07 13.8-.07 21.7C75 77.34 81.45 73.62 87.91 70c6.69-3.8 9.42-2.22 9.43 5.52v61.43c0 3.88-.51 7.75-.81 11.84 15.74-6.87 21.83-13.09 21.34-30.63-.55-19.8-.13-39.62-.13-59.43zm-74.63 9.28C49.37 42 54.92 45 60.25 48.41c2.52 1.59 4.37 1.27 6.79-.17 10.3-6.11 20.73-12 31.09-18 4.87-2.81 9.71-5.66 15.05-8.78-6.49-3.77-12.33-7.28-18.31-10.53a4.84 4.84 0 00-4-.05c-15.76 8.94-31.44 18.04-47.79 27.48zm16.28 43.23c0-8 0-15-.06-21.89a3.29 3.29 0 00-1.3-2.43C51.79 53.55 45.48 50 38.52 46c0 7.73-.1 14.52.09 21.3a4.91 4.91 0 002 3.44c5.84 3.51 11.78 6.83 18.75 10.85zm-4.68 7.52C48 85.27 42.07 81.76 36 78.4a3.85 3.85 0 00-3.17-.22c-6.2 3.41-12.29 7-19 10.91 6.73 3.9 12.67 7.46 18.75 10.75a4.94 4.94 0 004-.31C42.34 96.36 48 93 54.68 89.11zm4.57 7.6c-6.8 3.91-13 7.34-19 11.06-.8.5-1.14 2.57-.89 3.75a23 23 0 0010.79 15.42c4.38 2.7 8.68.9 8.94-4.23.46-8.35.16-16.71.16-26z"
							stroke={ color }
							strokeMiterlimit={ 10 }
						/>
						<path
							className="prefix__cls-2"
							d="M9.55 96.87c7 4 13 7.28 18.71 10.93 1.23.79 1.85 3 2.2 4.62a33.46 33.46 0 0015.09 22c4.86 3.14 10 3.57 15.14.73 5-2.75 7.13-7.09 7-12.82-.16-9-.22-18 .1-27a7.77 7.77 0 013.11-5.34c5.4-3.53 11.13-6.54 16.58-9.67.48.43.89.63.89.83 0 19.82.54 39.65-.06 59.46a24.52 24.52 0 01-36.85 20.82c-24.29-14.01-37.85-35.52-41.91-64.56z"
						/>
						<path
							className="prefix__cls-2"
							d="M117.71 29.08v29.61c0 19.81-.42 39.63.13 59.43.49 17.54-5.6 23.76-21.34 30.63.3-4.09.8-8 .81-11.84q.12-30.72 0-61.43c0-7.74-2.74-9.32-9.43-5.52-6.43 3.66-12.88 7.38-20.19 11.61 0-7.9-.06-14.8.07-21.7a3.86 3.86 0 011.58-2.77c15.75-9.2 31.56-18.31 48.37-28.02zM43.08 38.36c16.35-9.44 32-18.54 47.78-27.49a4.84 4.84 0 014 .05c6 3.25 11.82 6.76 18.31 10.53-5.34 3.12-10.18 6-15.05 8.78-10.36 6-20.79 11.9-31.09 18-2.42 1.44-4.27 1.76-6.79.17C54.92 45 49.37 42 43.08 38.36zM59.36 81.59c-7-4-12.91-7.34-18.7-10.89a4.91 4.91 0 01-2-3.44c-.19-6.78-.09-13.57-.09-21.3 7 4 13.27 7.59 19.49 11.31a3.29 3.29 0 011.24 2.43c.11 6.93.06 13.86.06 21.89zM54.68 89.11C48 93 42.34 96.36 36.52 99.53a4.94 4.94 0 01-4 .31c-6.08-3.29-12-6.85-18.75-10.75 6.74-3.9 12.83-7.5 19-10.91a3.85 3.85 0 013.23.22c6.07 3.36 12 6.87 18.68 10.71zM59.25 96.71c0 9.25.3 17.65-.12 26-.26 5.13-4.56 6.93-8.94 4.23a23 23 0 01-10.79-15.42c-.25-1.18.09-3.25.89-3.75 5.99-3.72 12.16-7.15 18.96-11.06z"
						/>
					</g>
				</g>
			</svg>
		);
	}
)
export default Logo;
