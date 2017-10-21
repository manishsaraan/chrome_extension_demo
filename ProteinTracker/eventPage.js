var menuItems = {
	"id":"addProtein",
	"title" : "Add Protein",
	"contexts" : ["selection"]
};

//create context menu
chrome.contextMenus.create(menuItems);

//handle context menu click event
chrome.contextMenus.onClicked.addListener(function(clickData){

	//validate click
    if(clickData.menuItemId === "addProtein" && clickData.selectionText){
        var text = clickData.selectionText;
    	//validate number
    	var isnum = /^\d+$/.test(text);    	    	
    	if(isnum){
    		//get current total
	         chrome.storage.sync.get('total',function(items){
				var newTotal = 0;
				if(items.total){
					newTotal += parseInt(items.total);
				}

				newTotal += parseInt(text);
				//update data
				chrome.storage.sync.set({total: newTotal});
			});
    	}
         
    }
});

//check if storage updaged and show badge
chrome.storage.onChanged.addListener(function(changes){	
	//show badge
	chrome.browserAction.setBadgeText({'text' : changes.total.newValue.toString()});
});
