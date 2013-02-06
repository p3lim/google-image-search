var url = 'http://www.google.com/searchbyimage?image_url=';

chrome.contextMenus.create({
	'title': 'Search Google using this image',
	'contexts': ['image'],
	'id': 'contextMenu',
	'onclick': function(info, tab){
		var src = info.srcUrl;
		if(src.indexOf('data:') != 0){
			chrome.tabs.create({
				'url': url + encodeURIComponent(src),
				'index': tab.index + 1,
			});	
		}
	}
});
