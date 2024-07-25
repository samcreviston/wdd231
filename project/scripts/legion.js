//open dialog form
const dialogue = document.querySelector("#campaign-submission-dialog");

function openDialogue() {
    const button = document.querySelector("#campaign-form-button");
    
    if (button !== null && dialogue !== null) {
      button.addEventListener("click", () => {
        dialogue.showModal();
      });
    }
    else
    {
      console.error(`Error: ${button} or ${dialogue} element not found.`);
    }
}

openDialogue();

//close and submit dialog form

function closeDialogue() {
    const button = document.querySelector("#submit-campaign");
    
    if (button !== null && dialogue !== null) {
        button.addEventListener("click", () => {
          dialogue.close();
        });
      }
      else
      {
        console.error(`Error: ${buttonId} or ${dialogueId} element not found.`);
      }
}


//getDates
const cYearElement = document.getElementById("currentyear"); 
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}