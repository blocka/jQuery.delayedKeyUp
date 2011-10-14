(function($) {
	        $.fn.delayedKeyUp = function(action) {
	            $(this).each(function() {
                     $(this).keyup(function(e){
                        var el = this;
                        if ($(el).data('inputTimeout')) {
                            clearTimeout($(el).data('inputTimeout'));
                        }
                        
                        $(el).data('inputTimeout', setTimeout(function() {
                            $(el).trigger('delayedKeyUp',[$(el).val(),e]);    
                        }, 500));
                    });
	            });
	            

	            return this;
	        };
	    })(jQuery);
