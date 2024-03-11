const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
//Allows you to access the elements labeled in the index.html file.


const apiKey = "HigT8Scm3YN6Twkez3Anbg==0RSoI1VZWvouhe5A"

const options = {
	method: "GET",
	headers: {
		"X-Api-Key": apiKey,
	}
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
//This is used to access a "database" of dad jokes for your site. ApiKey, ApiURL, and options are needed to access and send the jokes to your site. 


async function getJoke() {
	try {
		jokeEl.innerText = "Thinking...";
	btnEl.disabled = true;
	btnEl.innerText = "One sec...";
	const response = await fetch(apiURL, options);
	const data = await response.json();
	//Once button is pressed, it will prompt "Thinking" in the text area and the button will say "One sec" as it is processing your request to fetch the data from your Api.


	btnEl.disabled = false;
	btnEl.innerText = "Tell me a joke.";
	//If the button has not been pressed and/or you already received a joke, the buttom will now say "Tell me a joke".


	jokeEl.innerText = data[0].joke;
		//This delivers and presents the first joke in the array of jokes that you access through your Api.

	/* console.log("clicked"); TEST */
		
	} catch (error) {
		jokeEl.innerText = "Error";
		btnEl.innerText = "Hi, Error. I'm Dad.";
	}
		//If there is an error process your request, the text area for a joke will say "Error" and the button will say "Hi, Error. I'm Dad."
}

btnEl.addEventListener("click", getJoke);
//This makes the button interactive by allowing your code to execute the getJoke function once the button is clicked. 