function mobileNavMenu() {
	const hamburgerIcon = document.getElementById("hamburger-icon-large");
	const closeIcon = document.getElementById("close-icon-large");
	const mobileNav = document.getElementById("mobile-nav");
	// const main = document.getElementsByTagName("main").getElementByTagName("main");
	// const footer = document.getElementsByTagName("footer").getElementByTagName("main");

	const main = document.getElementsByTagName("main")[0];
	const footer = document.getElementsByTagName("footer")[0];

	main.style.display = "none";
	footer.style.display = "none";
	hamburgerIcon.style.display = "none";
	closeIcon.style.display = "block";
	mobileNav.style.display = "flex";
}

function closeMobileNavMenu() {
	const hamburgerIcon = document.getElementById("hamburger-icon-large");
	const closeIcon = document.getElementById("close-icon-large");
	const mobileNav = document.getElementById("mobile-nav");
	const main = document.getElementsByTagName("main")[0];
	const footer = document.getElementsByTagName("footer")[0];

	main.style.display = "flex";
	footer.style.display = "block";
	hamburgerIcon.style.display = "block";
	closeIcon.style.display = "none";
	mobileNav.style.display = "none";
}

function mobileNavMenuLearn() {
	const hamburgerIcon = document.getElementById("hamburger-icon-large");
	const closeIcon = document.getElementById("close-icon-large");
	const mobileNav = document.getElementById("mobile-nav-learn");
	// const main = document.getElementsByTagName("main").getElementByTagName("main");
	// const footer = document.getElementsByTagName("footer").getElementByTagName("main");

	const main = document.getElementsByTagName("main")[0];
	const footer = document.getElementsByTagName("footer")[0];

	main.style.display = "none";
	footer.style.display = "none";
	hamburgerIcon.style.display = "none";
	closeIcon.style.display = "block";
	mobileNav.style.display = "flex";
}

function closeMobileNavMenuLearn() {
	const hamburgerIcon = document.getElementById("hamburger-icon-large");
	const closeIcon = document.getElementById("close-icon-large");
	const mobileNav = document.getElementById("mobile-nav-learn");
	const main = document.getElementsByTagName("main")[0];
	const footer = document.getElementsByTagName("footer")[0];

	main.style.display = "flex";
	footer.style.display = "block";
	hamburgerIcon.style.display = "block";
	closeIcon.style.display = "none";
	mobileNav.style.display = "none";
}
