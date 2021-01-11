
//---добавление клаcсов бургеру и меню


$(document).ready(function () {
	$('.menu__icon').click(function () {
		$(".menu__icon, .list").toggleClass('active');
	});
});