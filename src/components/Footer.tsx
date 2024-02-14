import { useTranslation } from 'react-i18next'
import GitHubIcon from './GitHubIcon'
import LinkedInIcon from './LinkedInIcon'

function Footer() {
	const { t } = useTranslation()

	return (
		<footer className='flex flex-row items-center justify-center gap-6 border-t-2 border-blue-200/10 bg-slate-800/30 py-4 shadow-2xl shadow-blue-400/20'>
			<span className='text-xs'>
				{t('footer.madeBy')} <em className='text-orange-400'>Sergio Varela</em>
			</span>

			<div className='flex flex-row items-center gap-3'>
				<span className='transition-all duration-100 hover:scale-125 hover:text-blue-400'>
					<a
						href='https://www.linkedin.com/in/sergio-varela-ramos-60686346/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
					>
						<LinkedInIcon className='h-6 w-6' fill='currentColor' />
					</a>
				</span>
				<span className='transition-all duration-100 hover:scale-125 hover:text-slate-400'>
					<a
						href='https://github.com/SVarelaRamos/GeneradorPerfilesApp'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Github'
					>
						<GitHubIcon className='h-6 w-6' fill='currentColor' />
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
