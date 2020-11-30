$(document).ready(function(){
	$('#menu-trigger').click(function(){
        if($(window).width() < 1025 ){
            $('#nav-icon').toggleClass('open');
            $('.main-menu').toggle();
        }
    });
    
    $('#search-trigger').click(function(){
        $('#search').toggleClass('active');
    });
});