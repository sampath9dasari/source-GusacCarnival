$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  /*$('.view').click(function (){
    $('#modal1').modal('open'); 
    alert('edskjcxnm');
  });*/
  /*$('.view').leanModal();*/


$('#menu_icon').WCircleMenu({
width: '100px',
height: '100px',
angle_start : 0,
delay: 80,
distance: 180,
angle_interval: Math.PI/8,
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