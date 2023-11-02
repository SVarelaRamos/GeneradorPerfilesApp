import apellidos from '../data/apellidos.json'
import calles from '../data/calles.json'
import direcciones from '../data/direcciones.json'
import nombres from '../data/nombres.json'

interface DireccionesType {
	PRO: number
	CON: number
	EC: number
	ES: number
	NUC: number
	PARROQUIA: string
	PROVINCIA: string
	CONCELLO: string
	NOME: string
}
export enum stringFormatEnum {
	Upercase,
	Lowercase,
	StartCase
}

export const formatProfile = (stringFormat = stringFormatEnum.Upercase) => {
	console.log(stringFormat)
	const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
		String.fromCharCode('A'.charCodeAt(0) + index)
	)
	const addressData = JSON.parse(JSON.stringify(direcciones)) as DireccionesType[]
	const { nombres: nombresData } = JSON.parse(JSON.stringify(nombres))
	const { apellidos: apellidosData } = JSON.parse(JSON.stringify(apellidos))
	const { calles: callesData } = JSON.parse(JSON.stringify(calles))
	console.log(callesData, nombresData, apellidosData)
	const randName = nombresData[Math.floor(Math.random() * nombresData.length)]
	const randFirstLastname = apellidosData[Math.floor(Math.random() * apellidosData.length)]
	const randSecondLastname = apellidosData[Math.floor(Math.random() * apellidosData.length)]
	const randAddress = addressData[Math.floor(Math.random() * addressData.length)]
	const provincePrefix = randAddress.PRO
	const randCP = String(provincePrefix) + String(Math.floor(Math.random() * 1000)).padStart(3, '0')
	const randPhone = getRandPhone(provincePrefix)
	const randMobile = '6' + String(Math.floor(Math.random() * 100000000)).padStart(8, '0')
	const randNumber = String(Math.floor(Math.random() * 200))
	const randFloor = String(Math.floor(Math.random() * 5))
	const randBlock = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
	const randStreet = callesData[Math.floor(Math.random() * callesData.length)]
	const randStreetType = randStreet.split(' ')[0]
	const randDoor = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
	const randEmail = `${randName}.${randFirstLastname}@mail.gal`

	return {
		name: formatValue(randName, stringFormat),
		firstLastName: formatValue(randFirstLastname, stringFormat),
		secondLastName: formatValue(randSecondLastname, stringFormat),
		nif: formatValue(generateNIF(), stringFormatEnum.Upercase),
		streetType: formatValue(randStreetType, stringFormat),
		streetName: formatValue(randStreet, stringFormat),
		number: formatValue(randNumber, stringFormat),
		block: formatValue(randBlock, stringFormat),
		floor: formatValue(randFloor, stringFormat),
		door: formatValue(randDoor, stringFormat),
		parish: formatValue(randAddress.PARROQUIA, stringFormat),
		city: formatValue(randAddress.NOME, stringFormat),
		cp: formatValue(randCP, stringFormat),
		province: formatValue(randAddress.PROVINCIA, stringFormat),
		municipality: formatValue(randAddress.CONCELLO, stringFormat),
		locality: formatValue(randAddress.NOME, stringFormat),
		phone: formatValue(randPhone, stringFormat),
		mobilePhone: formatValue(randMobile, stringFormat),
		email: formatValue(randEmail, stringFormatEnum.Lowercase)
	}
}

const formatValue = (value: string, stringFormat: stringFormatEnum) => {
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

const getRandPhone = (provincePrefix: number) => {
	if (provincePrefix === 15) {
		return '981' + String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
	}
	if (provincePrefix === 27) {
		return '982' + String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
	}
	if (provincePrefix === 32) {
		return '988' + String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
	}
	if (provincePrefix === 36) {
		return '986' + String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
	}
	return '900' + String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
}

function generateNIF() {
	const dni = Math.floor(Math.random() * 90000000) + 10000000
	const letrasNIF = 'TRWAGMYFPDXBNJZSQVHLCKE'
	const letra = letrasNIF.charAt(dni % 23)
	return `${dni}${letra}`
}
