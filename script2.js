async function query(data) { //For fetching the API
    const response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          "Accept": "image/png",
          "Authorization":
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", // You can replace this with your own API key if you want
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  
    const result = await response.blob();
    return result;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const comicForm = document.getElementById("comic-form");
    const generateButton = document.getElementById("generate-button");
    const comicContainer = document.getElementById("comic");
    const loadingElement = document.getElementById("loading");
  
    generateButton.addEventListener("click", async function () {
      loadingElement.classList.remove("hidden"); // Showing loading animation
  
      comicContainer.innerHTML = ""; // Clearing previous comic panels
  
      const panelTextInputs = document.querySelectorAll(".panel-input");
      const panelTexts = Array.from(panelTextInputs).map((input) => input.value);
  
      for (let i = 0; i < panelTexts.length; i++) {
        const text = panelTexts[i];
        const panel = document.createElement("div");
        panel.classList.add("panel");
  
        if (text.trim() !== "") {
          const response = await query({ "inputs": text });
  
          if (response) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(response);
            panel.appendChild(img);
          } else {
            panel.textContent = "Failed to generate panel."; //In case generation failed
          }
        } else {
            panel.textContent = "Panel text is empty."; //If no prompt is given
        }
  
        comicContainer.appendChild(panel);
        if(i==panelTexts.length-1) loadingElement.classList.add("hidden"); // Hiding loading animation once all images are loaded
      }
    });
  
    // Adding 10 text input fields for the 10 panels
    for (let i = 1; i <= 10; i++) {
      const panelText = document.createElement("textarea");
      panelText.classList.add("panel-input");
      panelText.placeholder = `Panel ${i} Text`;
      comicForm.appendChild(panelText);
    }
  });
  