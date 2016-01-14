export default class Romantic {
	constructor(regex = /\<([a-zA-Z0-9_-]+)\>/g) {
		this.regex = regex
	}
	match(romanticString, input) {
		romanticString = romanticString.split(/\s+/g)
		input = input.split(/\s+/g)
		const result = {}
		romanticString.forEach((roman, i) => {
			if (this.regex.test(roman)) {
				const key = roman.replace(this.regex, '$1')
				result[key] = input[i]
			}
		})
		return result
	}
}
