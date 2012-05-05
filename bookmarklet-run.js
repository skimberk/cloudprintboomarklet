(function($){
	if($('#google_cloud_print_hg58hsr').length == 0){
		$.getScript('https://www.google.com/cloudprint/client/cpgadget.js', function(){
			$('body').append('<div id="google_cloud_print_hg58hsr"></div>');
			$('#google_cloud_print_hg58hsr').attr('style', 'position: fixed; top: 100px; left: 50%; margin-left: -50px; padding:20px 40px; text-align:center; vertical-align:middle; z-index: 999999; border:1px solid #fff; background:rgba(0,0,0,0.8); -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px;');
			var addPrintButton = function() {
				var gadget = new cloudprint.Gadget();
				gadget.setPrintButton(cloudprint.Gadget.createDefaultPrintButton("google_cloud_print_hg58hsr"));
				gadget.setPrintDocument("url", document.title, document.URL);
			};

			window.setTimeout(addPrintButton, 200);

			$('#google_cloud_print_hg58hsr').click(function(){
				$('#google_cloud_print_hg58hsr').remove();
			});
		});
		console.log('Print dialog added.');
	}
})(window.jQuery);