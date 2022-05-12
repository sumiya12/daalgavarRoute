export async function getAllDogs() {
  return await fetch("https://dog.ceo/api/breeds/list/all");
}
export async function getImage() {
  return await fetch("https://dog.ceo/api/breeds/image/random");
}

//   .then((response) => response.json())
//   .then((data) => generateHtml(data.message))
