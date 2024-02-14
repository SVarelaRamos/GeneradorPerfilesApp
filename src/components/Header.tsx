import { useTranslation } from 'react-i18next'
import { componentsColors } from '../helpers/colorsHelper'

function Header() {
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

	const { t, i18n } = useTranslation()

	return (
		<>
			<header className='mt-10 w-full px-4'>
				<div className='container mx-auto '>
					<div className='flex flex-grow flex-row justify-end gap-3 px-4'>
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
				</div>
			</header>
		</>
	)
}

export default Header
