export const exerciseOptions = {
	method: "GET",
	params: { limit: "100" },
	headers: {
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		"X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
	},
};

export const fetchData = async (url, options) => {
	const res = await fetch(url, options);
	const data = await res.json();

	return data;
};
