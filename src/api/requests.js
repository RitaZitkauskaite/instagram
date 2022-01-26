export async function handleAuthRequest() {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return response.json();
	} catch (err) {
		console.log(err);
	}
}
