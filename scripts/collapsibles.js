document.querySelectorAll(".collapsible").forEach(button => {
  // Ensure each collapsible starts with a "+"
  button.setAttribute("data-icon", "+");

  button.addEventListener("click", function () {
    let content = this.nextElementSibling;
    let allContents = document.querySelectorAll(".content");
    let allButtons = document.querySelectorAll(".collapsible");

    // Close all other collapsibles
    allContents.forEach((item, index) => {
      if (item !== content) {
        item.classList.remove("expanded");
        item.style.maxHeight = null;
        allButtons[index].setAttribute("data-icon", "+"); // Reset other icons
      }
    });

    // Toggle the clicked collapsible
    if (content.classList.contains("expanded")) {
      content.classList.remove("expanded");
      content.style.maxHeight = null;
      this.setAttribute("data-icon", "+");
    } else {
      content.classList.add("expanded");
      content.style.maxHeight = content.scrollHeight + "px";
      this.setAttribute("data-icon", "−");
    }
  });
});
