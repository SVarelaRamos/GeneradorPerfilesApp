import { type FormEventHandler, type MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import { colors, componentsColors } from '../helpers/colorsHelper'
import { StringFormatEnum } from '../helpers/profileHelper'

function ButtonBox({
	profileNum,
	handleSubmit,
	handleClickMinus,
	handleClickPlus,
	handleClickUpercase,
	handleClickLowercase,
	handleClickStartCase,
	stringFormat
}: {
	profileNum: number
	handleSubmit: FormEventHandler
	handleClickMinus: MouseEventHandler
	handleClickPlus: MouseEventHandler
	handleClickUpercase: MouseEventHandler
	handleClickLowercase: MouseEventHandler
	handleClickStartCase: MouseEventHandler
	stringFormat: StringFormatEnum
}) {
	const { t } = useTranslation()

	const classNameCaseButton = `border font-medium active:bg-gradient-to-bl py-1 px-6 rounded-md hover:shadow-md hover:bg-gradient-to-bl ${componentsColors.base}`
	const classNameUpercaseButton =
		classNameCaseButton +
		(StringFormatEnum.Upercase === stringFormat
			? ` bg-gradient-to-bl shadow-md ${componentsColors.selected}`
			: '')
	const classNameLowercaseButton =
		classNameCaseButton +
		(StringFormatEnum.Lowercase === stringFormat
			? ` bg-gradient-to-bl shadow-md ${componentsColors.selected}`
			: '')
	const classNameStartcaseButton =
		classNameCaseButton +
		(StringFormatEnum.StartCase === stringFormat
			? ` bg-gradient-to-bl shadow-md ${componentsColors.selected}`
			: '')

	return (
		<>
			<section className='flex w-full flex-row flex-wrap justify-between gap-x-5 gap-y-5'>
				<div className='flex flex-row justify-start'>
					<form onSubmit={handleSubmit} className='flex flex-row justify-start gap-5'>
						<button
							className={`justify-start rounded-md border px-6 py-1 hover:bg-gradient-to-bl hover:shadow-md active:bg-gradient-to-bl ${componentsColors.base}`}
							type='submit'
						>
							{t('button.generate')}
						</button>
						<div className='flex flex-row justify-start gap-1'>
							<span
								className={`w-12 rounded-md border py-1 text-center ${colors.text} ${colors.simpleBg}`}
							>
								{profileNum}
							</span>
							<button
								onClick={handleClickMinus}
								className={`justify-start rounded-md border px-4 py-1 hover:bg-gradient-to-bl hover:shadow-md active:bg-gradient-to-b ${componentsColors.base}`}
								type='button'
							>
								-
							</button>
							<button
								onClick={handleClickPlus}
								className={`justify-start rounded-md border px-4 py-1 hover:bg-gradient-to-bl hover:shadow-md active:bg-gradient-to-b ${componentsColors.base}`}
								type='button'
							>
								+
							</button>
						</div>
					</form>
				</div>
				<div className='flex flex-row flex-wrap justify-start gap-1'>
					<button onClick={handleClickUpercase} className={classNameUpercaseButton} type='button'>
						{t('button.uppercase')}
					</button>
					<button onClick={handleClickLowercase} className={classNameLowercaseButton} type='button'>
						{t('button.lowercase')}
					</button>
					<button onClick={handleClickStartCase} className={classNameStartcaseButton} type='button'>
						{t('button.startcase')}
					</button>
				</div>
			</section>
		</>
	)
}

export default ButtonBox
