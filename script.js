function fillElement(text) {
  const span = document.createElement("span");
  span.textContent = text;
  return span;
}
//przykładowy input:
const result = fillElement("Przykładowy tekst");
console.log(result);
