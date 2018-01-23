$(document).ready(() => {
	$('#menuList>ul>li').each((index, node) => {
		$(node).find('ol').css('display', 'none');
		$(node).on('click', event => {
			$(event.target).find('ol').slideToggle();
			$(event.target).siblings().find('ol').slideUp();
		})
	})
});
