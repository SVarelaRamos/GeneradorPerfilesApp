import { Tooltip } from 'react-tooltip'

interface FieldProps {
	width: string
	labelName: string
	value: string
}

export default function Field({ width, labelName, value }: FieldProps) {
	const widthClass: string = `flex flex-col justify-start ${width}`
	const handleOnClick = async () => {
		await navigator.clipboard.writeText(value)
	}
	return (
		<>
			<div className={widthClass}>
				<label className='flex justify-start text-xs opacity-50'>{labelName}</label>
				<span
					onClick={handleOnClick}
					className='copy-field-tooltip relative mt-1 flex cursor-pointer justify-start overflow-hidden border-b-2 border-blue-200 px-1 pb-1 pt-2 transition-colors duration-200 ease-in-out hover:bg-blue-200 hover:text-gray-800 active:bg-blue-400'
				>
					{value}
				</span>
			</div>
			<Tooltip
				id='copy-field-tooltip'
				style={{
					backgroundColor: 'rgb(59 130 246)',
					fontSize: '0.75rem',
					lineHeight: '1rem',
					color: 'rgb(255 255 255)'
				}}
				anchorSelect='.copy-field-tooltip'
				content='Clica para copiar'
			/>
		</>
	)
}
