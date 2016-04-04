var url = 'https://www.google.com/searchbyimage?image_url=';

chrome.contextMenus.onClicked.addListener(function(info, tab){
	chrome.tabs.create({
		url: url + encodeURIComponent(info.srcUrl),
		index: tab.index + 1
	})
});

var onInitialize = function(){
	chrome.contextMenus.create({
		title: 'Search Google using this image',
		contexts: ['image'],
		targetUrlPatterns: ['https://*/*', 'http://*/*'],
		id: 'contextMenu'
	});
};

chrome.runtime.onStartup.addListener(onInitialize);
chrome.runtime.onInstalled.addListener(onInitialize);
