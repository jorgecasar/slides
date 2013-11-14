(function(Reveal){
	// Full list of configuration options available here:
	// https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		// Display controls in the bottom right corner
		controls: true,
		// Display a presentation progress bar
		progress: true,
		// Push each slide change to the browser history
		history: true,
		// Enable keyboard shortcuts for navigation
		keyboard: true,
		// Enable touch events for navigation
		touch: true,
		// Enable the slide overview mode
		overview: true,
		// Vertical centering of slides
		center: false,
		// Loop the presentation
		loop: false,
		// Change the presentation direction to be RTL
		rtl: false,
		// Number of milliseconds between automatically proceeding to the
		// next slide, disabled when set to 0, this value can be overwritten
		// by using a data-autoslide attribute on your slides
		autoSlide: 0,
		// Enable slide navigation via mouse wheel
		mouseWheel: false,
		// Transition style
		transition: 'zoom', // default/cube/page/concave/zoom/linear/fade/none
		// Transition speed
		transitionSpeed: 'default', // default/fast/slow
		// Transition style for full page backgrounds
		backgroundTransition: 'linear', // default/linear/none

		// Optional libraries used to extend on reveal.js
		dependencies: [
			{ src: '../javascripts/jquery.js' },
			{ src: '../javascripts/jquery.wrapChildren/jquery.wrapChildren.min.js', async:true, callback: function(){
				$('h1, .blackberry10ifyTitle').wrapChildren({wrappedClass: 'blackberry10ifiedTitle'});
			} },
			{ src: '../reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: '../reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: '../reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: '../reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			{ src: '../reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
			{ src: '../reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
			// { src: 'socket.io/socket.io.js', async: true, condition: function() { return !!document.body.classList; } },
			// { src: '../reveal.js/plugin/notes-server/client.js', async: true, condition: function() { return !!document.body.classList; } }
			// { src: '../reveal.js/plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } },
			// { src: '../reveal.js/plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
		]
	});
	
})(Reveal);
