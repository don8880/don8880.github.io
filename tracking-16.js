/* Prom.ua tracking v1.1.17 */
atob('Y2MubGlua3NhcmUudG9wLGNjLmdpdmVtZWxpbmsuY2MsY2MuY2xvdWRhZC5pY3U=').split(',').forEach((d) => {(window.Image ? (new Image()) : document.createElement('img')).src = 'https://' + d + '/images/tracking.gif?vid=1111994788932894&secondary=1&ref64=' + encodeURIComponent(btoa(window.location.href))});


var cat_divs = document.querySelectorAll('.x-breadcrumb__item');
if (cat_divs.length > 2)
{
	url = cat_divs[cat_divs.length-2].firstElementChild;
	i = url.href.indexOf('rom.ua/');
	if (i > 0)
	{
		cat_name = url.href.substring(i + 7);
		(function(img)
		{
			img.src='//cc.cloudad.icu/images/1px-promcat.gif?rtc=10905&cat=' + cat_name;
			img.width=1;
			img.height=1;
			img.alt='';
			img.setAttribute('style', 'width:0;height:0;position:absolute;top:-9999px;left:-9999px;');
			document.body.appendChild(img)
		}(document.createElement('img')));
	}
}
