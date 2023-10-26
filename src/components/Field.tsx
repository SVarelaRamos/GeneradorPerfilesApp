import { Tooltip } from 'react-tooltip'

interface FieldProps {
	width: string
	labelName: string
	value: string
	tooltipText?: string
}

export default function Field({
	width,
	labelName,
	value,
	tooltipText = 'Clica para copiar'
}: FieldProps) {
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
					className='copy-field-tooltip relative mt-1 flex cursor-pointer justify-start overflow-hidden whitespace-nowrap border-b-2 border-blue-200 px-2 pb-1 pt-2 transition-colors duration-200 ease-in-out hover:rounded hover:bg-gradient-to-bl hover:from-slate-400 hover:to-blue-200 hover:text-gray-800 hover:shadow-md hover:shadow-blue-400/20  active:bg-gradient-to-bl active:from-blue-300 active:to-blue-200'
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
				content={tooltipText}
			/>
		</>
	)
}
