import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import Field from './components/Field'

enum stringFormatEnum {
	Upercase,
	Lowercase,
	StartCase
}

interface LangsType {
	gl: { nativeName: string }
	es: { nativeName: string }
	en: { nativeName: string }
}

const lngs: LangsType = {
	gl: { nativeName: 'Galego' },
	es: { nativeName: 'Castellano' },
	en: { nativeName: 'English' }
}

const avaliableLangs: string[] = Object.keys(lngs)

function App() {
	const { t, i18n } = useTranslation()

	const [stringFormat, setStringFormat] = useState(stringFormatEnum.StartCase)

	const [profileNum, setProfileNum] = useState(1)

	const addProfileNum = () => {
		if (profileNum === 10) return
		setProfileNum(profileNum + 1)
	}
	const subtractProfileNum = () => {
		if (profileNum === 1) return
		setProfileNum(profileNum - 1)
	}

	const handleClickPlus = () => {
		addProfileNum()
	}
	const handleClickMinus = () => {
		subtractProfileNum()
	}

	const formatValue = (value: string) => {
		if (stringFormat === stringFormatEnum.Upercase) {
			return value.toLocaleUpperCase()
		}
		if (stringFormat === stringFormatEnum.Lowercase) {
			return value.toLocaleLowerCase()
		}
		if (stringFormat === stringFormatEnum.StartCase) {
			const array = value
				.toLocaleLowerCase()
				.split(' ')
				.map((word) => {
					return word.charAt(0).toLocaleUpperCase() + word.slice(1)
				})
			return array.join(' ')
		}
		return value
	}

	const handleClickUpercase = () => {
		setStringFormat(stringFormatEnum.Upercase)
	}
	const handleClickLowercase = () => {
		setStringFormat(stringFormatEnum.Lowercase)
	}
	const handleClickStartCase = () => {
		setStringFormat(stringFormatEnum.StartCase)
	}

	const classNameCaseButton =
		'border border-blue-200 active:bg-gradient-to-bl active:from-blue-300 active:to-blue-200 py-1 px-6 rounded hover:shadow-md hover:shadow-blue-400/20 hover:bg-gradient-to-bl hover:from-slate-400 hover:to-blue-200 hover:text-gray-800'
	const classNameUpercaseButton =
		classNameCaseButton +
		(stringFormatEnum.Upercase === stringFormat
			? ' bg-gradient-to-bl from-slate-400 to-blue-200 text-gray-800 shadow-md shadow-blue-400/20'
			: '')
	const classNameLowercaseButton =
		classNameCaseButton +
		(stringFormatEnum.Lowercase === stringFormat
			? ' bg-gradient-to-bl from-slate-400 to-blue-200 text-gray-800 shadow-md shadow-blue-400/20'
			: '')
	const classNameStartcaseButton =
		classNameCaseButton +
		(stringFormatEnum.StartCase === stringFormat
			? ' bg-gradient-to-bl from-slate-400 to-blue-200 text-gray-800 shadow-md shadow-blue-400/20'
			: '')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<>
			<header>
				<div className='flex flex-grow flex-row justify-end gap-3'>
					{avaliableLangs.map((lng: string) => (
						<button
							key={lng}
							style={{
								fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'
							}}
							className={`justify-start rounded border border-blue-200 px-4 py-1 text-xs hover:bg-gradient-to-bl hover:from-slate-400 hover:to-blue-200 hover:text-gray-800 hover:shadow-md hover:shadow-blue-400/20 active:bg-gradient-to-bl active:from-blue-300 active:to-blue-200 ${
								i18n.resolvedLanguage === lng
									? 'bg-gradient-to-bl from-slate-400 to-blue-200 text-gray-800 shadow-md shadow-blue-400/20'
									: ''
							}`}
							type='submit'
							onClick={async () => await i18n.changeLanguage(lng)}
						>
							{lngs[lng as keyof LangsType].nativeName}
						</button>
					))}
				</div>
				<h1 className='mt-8'>{t('header.title')}</h1>
			</header>
			<main className='mt-8 h-screen rounded border border-blue-200 p-10 shadow-2xl shadow-blue-400/20 backdrop-blur-md backdrop-brightness-90'>
				<section className='flex w-full flex-row flex-wrap justify-around gap-5'>
					<div className='flex flex-grow flex-row justify-start'>
						<form onSubmit={handleSubmit} className='flex flex-row justify-start gap-5'>
							<button
								className='justify-start rounded border border-blue-200 px-6 py-1 hover:bg-gradient-to-bl hover:from-slate-400 hover:to-blue-200 hover:text-gray-800 active:bg-gradient-to-bl active:from-blue-300 active:to-blue-200'
								type='submit'
							>
								{t('button.generate')}
							</button>
							<div className='flex flex-grow flex-row justify-start gap-1'>
								<input
									className='w-12 rounded bg-blue-200 text-center text-gray-800'
									type='text'
									min='1'
									max='10'
									value={profileNum}
									disabled
								/>
								<button
									onClick={handleClickMinus}
									className='justify-start rounded border border-blue-200 px-4 py-1 hover:bg-gradient-to-bl hover:from-slate-400 hover:to-blue-200 hover:text-gray-800 hover:shadow-md hover:shadow-blue-400/20 active:bg-gradient-to-bl active:from-blue-300 active:to-blue-200'
									type='button'
								>
									-
								</button>
								<button
									onClick={handleClickPlus}
									className='justify-start rounded border border-blue-200 px-4 py-1 hover:bg-gradient-to-bl hover:from-slate-400 hover:to-blue-200 hover:text-gray-800 hover:shadow-md hover:shadow-blue-400/20 active:bg-gradient-to-bl active:from-blue-300 active:to-blue-200'
									type='button'
								>
									+
								</button>
							</div>
						</form>
					</div>
					<div className='flex flex-grow  flex-row flex-wrap-reverse justify-end gap-5'>
						<button onClick={handleClickUpercase} className={classNameUpercaseButton} type='button'>
							{t('button.uppercase')}
						</button>
						<button
							onClick={handleClickLowercase}
							className={classNameLowercaseButton}
							type='button'
						>
							{t('button.lowercase')}
						</button>
						<button
							onClick={handleClickStartCase}
							className={classNameStartcaseButton}
							type='button'
						>
							{t('button.startcase')}
						</button>
					</div>
				</section>
				<section className='mt-12 flex flex-col gap-5'>
					<div className='flex flex-row flex-wrap gap-10'>
						<Field
							width='w-72'
							labelName={t('field.name')}
							value={formatValue('Manuel')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-72'
							labelName={t('field.firstLastName')}
							value={formatValue('Martinez')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-72'
							labelName={t('field.secondLastName')}
							value={formatValue('Díaz')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-32'
							labelName={t('field.nif')}
							value={'33333333P'}
							tooltipText={t('tooltip.clickToCopy')}
						/>
					</div>
					<div className='flex flex-row flex-wrap gap-10'>
						<Field
							width='w-28'
							labelName={t('field.streetType')}
							value={formatValue('RÚA')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-96'
							labelName={t('field.streetName')}
							value={formatValue('ROSALÍA DE CASTRO')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-12'
							labelName={t('field.number')}
							value={formatValue('34')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-12'
							labelName={t('field.block')}
							value={formatValue('A')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-12'
							labelName={t('field.floor')}
							value={formatValue('4')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-12'
							labelName={t('field.door')}
							value={formatValue('J')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
					</div>
					<div className='flex flex-row flex-wrap gap-10'>
						<Field
							width='w-96'
							labelName={t('field.parish')}
							value={formatValue('SAN JUAN')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-96'
							labelName={t('field.city')}
							value={formatValue('A RIVA')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
					</div>
					<div className='flex flex-row flex-wrap gap-10'>
						<Field
							width='w-28'
							labelName={t('field.cp')}
							value={formatValue('15700')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-72'
							labelName={t('field.province')}
							value={formatValue('A Coruña')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-72'
							labelName={t('field.municipality')}
							value={formatValue('Santiago de Compostela')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-72'
							labelName={t('field.locality')}
							value={formatValue('Santiago de compostela')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
					</div>
					<div className='flex flex-row flex-wrap gap-10'>
						<Field
							width='w-28'
							labelName={t('field.phone')}
							value={formatValue('981556688')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-28'
							labelName={t('field.mobilePhone')}
							value={formatValue('666556688')}
							tooltipText={t('tooltip.clickToCopy')}
						/>
						<Field
							width='w-96'
							labelName={t('field.email')}
							value={'manuel.martinez@galicia.org'}
							tooltipText={t('tooltip.clickToCopy')}
						/>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
