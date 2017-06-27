export function removeNonNumerics (text) {
	const regexp = /\d/;

    return _removeByRegexp(text, regexp);
}

export function removeSpecialChars (text) {
	const regexp = /[\d\sa-záàâãéèêíïóôõöúüçñA-ZÁÀÂÃÉÈÊÍÏÓÒÖÚÜÇÑ]/;

    return _removeByRegexp(text, regexp);
}

export function applyPattern (text, pattern) {
	let patternSplitted = pattern.split('');
	let patternLength = patternSplitted.length;
	let textWithPattern = '';
	let auxText = removeSpecialChars(text);
	let i = 0;

	for (i = 0; i < patternLength; i++) {
		if (auxText.length <= 0) {
			return textWithPattern;
		}

		if (patternSplitted[i].match(/[a-zA-Z1-9]/)) {
			textWithPattern = textWithPattern + auxText.substr(0, 1);
			auxText = auxText.substr(1, auxText.length);
		} else {
			textWithPattern = textWithPattern + patternSplitted[i];
		}
	}

	return textWithPattern;
}

function _removeByRegexp (text, regexp) {
    if (!text) {
        return null;
    }

    return text.toString().split('').filter((value) => {
        return value.match(regexp);
    }).join('');
}
