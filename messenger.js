const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#message-show").classList.remove("hide");

	document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (e) => {
	// default behavior is to submit the form to a backend server
	// since we don't have a backend server, we disable it.
	e.preventDefault();

	//toggle form visibility
	document.querySelector("#message-form").classList.add("hide");
	document.querySelector("#link-form").classList.remove("hide");

	const inputm = document.querySelector("#message-input");

	//btoa function converts input into base64 code
	const encrypted = btoa(inputm.value);

	const inputl = document.querySelector("#link-input");
	inputl.value = `${window.location}#${encrypted}`;
	inputl.select();
});
