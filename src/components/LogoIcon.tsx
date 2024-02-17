function LogoIcon({
	className,
	color,
	bgColor
}: {
	className?: string
	color?: string
	bgColor?: string
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			xmlSpace='preserve'
			viewBox='0 0 569 566'
			className={className}
		>
			<circle cx={283.8} cy={282.8} r={280.8} fill={bgColor} />
			<defs>
				<circle id='a' cx={283.9} cy={287.3} r={260.6} />
			</defs>
			<clipPath id='b'>
				<use xlinkHref='#a' overflow='visible' />
			</clipPath>
			<path
				fill={color}
				d='M424.9 355.7c-27.1-1.8-54.4-3.4-81.5-5.4-1.8-.2-2.8.5-3.9 1.8-17.7 22.6-35.5 45-53.3 67.5-3.8 4.7-9 5.6-13.2 1.8-1.8-1.7-2.1-3.9-2.7-6-5.3-20.8-10.6-41.5-15.9-62.3-.2-.9-.1-2.3-1.1-2.5-1-.2-1.6 1.1-2.2 1.8-33.8 33.7-67.5 67.5-101.3 101.2-7.1 7.1-14 14.1-21.2 21-8.4 8.2-21.1 6.3-26.6-3.8-3.2-5.9-2-13.7 3.2-18.9 10.3-10.5 20.8-20.9 31.2-31.3 20.5-20.4 40.9-40.9 61.3-61.2l34.5-34.5c.6-.6 1.3-1 1.9-1.5 37.1-24 64.3-56.3 81.6-97.1 3.4-8 6.4-16.1 8.5-24.5.5-2 1.6-2.9 3.5-3.4 27.1-7.6 54.3-15.3 81.5-22.9 1.8-.5 3.4-1.1 5.4-.8 5.5.8 8.4 5.8 6.4 11.4-1.9 5.4-4.2 10.8-6.4 16.1-8.6 21.5-17.3 43.1-25.9 64.5-.7 1.9-.4 3.2.6 4.7 15.9 23.6 31.6 47.1 47.4 70.7 2.1 3.2 3.2 6.4 1.1 10s-5.5 4.5-9.4 4.1c-.8-.3-2.2-.3-3.5-.5z'
				clipPath='url(#b)'
			/>
			<defs>
				<circle id='c' cx={283.9} cy={287.3} r={260.6} />
			</defs>
			<clipPath id='d'>
				<use xlinkHref='#c' overflow='visible' />
			</clipPath>
			<path
				fill={color}
				d='M269.2 220v-19.2c-.1-7.1-4.5-11.5-11.5-11.6-4.7 0-9.4-.1-14.1 0-1.8 0-2.6-.4-2.5-2.4.6-13.1 1-26.2 1.7-39.3.4-6.7 7.4-10.2 12.8-6.3 4.5 3.2 8.7 7.1 13 10.6.9.7.8 1.7.8 2.7 0 4.1-.1 8.1 0 12.2.1 4.9 2.7 7.5 7.6 7.6 5.4.1 10.9.1 16.2 0 1.7 0 2.9.5 4.2 1.5 6.4 5.4 12.9 10.8 19.5 16.1 1.6 1.2 1.8 2.3.9 4.1-18.9 42.7-48.7 75.8-88.9 99.7-9.7 5.8-19.9 10.3-30.3 14.6-1.8.7-3.3.8-5.2.2-9.2-3.4-18.6-6.8-27.7-10.2-4.7-1.8-7.1-5.2-6.4-9.4.5-2.6 1.9-4.5 4.1-5.8 17.7-11.2 35.5-22.4 53.2-33.6 1.1-.7 2.4-.8 3.6-.8h36.1c8.9 0 12.9-4 12.9-13 .1-6 .1-11.8 0-17.7z'
				clipPath='url(#d)'
			/>
			<defs>
				<circle id='e' cx={283.9} cy={287.3} r={260.6} />
			</defs>
			<clipPath id='f'>
				<use xlinkHref='#e' overflow='visible' />
			</clipPath>
			<path
				fill={color}
				d='M238.3 242.3h-18.5c-3.2 0-3.9-.6-3.9-3.8 0-12.4-.1-24.9 0-37.4 0-2.9.8-3.8 3.7-3.8h37.7c2.8 0 3.7.9 3.7 3.8v37.4c0 3-.8 3.7-3.7 3.7l-19 .1zm-64.6-86.9c0-5 .1-9.9 0-14.9-.1-2.5.8-3.7 3.4-3.6 10.2.1 20.4.1 30.6 0 2.6 0 3.5 1.1 3.5 3.6-.1 10.1-.1 20.2 0 30.3 0 2.5-.8 3.6-3.4 3.6-10.2-.1-20.4-.1-30.6 0-2.6 0-3.5-1.1-3.4-3.5 0-5.2-.1-10.3-.1-15.5zm199.9-90.5c-.2.5-.3 1.8-.6 2.8-5.4 16.9-10.9 33.9-16.4 50.8-2.1 6.4-9.2 8.4-13.7 4-2.5-2.5-3-5.5-1.9-8.7 1.4-4.4 2.7-8.6 4.1-12.9 4.1-12.8 8.3-25.6 12.5-38.4 1.6-4.9 5.8-7.2 10.3-5.8 3.3.8 5.6 4 5.7 8.2zM400 449.6c-3.2.1-5.4-1.7-7.1-4.2-5.8-8.5-11.5-17-17.3-25.5-4.4-6.4-8.7-12.8-13-19.3-3.6-5.7-.4-12.2 6.3-12.6 3.6-.3 6 1.8 8.1 4.6 9.1 13.5 18.3 27.1 27.5 40.6 1.1 1.7 2.3 3.2 3.2 5.1 2.4 5.4-1.7 11.4-7.7 11.3zm112.5-211.2c0 4.2-2.8 7.3-7.5 8.3-6.2 1.2-12.4 2.4-18.6 3.5-10.9 2-21.6 4.1-32.5 6-.7.2-1.5.3-2.1.4-4.7.6-8.7-2-9.6-6.4-.8-4.5 1.8-8.7 6.5-9.7 13.1-2.5 26.3-5 39.3-7.4 4.7-.8 9.6-1.9 14.4-2.7 5.7-.8 10.1 2.8 10.1 8zm-333 102.8c-.2 3.5-2.3 6-5.8 7.6-14.9 7.1-29.9 14.2-44.8 21.3-1.4.6-2.7 1.5-4.1 2-4.4 1.7-8.9-.2-10.7-4.2-1.9-4.1-.2-8.6 4.1-10.7 6.2-3.2 12.5-6 18.8-9l30.6-14.6c5.7-2.6 12.1 1.3 11.9 7.6zm-7.9-142.8c0 7-6.2 10.7-12 7.9-8.7-4.3-17.5-8.6-26.2-13-7.7-3.8-15.3-7.5-22.8-11.4-3.7-1.9-5.3-5.6-4.4-9.3 1-3.8 4.3-6.3 8.2-6.2 1.5 0 2.8.5 4.1 1.1 16.1 8.1 32.4 16.1 48.4 24.2 3.1 1.7 4.6 4.2 4.7 6.7zm91.2-109.8H275c1.9 0 2.8.8 2.8 2.8v24.7c0 1.8-.8 2.7-2.7 2.7h-25c-1.9 0-2.5-1-2.5-2.8V91.3c0-2 1.1-2.7 3-2.7h12.2zm24.3 80.2c-3.2 0-6.3-.1-9.5 0-1.9.1-2.8-.6-2.8-2.6.1-6.6.1-13.2 0-19.8 0-1.9.8-2.6 2.6-2.5 6.5 0 13 0 19.6-.1 2.2 0 3 1 3 3.2-.1 6.2-.1 12.4 0 18.7.1 2.3-.7 3.3-3.2 3.2l-9.7-.1zm-67.9-68.1v7.6c0 1.6-.7 2.3-2.3 2.3h-15.4c-1.8 0-2.4-.8-2.4-2.5.1-5.1.1-10 0-15.1 0-1.8.7-2.4 2.5-2.4 5.1 0 10.1.1 15.1 0 1.9 0 2.6.8 2.5 2.6v7.5z'
				clipPath='url(#f)'
			/>
			<circle cx={283.8} cy={282.8} r={280.8} fill='none' stroke={bgColor} strokeMiterlimit={10} />
		</svg>
	)
}
export default LogoIcon
