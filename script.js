const ingredientInput = document.getElementById("ingredient-input");
const addIngredientButton = document.getElementById("add-ingredient-button");
const ingredientList = document.getElementById("ingredient-list");

addIngredientButton.addEventListener("click", function(event) {
  event.preventDefault();

  const ingredient = ingredientInput.value;
  if (!ingredient) return;

  const li = document.createElement("li");
  li.textContent = ingredient;
  ingredientList.appendChild(li);

  ingredientInput.value = "";
});
