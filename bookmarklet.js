(function(){
	var repeaty;
	var init = function(){
		jQuery.getScript('https://raw.github.com/skimberk1/cloudprintboomarklet/master/bookmarklet-run.js');
	};
	var s=document.createElement('script');
	s.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js');
	if(typeof jQuery == 'undefined'){
		document.getElementsByTagName('head')[0].appendChild(s);
		repeaty = setInterval(function(){
			if(typeof jQuery != 'undefined'){
				clearInterval(repeaty);
				init();
			}
		}, 100);
	}
	else{
		init();
	}
})();