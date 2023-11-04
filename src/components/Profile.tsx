import { useTranslation } from 'react-i18next'
import Field from './Field'

export interface ProfileProps {
	name: string
	firstLastName: string
	secondLastName: string
	nif: string
	streetType: string
	streetName: string
	number: string
	block: string
	floor: string
	door: string
	parish: string
	city: string
	cp: string
	province: string
	municipality: string
	locality: string
	phone: string
	mobilePhone: string
	email: string
}

export default function Profile(profile: ProfileProps) {
	const {
		name,
		firstLastName,
		secondLastName,
		nif,
		streetType,
		streetName,
		number,
		block,
		floor,
		door,
		parish,
		city,
		cp,
		province,
		municipality,
		locality,
		phone,
		mobilePhone,
		email
	} = profile
	const { t } = useTranslation()

	return (
		<section className='my-16 flex flex-col gap-5'>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field width='flex-[2]' labelName={t('field.name')} value={name} />
				<Field width='flex-[2]' labelName={t('field.firstLastName')} value={firstLastName} />
				<Field width='flex-[2]' labelName={t('field.secondLastName')} value={secondLastName} />
				<Field width='flex-1' labelName={t('field.nif')} value={nif} />
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field width='flex-[2]' labelName={t('field.streetType')} value={streetType} />
				<Field width='flex-[8]' labelName={t('field.streetName')} value={streetName} />
				<Field width='flex-1' labelName={t('field.number')} value={number} />
				<Field width='flex-1' labelName={t('field.block')} value={block} />
				<Field width='flex-1' labelName={t('field.floor')} value={floor} />
				<Field width='flex-1' labelName={t('field.door')} value={door} />
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field width='flex-1' labelName={t('field.parish')} value={parish} />
				<Field width='flex-1' labelName={t('field.city')} value={city} />
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field width='flex-1' labelName={t('field.cp')} value={cp} />
				<Field width='flex-[2]' labelName={t('field.province')} value={province} />
				<Field width='flex-[4]' labelName={t('field.municipality')} value={municipality} />
				<Field width='flex-[4]' labelName={t('field.locality')} value={locality} />
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field width='flex-1' labelName={t('field.phone')} value={phone} />
				<Field width='flex-1' labelName={t('field.mobilePhone')} value={mobilePhone} />
				<Field width='flex-[3]' labelName={t('field.email')} value={email} />
			</div>
		</section>
	)
}
