// Random RBG from hover color
function getRandomRGBValues() {
	const r = Math.floor(Math.random() * 250);
	const g = Math.floor(Math.random() * 250);
	const b = Math.floor(Math.random() * 250);
	return (`rgb(${r},${g},${b})`);
}

// Generate the divs and append them to container
function createGrid(size) {
	for (let i = 0; i < size * size; i++) {
		const div = document.createElement("div");
		// Add event listener to change color on hover
		div.addEventListener("mouseover", function() {
			div.style.backgroundColor = getRandomRGBValues();
		})
		container.appendChild(div);
	}
}
const container = document.getElementById("container");
// Create Default grid with 16x16
let size = 16;
container.style.setProperty('--size', size);
createGrid(size);

// Lisen to button to get user input size
const button = document.querySelector("button");
button.addEventListener("click", function() {
	size = Number(prompt("Enter the size of the grid (max 100);"));
	container.innerHTML = "";
	if (size > 100) size = 100;
	if (size > 0) container.style.border = "2px solid black";
	container.style.setProperty('--size', size);
	createGrid(size);
});
