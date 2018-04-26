$(document).ready(function(){
	$(".banner_text").fadeIn(2000);
});

$(document).ready(function(){
  $(".zuopin_one").hover(function(){
    $(".zp_cover1").css("display","block");
  },function(){
    $(".zp_cover1").css("display","none");
  });
});
$(document).ready(function(){
  $(".zuopin_two").hover(function(){
    $(".zp_cover2").css("display","block");
  },function(){
    $(".zp_cover2").css("display","none");
  });
});

jQuery(function($) {
    $(document).ready( function() {
        $('.navbar').stickUp({
            parts: {
            0: 'section1',  //这部分就是你锚链接的id
            1: 'section2',
            2: 'section3',
            3: 'section4',
            4: 'section5',
            5: 'section6',
            6: 'section7'   
            },
            itemClass: 'menu_content',
            itemHover: 'active',
            topMargin: 'auto'
        });
    });
});


$(document).ready(function(){
  $(".anniu2").click(function(){
    $(".anniu2").addClass("active");
    $(".anniu1,.anniu3").removeClass("active");
    $(".box2").show(1000);
    $(".box1,.box3").hide(1000);
  });
});
$(document).ready(function(){
  $(".anniu1").click(function(){
    $(".anniu1").addClass("active");
    $(".anniu2,.anniu3").removeClass("active");
    $(".box1").show(1000);
    $(".box2,.box3").hide(1000);
  });
});
$(document).ready(function(){
  $(".anniu3").click(function(){
    $(".anniu3").addClass("active");
    $(".anniu1,.anniu2").removeClass("active");
    $(".box3").show(1000);
    $(".box1,.box2").hide(1000);
  });
});




