export function removeNonNumerics (text) {
	const regexp = /\d/;

    return _removeByRegexp(text, regexp);
}

export function removeSpecialChars (text) {
	const regexp = /[\d\sa-záàâãéèêíïóôõöúüçñA-ZÁÀÂÃÉÈÊÍÏÓÒÖÚÜÇÑ-]/;

    return _removeByRegexp(text, regexp);
}

export function applyPattern (text, pattern) {
	let aux = text;
	let textWithPattern = '';
	let newPattern = pattern.split(/(\W)/).filter((string) => {
		return string.length > 0;
	});

	newPattern.map((value, index) => {
		if (aux.length <= 0) {
			return;
		}

		if (value.match(/\w/)) {
			textWithPattern = textWithPattern + aux.slice(0, value.length);
			aux = aux.slice(value.length);
		} else {
			textWithPattern = textWithPattern + value;
		}

	})

	return textWithPattern;
}

function _removeByRegexp (text, regexp) {
    if (typeof text !== 'string') {
        return null;
    }

    return text.split('').filter((value) => {
        return value.match(regexp);
    }).join('');
}
