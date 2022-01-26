import { LOGIN_URL } from "./api/urls.js";
import { HandleAuthRequest } from "./api/requests.js";
document.addEventListener("DOMContentLoad", () => {
	handleForm("login", handleFormSubmit);
});

async function handleFormSubmit(event) {
	event.preventDefault();
	const inputs = event.target.querrSelectorAll("input");
	const inputsArray = [...inputs];
	const obj = {
		username: inputsArray.find((item) => item.name === "username").value,
		password: inputsArray.find((item) => item.name === "password").value,
	};
	console.log(inputs);
}

function handleForm(id, func) {
	const form = document.getElementById(id);
	form.addEventListener("submit", func);
}
