$(function(){
	$('#name').keyup(function(){
       $('#greeting').text('HI ' + $('#name').val()  + '!');
	});
});