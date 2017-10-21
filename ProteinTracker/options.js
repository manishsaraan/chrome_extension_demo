$(function(){
	//showing total amount on load
	chrome.storage.sync.get('goal',function(items){
		$("#goal").val(parseInt(items.goal));
	});	

	//saving the goal
	$("#save").click(function(){
		var goal = $("#goal").val();
		if(goal){
			//save goal in storage
			chrome.storage.sync.set({goal:goal}, function(){
				//close tab
				close();
			});
		}
	});

	//reset
	$("#reset").click(function(){

		//save total to storage
		chrome.storage.sync.set({total : 0},function(){
			var opt = {
				type: 'basic',
				title : 'total reset!',
				message : 'total has been reset back to 0',
				iconUrl : 'icon.png'
			};

			//create notification
			chrome.notifications.create('reset',opt,function(){ });
		});
		
	});
});