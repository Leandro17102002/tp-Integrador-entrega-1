// ==============================
// PRODUCT FORM VALIDATION
// ==============================

// Form
const form = document.getElementById("productForm");

// Inputs
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");
const brandInput = document.getElementById("brand");
const categoryInput = document.getElementById("category");
const shortDescInput = document.getElementById("shortDescription");
const longDescInput = document.getElementById("longDescription");
const shippingInput = document.getElementById("freeShipping");
const ageFromInput = document.getElementById("ageFrom");
const ageToInput = document.getElementById("ageTo");
const imageInput = document.getElementById("image");
const products = [];

// ==============================
// HELPER FUNCTIONS
// ==============================

function isEmpty(value) {
  return value.trim() === "";
}

function isPositiveNumber(value) {
  return !isNaN(value) && Number(value) > 0;
}

function showError(message) {
  // Por ahora solo mostramos en consola
  // Luego lo llevamos al DOM
  console.error(message);
}

// ==============================
// FORM SUBMIT
// ==============================

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let hasErrors = false;

  // ===== VALIDATIONS =====

  // Nombre
  if (isEmpty(nameInput.value)) {
    showError("El nombre es obligatorio");
    hasErrors = true;
  }

  // Precio
  if (!isPositiveNumber(priceInput.value)) {
    showError("El precio debe ser un número mayor a 0");
    hasErrors = true;
  }

  // Stock
  if (!isPositiveNumber(stockInput.value)) {
    showError("El stock debe ser un número mayor a 0");
    hasErrors = true;
  }

  // Marca
  if (isEmpty(brandInput.value)) {
    showError("La marca es obligatoria");
    hasErrors = true;
  }

  // Categoría
  if (isEmpty(categoryInput.value)) {
    showError("Debe seleccionar una categoría");
    hasErrors = true;
  }

  // Descripción corta
  if (isEmpty(shortDescInput.value)) {
    showError("La descripción corta es obligatoria");
    hasErrors = true;
  }

  // Descripción larga
  if (isEmpty(longDescInput.value)) {
    showError("La descripción larga es obligatoria");
    hasErrors = true;
  }

  // Edad
  if (!isPositiveNumber(ageFromInput.value)) {
    showError("Edad desde inválida");
    hasErrors = true;
  }

  if (!isPositiveNumber(ageToInput.value)) {
    showError("Edad hasta inválida");
    hasErrors = true;
  }

  if (
    isPositiveNumber(ageFromInput.value) &&
    isPositiveNumber(ageToInput.value) &&
    Number(ageFromInput.value) > Number(ageToInput.value)
  ) {
    showError("Edad desde no puede ser mayor que edad hasta");
    hasErrors = true;
  }

  // Imagen
  const file = imageInput.files[0];
  if (!file) {
    showError("Debe seleccionar una imagen");
    hasErrors = true;
  }

  // ===== FINAL CHECK =====

  if (hasErrors) {
    console.log("Formulario con errores");
    return;
  }

  // ===== PRODUCT OBJECT =====

  const product = {
    name: nameInput.value.trim(),
    price: Number(priceInput.value),
    stock: Number(stockInput.value),
    brand: brandInput.value.trim(),
    category: categoryInput.value,
    shortDescription: shortDescInput.value.trim(),
    longDescription: longDescInput.value.trim(),
    freeShipping: shippingInput.checked,
    ageFrom: Number(ageFromInput.value),
    ageTo: Number(ageToInput.value),
    image: file.name
  };

  products.push(product);

  console.log("Producto creado:", product);
  console.log("Listado de productos:", products);


  form.reset();
});
