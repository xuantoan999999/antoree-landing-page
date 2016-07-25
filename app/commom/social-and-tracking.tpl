<!-- bzs:facebook -->
<!-- Facebook -->
<div id="fb-root"></div>
<!-- end:bzs:facebook -->
<!-- bzs:ga -->
<!-- GA Tracking Code -->
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	for (var i = 0; i < settingJs.google.gaIds.length; i++) {
		ga('create', settingJs.google.gaIds[i], 'auto', {'name': 'gaId'+i});
		ga('gaId'+i+'.send', 'pageview');
	};
	setTimeout(function(){
		for (var i = 0; i < settingJs.google.gaIds.length; i++) {
			ga('gaId'+i+'.send','event','Profitable Engagement','Time On Page');
		};
	}, 5000);
</script>
<!-- end:bzs:ga -->