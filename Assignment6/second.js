let paragraphs = document.querySelectorAll(".paragraph");

for (let paragraph of paragraphs) {
  let closeButton = document.createElement("button");
  closeButton.textContent = "[x]";
  closeButton.className = "remove-button";

  paragraph.appendChild(closeButton);

  closeButton.onclick = () => paragraph.remove();
}
