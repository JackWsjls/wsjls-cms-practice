$(document).ready(function(){
	$('#menuList>ul>li').each(function(index, node){
		$(node).find('ol').css('display', 'none');
		$(node).on('click', function(event){
			$(event.target).find('ol').slideToggle();
			$(event.target).siblings().find('ol').slideUp();
		})
	})
});
