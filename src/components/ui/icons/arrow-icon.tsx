interface Props {
	width?: number | string
	height?: number | string
}
const ArrowIcon = ({ width, height }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height={height}
			viewBox='0 -960 960 960'
			width={width}
			fill='#000'
		>
			<path d='m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z' />
		</svg>
	)
}

export default ArrowIcon
