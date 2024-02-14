import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import ButtonBox from './components/ButtonBox'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import { colors } from './helpers/colorsHelper'
import { StringFormatEnum, formatProfile, generateProfiles } from './helpers/profileHelper'

function App() {
	const { t, i18n } = useTranslation()
	const MAX_PROFILES = 10

	const [stringFormat, setStringFormat] = useState<StringFormatEnum>(StringFormatEnum.Upercase)
	const [profileNum, setProfileNum] = useState<number>(1)

	const handleClickPlus = () => {
		if (profileNum === MAX_PROFILES) return
		setProfileNum(profileNum + 1)
	}
	const handleClickMinus = () => {
		if (profileNum === 1) return
		setProfileNum(profileNum - 1)
	}

	const handleClickUpercase = () => {
		setStringFormat(StringFormatEnum.Upercase)
	}
	const handleClickLowercase = () => {
		setStringFormat(StringFormatEnum.Lowercase)
	}
	const handleClickStartCase = () => {
		setStringFormat(StringFormatEnum.StartCase)
	}

	const [profiles, setProfiles] = useState(generateProfiles(profileNum))

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setProfiles(generateProfiles(profileNum))
	}

	useEffect(() => {
		document.title = t('header.title')
	}, [i18n.resolvedLanguage])

	return (
		<>
			<Header />
			<main className='w-full flex-1 px-4'>
				<div
					className={`container mx-auto mt-8 rounded-xl border p-10 shadow-2xl backdrop-blur-md backdrop-brightness-90 ${colors.border} ${colors.shadow}`}
				>
					<ButtonBox
						handleSubmit={handleSubmit}
						handleClickLowercase={handleClickLowercase}
						handleClickMinus={handleClickMinus}
						handleClickPlus={handleClickPlus}
						handleClickStartCase={handleClickStartCase}
						handleClickUpercase={handleClickUpercase}
						profileNum={profileNum}
						stringFormat={stringFormat}
					/>
					{profiles.map((profile, index) => (
						<Profile key={String(index)} {...formatProfile(profile, stringFormat)} />
					))}
				</div>
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
			<Footer />
		</>
	)
}

export default App
