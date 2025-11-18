const copyCards = document.querySelectorAll(".copy-card");

copyCards.forEach(card => {
  const textarea = card.querySelector(".copy-textarea");
  const button = card.querySelector(".copy-btn");
  const tooltip = card.querySelector(".tooltip");

  button.addEventListener("click", () => {
    const textToCopy = textarea.getAttribute("data-copy"); // copy the exact text
    navigator.clipboard.writeText(textToCopy).then(() => {
      tooltip.classList.add("show");
      setTimeout(() => tooltip.classList.remove("show"), 1500);
    });
  });
});
