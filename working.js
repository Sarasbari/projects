function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(joke => {
      // Set the text for setup and punchline
      document.getElementById("setup").textContent = joke.setup;
      document.getElementById("punchline").textContent = joke.punchline;

      // Show the joke container if hidden
      document.getElementById("joke-box").style.display = "block";
    })
    .catch(error => {
      console.error("Failed to fetch joke:", error);
      document.getElementById("setup").textContent = "Oops! Couldn't fetch a joke.";
      document.getElementById("punchline").textContent = "";
      document.getElementById("joke-box").style.display = "block";
    });
}

// Attach event listener to button
document.getElementById("joke").addEventListener("click", getJoke);
