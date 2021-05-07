function ClickSmoothScroller(link) {
	this.handleLinkClick = function(e) {
		if (this.linkTarget) {
			this.linkTarget.scrollIntoView({ 
			  behavior: 'smooth' 
			});
		}
	}
	
	this.linkTarget = document.querySelector(link.dataset.target);
	link.addEventListener('click', this.handleLinkClick.bind(this));
}

function KbdSmoothScroller(link) {
	this.keyboardHandler = function(e) {
		if(e.keyCode == 13) {		
	  		document.querySelector(e.target.dataset.target).scrollIntoView({ 
		  		behavior: 'smooth' 
			});
		}
	}

	link.onkeypress = this.keyboardHandler;
}

