const useToTitleCase = () => {
	const toTitleCase = (fullName) => {
		let words = fullName.toLowerCase().split(' ');

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].slice(1);
		}

		return words.join(' ');
	};

	return toTitleCase;
};

export default useToTitleCase;
