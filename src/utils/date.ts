import { CONFIG } from '@/site.config'

const dateFormat = new Intl.DateTimeFormat(CONFIG.i18n.date.locale, CONFIG.i18n.date.options)

export function getFormattedDate(
	date: string | number | Date,
	options?: Intl.DateTimeFormatOptions
) {
	if (typeof options !== 'undefined') {
		return new Date(date).toLocaleDateString(CONFIG.i18n.date.locale, {
			...(CONFIG.i18n.date.options as Intl.DateTimeFormatOptions),
			...options
		})
	}

	return dateFormat.format(new Date(date))
}

export function getFormattedDateSpan(
	startDate: string | number | Date,
	endDate: string | number | Date
) {
	const start = new Date(startDate)
	const end = new Date(endDate)

	const diff = end.getTime() - start.getTime()
	const diffInDays = Math.ceil(diff / (1000 * 3600 * 24))
	const diffInMonths = Math.floor(diffInDays / 30)
	const diffInYears = Math.floor(diffInDays / 365)
	const diffInWeeks = Math.floor(diffInDays / 7)

	const remainingMonths = diffInMonths % 12

	if (diffInYears > 0) {
		return `${diffInYears} year${diffInYears > 1 ? 's' : ''}${remainingMonths > 0 ? ` and ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : ''}`
	}
	if (diffInMonths > 0) {
		return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`
	}
	if (diffInWeeks > 0) {
		return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''}`
	}
	if (diffInDays > 0) {
		return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`
	}
	return ''
}
