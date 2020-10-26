$(function () {

	$.fn.tooltip = function () {

		this.hover(function () {
			
			var texto = $(this).find('desc').text();

			$('body').append("<span id='titleTooltip'>" + texto + "</span>");
			$('#titleTooltip').fadeIn(555);
			
		}, function () {
			$('#titleTooltip').remove();
	
		}).mousemove(function (e) {
			
			var mousex = e.pageX -5;
			var mousey = e.pageY + 25;

			$('#titleTooltip').css({top: mousey, left: mousex});
		});

	};
	
	$('svg a').tooltip();
});