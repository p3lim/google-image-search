var url = 'https://www.google.com/searchbyimage?image_url=';

chrome.contextMenus.onClicked.addListener(function(info, tab){
	var src = info.srcUrl;
	if(src.indexOf('data:') != 0){
		chrome.tabs.create({
			url: url + encodeURIComponent(src),
			index: tab.index + 1
		})
	}
});

var onInitialize = function(){
	chrome.contextMenus.create({
		'title': 'Search Google using this image',
		'contexts': ['image'],
		'id': 'contextMenu'
	});
};

chrome.runtime.onStartup.addListener(onInitialize);
chrome.runtime.onInstalled.addListener(onInitialize);
