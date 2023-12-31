import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './App.css'
import Profile, { type ProfileProps } from './components/Profile'
import { colors } from './helpers/colorsHelper'
import { buildProfile, formatProfile } from './helpers/profileHelper'

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

const MAX_PROFILES = 10

const generateProfiles = (profileNum: number) => {
	const profiles: ProfileProps[] = []
	for (let i = 0; i < profileNum; i++) {
		profiles.push(buildProfile())
	}
	return profiles
}

function App() {
	const componentsColors = {
		base: `${colors.border} ${colors.hover} ${colors.active}`,
		selected: colors.selected
	}

	const { t, i18n } = useTranslation()

	const [stringFormat, setStringFormat] = useState(stringFormatEnum.Upercase)

	const [profileNum, setProfileNum] = useState(1)

	const [profiles, setProfiles] = useState(generateProfiles(profileNum))

	const addProfileNum = () => {
		if (profileNum === MAX_PROFILES) return
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

	const handleClickUpercase = () => {
		setStringFormat(stringFormatEnum.Upercase)
	}
	const handleClickLowercase = () => {
		setStringFormat(stringFormatEnum.Lowercase)
	}
	const handleClickStartCase = () => {
		setStringFormat(stringFormatEnum.StartCase)
	}

	const classNameCaseButton = `border font-medium active:bg-gradient-to-bl py-1 px-6 rounded-md hover:shadow-md hover:bg-gradient-to-bl ${componentsColors.base}`
	const classNameUpercaseButton =
		classNameCaseButton +
		(stringFormatEnum.Upercase === stringFormat
			? ` bg-gradient-to-bl shadow-md ${componentsColors.selected}`
			: '')
	const classNameLowercaseButton =
		classNameCaseButton +
		(stringFormatEnum.Lowercase === stringFormat
			? ` bg-gradient-to-bl shadow-md ${componentsColors.selected}`
			: '')
	const classNameStartcaseButton =
		classNameCaseButton +
		(stringFormatEnum.StartCase === stringFormat
			? ` bg-gradient-to-bl shadow-md ${componentsColors.selected}`
			: '')

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setProfiles(generateProfiles(profileNum))
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
							className={`justify-start rounded-md border px-4 py-1 text-xs hover:bg-gradient-to-bl hover:shadow-md active:bg-gradient-to-bl ${
								componentsColors.base
							} ${
								i18n.resolvedLanguage === lng
									? `bg-gradient-to-bl shadow-md ${componentsColors.selected}`
									: ''
							}`}
							type='submit'
							onClick={async () => await i18n.changeLanguage(lng)}
						>
							{lngs[lng as keyof LangsType].nativeName}
						</button>
					))}
				</div>
				<h1 className='mt-16'>{t('header.title')}</h1>
			</header>
			<main
				className={`mt-8 rounded-xl border p-10 shadow-2xl backdrop-blur-md backdrop-brightness-90 ${colors.border} ${colors.shadow}`}
			>
				<section className='flex w-full flex-row flex-wrap justify-between gap-16'>
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
				{profiles.map((profile, index) => (
					<Profile key={String(index)} {...formatProfile(profile, stringFormat)} />
				))}
				<Tooltip
					id='copy-field-tooltip'
					style={{
						backgroundColor: colors.tooltip.dark.background,
						fontSize: '0.75rem',
						lineHeight: '1rem',
						color: colors.tooltip.dark.text
					}}
					anchorSelect='.copy-field-tooltip'
					content={t('tooltip.clickToCopy')}
				/>
			</main>
		</>
	)
}

export default App
