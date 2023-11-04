import { colors } from '../helpers/colorsHelper'

interface FieldProps {
	width: string
	labelName: string
	value: string
	tooltipText?: string
}

export default function Field({ width, labelName, value }: FieldProps) {
	const widthClass: string = `flex flex-col justify-start ${width}`
	const handleOnClick = async () => {
		await navigator.clipboard.writeText(value)
	}
	return (
		<>
			<div className={widthClass}>
				<label className='flex justify-start whitespace-nowrap text-xs opacity-50'>
					{labelName}
				</label>
				<span
					onClick={handleOnClick}
					className={`copy-field-tooltip relative mt-1 flex cursor-pointer justify-start overflow-hidden whitespace-nowrap border-b-2 px-2 pb-1 pt-2 transition-[background-color] duration-100 ease-in-out hover:rounded hover:bg-gradient-to-bl hover:shadow-md active:bg-gradient-to-bl ${colors.border} ${colors.hover} ${colors.active}`}
				>
					{value}
				</span>
			</div>
		</>
	)
}
