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
				<Field
					width='flex-[2]'
					labelName={t('field.name')}
					value={name}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[2]'
					labelName={t('field.firstLastName')}
					value={firstLastName}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[2]'
					labelName={t('field.secondLastName')}
					value={secondLastName}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.nif')}
					value={nif}
					tooltipText={t('tooltip.clickToCopy')}
				/>
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field
					width='flex-[2]'
					labelName={t('field.streetType')}
					value={streetType}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[8]'
					labelName={t('field.streetName')}
					value={streetName}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.number')}
					value={number}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.block')}
					value={block}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.floor')}
					value={floor}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.door')}
					value={door}
					tooltipText={t('tooltip.clickToCopy')}
				/>
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field
					width='flex-1'
					labelName={t('field.parish')}
					value={parish}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.city')}
					value={city}
					tooltipText={t('tooltip.clickToCopy')}
				/>
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field
					width='flex-1'
					labelName={t('field.cp')}
					value={cp}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[2]'
					labelName={t('field.province')}
					value={province}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[4]'
					labelName={t('field.municipality')}
					value={municipality}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[4]'
					labelName={t('field.locality')}
					value={locality}
					tooltipText={t('tooltip.clickToCopy')}
				/>
			</div>
			<div className='flex flex-row flex-wrap gap-10'>
				<Field
					width='flex-1'
					labelName={t('field.phone')}
					value={phone}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-1'
					labelName={t('field.mobilePhone')}
					value={mobilePhone}
					tooltipText={t('tooltip.clickToCopy')}
				/>
				<Field
					width='flex-[3]'
					labelName={t('field.email')}
					value={email}
					tooltipText={t('tooltip.clickToCopy')}
				/>
			</div>
		</section>
	)
}
