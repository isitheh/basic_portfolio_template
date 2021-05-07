function BackToTopButton(btnElement, navElement, smoothScroll) {
	var SCROLL_THRESHOLD = 100;
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {
		navElement.classList.toggle("scrolled", (document.body.scrollTop > SCROLL_THRESHOLD || document.documentElement.scrollTop > SCROLL_THRESHOLD));
		if (document.body.scrollTop > SCROLL_THRESHOLD || document.documentElement.scrollTop > SCROLL_THRESHOLD) {
	        btnElement.style.display = "block";
	    } else {
	        btnElement.style.display = "none";
	    }
	};
	
	if (smoothScroll === false) {
		btnElement.onclick = function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}
}
