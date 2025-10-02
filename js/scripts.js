function createGrid(size) {
	for (let i = 0; i < size * size; i++) {
		const div = document.createElement("div");
		container.appendChild(div);
	}
}

const container = document.getElementById("container");

let size = 16;
container.style.setProperty('--size', size);
createGrid(size);
const button = document.querySelector("button");
button.addEventListener("click", function() {
	size = Number(prompt("Enter the size of the grid (max 100);"));
	container.innerHTML = "";
	if (size > 100) size = 100;
	if (size > 0) container.style.border = "2px solid black";
	container.style.setProperty('--size', size);
	createGrid(size);
});