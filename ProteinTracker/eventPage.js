chrome.storage.onChanged.addListener(function(changes){
	console.log("changes",changes);
	//show badge
	chrome.browserAction.setBadgeText({'text' : changes.total.newValue.toString()});
});
