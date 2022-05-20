const ulist = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const value = input.value;
    input.value = "";

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newButton = document.createElement("button");

    newLi.appendChild(newSpan);
    newSpan.textContent = value;
    
    newLi.appendChild(newButton);
    newButton.textContent = "❌";

    ulist.appendChild(newLi);

    newButton.addEventListener('click', () => {
        ulist.removeChild(newLi);
    });


    input.focus();
});