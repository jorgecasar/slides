(function($) {

	$.fn.blackberry10ifyTitle = function(options) {

		var settings = $.extend({}, $.fn.blackberry10ifyTitle.defaults, options ),

		wordSpacePattern  = /(\s*[^ ]+\s*)/g,

		prepareTxt = function(text){
			return text.trim().split(' ');
		},
		createWordWrapper = function(content){
			return ['<', settings.childTag, '>', content, '</', settings.childTag, '>'].join('');
		};

		return this.each(function(){
			var $this = $(this),
			words = prepareTxt($this.text()),
			newText = [], i;

			for (i = 0; i < words.length; i++){
				newText.push(createWordWrapper(words[i]));
			}
			$this.html(newText.join(' ')).addClass('blackberry10ifiedTitle');
		});
	};

	$.fn.blackberry10ifyTitle.defaults = {
		childTag: 'span'
	};
})(jQuery);