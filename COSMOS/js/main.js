$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});
$(document).ready(function(){
$('.list__item').click(function(){
$('.navigation').removeClass('active');
}
	);




	$('.burger').click(

		function(){
		$('.navigation').toggleClass('active');
		$('.burger').toggleClass('active');
	});

 	    $('.single-item2').slick({
   infinite: true,
      dots: true,
      arrows:false,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight:true,
       adaptiveWidth:true,
         responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
          
      }
    }


  ]
    });

$('.show-map').click(function(){
	$('#modal').removeClass("show-my");
		$('#thanks').removeClass("show-my");
	});
	$(".show-map").click(function(e){
		$('#modal').addClass("show-my");
		$('#applyForm').addClass("course", $(this).attr('id'));
	});
$('#closeModal').click(function(e){
   $('#modal').removeClass("show-my");

 });


$('#closeThanks').click(function(e){
   $('#thanks').removeClass("show-my");
});
		








});








