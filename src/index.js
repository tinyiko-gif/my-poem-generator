function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poem = document.querySelector("#poem-section");
  poem.classList.remove("hidden");

  new Typewriter("#poem", {
    strings: ["Generating poem.."],
    autoStart: true,
    cursor: null,
    delay: 1,
  });

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "344027118o9t0bba5e252d5b7747161f";
  let context =
    "You are a romantic poem writer. Your mission is to generate a 4 line poem in basic HTML. Do not include a title in the poem. Sign off the poem with `SheCodes AI` inside a <strong> element and include it only at the end of the poem on it's own line. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
