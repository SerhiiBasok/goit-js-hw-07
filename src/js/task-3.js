const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const trimmedValue = nameInput.value.trim(); // Видалення пробілів з країв введеного тексту

  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous"; // Якщо введено лише пробіли або пустий рядок
  } else {
    nameOutput.textContent = trimmedValue; // Встановлення значення в span#name-output
  }
});
