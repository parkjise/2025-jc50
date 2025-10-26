const bars = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".fa-xmark");

bars.addEventListener("click", () => {
	sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
	sideBar.classList.remove("show-sidebar");
});
