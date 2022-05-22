const capitalise = (name) => {
	var nameCap = "";

	for (let i = 0; i < name.length; i++) {
		if (i == 0) {
			nameCap += name[i].toUpperCase();
		} else if (name.charAt(i) == "-") {
			nameCap += " ";
		} else if (name.charAt(i - 1) == "-") {
			nameCap += name[i].toUpperCase();
		} else {
			nameCap += name[i];
		}
	}

	return nameCap;
};

export { capitalise };
