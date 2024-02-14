export const colors = {
	border: 'border-blue-200/10',
	hover: 'hover:from-slate-400 hover:to-blue-200 hover:text-gray-800 hover:shadow-blue-400/20',
	active: 'active:from-blue-300 active:to-blue-200',
	selected: 'from-slate-400 to-blue-200 text-gray-800 shadow-blue-400/20',
	simpleBg: 'bg-blue-200',
	text: 'text-gray-800',
	shadow: 'shadow-blue-400/10',
	tooltip: {
		light: {
			text: 'rgb(31 41 55)',
			background: ''
		},
		dark: {
			text: 'rgb(31 41 55)',
			background: '#76a9fa'
		}
	}
}

export const componentsColors = {
	base: `${colors.border} ${colors.hover} ${colors.active}`,
	selected: colors.selected
}
