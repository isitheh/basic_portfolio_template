var backToTopButton = new BackToTopButton(document.querySelector(".btn-back-to-top", true), document.querySelector(".navbar", true));

var smoothScrollLinks = [].slice.call(document.querySelectorAll(".smooth-scroll"));

var clickSmoothScrollers = smoothScrollLinks.map(function(link) {
   return new ClickSmoothScroller(link);
});

var kbdSmoothScroller = smoothScrollLinks.map(function(link) {
   return new KbdSmoothScroller(link);
});

