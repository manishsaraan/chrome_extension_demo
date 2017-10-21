$(function(){
	//showing total amount on load
	chrome.storage.sync.get(['total','goal'],function(items){
		$("#total").text(parseInt(items.total));
		$("#goal").text(parseInt(items.goal));

	});
	$("#addAmount").click(function(){

		//get data from chrome storage
		chrome.storage.sync.get(['total','goal'],function(items){
			var newTotal = 0;
			if(items.total){
				newTotal += parseInt(items.total);
			}

	      var amount = $("#amount").val();
	      if(amount){
	      	  newTotal += parseInt(amount);
	      }

	      //save data into storage
	      chrome.storage.sync.set({'total' : newTotal});
	      $("#total").text(newTotal);
	      $("#amount").val('');

	      //goal achieved notification
	      if(newTotal >= items.goal){
            var opt = {
				type: 'basic',
				title : 'Goal Achieved.',
				message : 'You achieved your goal of ' + items.goal + '!',
				iconUrl : 'icon.png'
		 	};

			//create notification
			chrome.notifications.create('goalReached',opt,function(){ });
	      }
		});
	});
});