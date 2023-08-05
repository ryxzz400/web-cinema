let documentTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Return Back";
});

window.addEventListener("focus", () => {
    document.title = documentTitle
})

let nav = document.getElementById("navbar");
let notLoadAll = document.querySelectorAll(".notload")
let display = false;
let loading = document.getElementById("loading")
let body = document.getElementById("body")
let e = document.getElementById("navbar-toggler");

window.onload = () => {
	setTimeout(function() {
		for (let i = 0; i < notLoadAll.length; i++) {
			if (typeof notLoadAll[i].attributes["notload-delay"] !== "object") {
				notLoadAll[i].classList.remove("notload")
			} else if (typeof notLoadAll[i].attributes["notload-delay"] == "object") {
				setTimeout(() => {
					notLoadAll[i].classList.remove("notload")
				}, 500)
			}
		}
		loading.classList.add("off")
		setTimeout(function() {
			loading.classList.add("transparent")
			setTimeout(function() {
				loading.style.display = "none"
			}, 1000);
		}, 100);
	}, 1000);
}

function toggleNavbar() {
	if (document.documentElement.clientWidth >= 922) return;

	if (display) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		body.classList.remove("navbaractive")
		display = false;
	} else if (!display) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		body.classList.add("navbaractive")
		display = true;
	}
}