const modal = document.getElementById("todo-modal");
const showButton = document.getElementById("open-todo-modal");
const closeButton = document.getElementById("close-todo-modal");

showButton.addEventListener("click", (event) => {
	event.preventDefault();
	modal.showModal();
});

closeButton.addEventListener("click", (event) => {
	event.preventDefault();
	modal.close();
});
