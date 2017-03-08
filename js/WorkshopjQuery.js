$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  /*$('.view').click(function (){
    $('#modal1').modal('open'); 
    alert('edskjcxnm');
  });*/
  /*$('.view').leanModal();*/
  $('.parallax').parallax();
  
 
var btop=50;
var bleft=200;
var dist=50;
var dist2=90;
var den=4;
var width=$( window ).width();
console.log(width);
if( width < 500)
	{
		dist=50;
		dist2=90;
		den=4;
		btop=5;
		bleft=40;

	}
	else
	{
		dist=100;
		dist2=180;
		den=4;
		btop=50;
		bleft=200;
	}

$("#back").animate({ top: btop+'px' });
$("#back").animate({ left: bleft+'px' });


$('#menu_icon').WCircleMenu({

width: dist+'px',
height: dist+'px',
angle_start : 0,
delay: 80,
distance: dist2,
angle_interval: Math.PI/den,
easingFuncShow:"easeOutBack",
easingFuncHide:"easeInBack",
step:15,
openCallback:false,
closeCallback:false,
itemRotation:360,
iconRotation:360,
});
$('.modal').modal();
 

 
});  