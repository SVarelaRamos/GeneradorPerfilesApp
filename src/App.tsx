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

const lngs = {
	en: { nativeName: 'English' },
	gl: { nativeName: 'Galego' },
	es: { nativeName: 'Castellano' }
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
		'border border-blue-200 active:bg-blue-400 py-1 px-6 rounded hover:bg-blue-200 hover:text-gray-800'
	const classNameUpercaseButton =
		classNameCaseButton +
		(stringFormatEnum.Upercase === stringFormat ? ' bg-blue-200 text-gray-800' : '')
	const classNameLowercaseButton =
		classNameCaseButton +
		(stringFormatEnum.Lowercase === stringFormat ? ' bg-blue-200 text-gray-800' : '')
	const classNameStartcaseButton =
		classNameCaseButton +
		(stringFormatEnum.StartCase === stringFormat ? ' bg-blue-200 text-gray-800' : '')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<>
			<header>
				<div className='flex flex-row flex-grow justify-end gap-3'>
					{avaliableLangs.map((lng: string) => (
						<button
							key={lng}
							style={{
								fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'
							}}
							className={`border border-blue-200 active:bg-blue-400 py-1 px-4 rounded hover:bg-blue-200 hover:text-gray-800 justify-start text-xs ${
								i18n.resolvedLanguage === lng ? 'bg-blue-200 text-gray-800' : ''
							}`}
							type='submit'
							onClick={async () => await i18n.changeLanguage(lng)}
						>
							{lngs[lng].nativeName}
						</button>
					))}
				</div>
				<h1>{t('header.title')}</h1>
			</header>
			<main className='mt-8 border border-blue-200 rounded p-10 h-screen'>
				<section className='flex flex-row justify-around w-full'>
					<div className='flex flex-row flex-grow justify-start'>
						<form onSubmit={handleSubmit} className='flex flex-row justify-start gap-5'>
							<button
								className='border border-blue-200 active:bg-blue-400 py-1 px-6 rounded hover:bg-blue-200 hover:text-gray-800 justify-start'
								type='submit'
							>
								Xerar
							</button>
							<div className='flex flex-row flex-grow justify-start gap-1'>
								<input
									className='bg-blue-200 text-gray-800 text-center rounded w-12'
									type='text'
									min='1'
									max='10'
									value={profileNum}
									disabled
								/>
								<button
									onClick={handleClickMinus}
									className='border border-blue-200 active:bg-blue-400 py-1 px-4 rounded hover:bg-blue-200 hover:text-gray-800 justify-start'
									type='button'
								>
									-
								</button>
								<button
									onClick={handleClickPlus}
									className='border border-blue-200 active:bg-blue-400 py-1 px-4 rounded hover:bg-blue-200 hover:text-gray-800 justify-start'
									type='button'
								>
									+
								</button>
							</div>
						</form>
					</div>
					<div className='flex flex-row flex-grow justify-end gap-5'>
						<button onClick={handleClickUpercase} className={classNameUpercaseButton} type='button'>
							MAIÚSCULAS
						</button>
						<button
							onClick={handleClickLowercase}
							className={classNameLowercaseButton}
							type='button'
						>
							minúsculas
						</button>
						<button
							onClick={handleClickStartCase}
							className={classNameStartcaseButton}
							type='button'
						>
							Start Case
						</button>
					</div>
				</section>
				<section className='flex flex-col mt-12 gap-5'>
					<div className='flex flex-row gap-10 flex-wrap'>
						<Field width='w-72' labelName='Nome' value={formatValue('Manuel')} />
						<Field width='w-72' labelName='Primeiro apelido' value={formatValue('Martinez')} />
						<Field width='w-72' labelName='Segundo apelido' value={formatValue('Díaz')} />
						<Field width='w-32' labelName='NIF' value={'33333333P'} />
					</div>
					<div className='flex flex-row gap-10 flex-wrap'>
						<Field width='w-28' labelName='Tipo de vía' value={formatValue('RÚA')} />
						<Field width='w-96' labelName='Nome da vía' value={formatValue('ROSALÍA DE CASTRO')} />
						<Field width='w-12' labelName='Número' value={formatValue('34')} />
						<Field width='w-12' labelName='Bloque' value={formatValue('A')} />
						<Field width='w-12' labelName='Andar' value={formatValue('4')} />
						<Field width='w-12' labelName='Porta' value={formatValue('J')} />
					</div>
					<div className='flex flex-row gap-10 flex-wrap'>
						<Field width='w-96' labelName='Parroquia' value={formatValue('SAN JUAN')} />
						<Field width='w-96' labelName='Lugar' value={formatValue('A RIVA')} />
					</div>
					<div className='flex flex-row gap-10 flex-wrap'>
						<Field width='w-28' labelName='CP' value={formatValue('15700')} />
						<Field width='w-72' labelName='Provincia' value={formatValue('A Coruña')} />
						<Field
							width='w-72'
							labelName='Concello'
							value={formatValue('Santiago de Compostela')}
						/>
						<Field
							width='w-72'
							labelName='Localidade'
							value={formatValue('Santiago de compostela')}
						/>
					</div>
					<div className='flex flex-row gap-10 flex-wrap'>
						<Field width='w-28' labelName='Telefono' value={formatValue('981556688')} />
						<Field width='w-28' labelName='Telefono Móvil' value={formatValue('666556688')} />
						<Field
							width='w-96'
							labelName='Correo electrónico'
							value={'manuel.martinez@galicia.org'}
						/>
					</div>
				</section>
			</main>
		</>
	)
}

export default App
