/****************  nav_bar   ******************/
$(document).ready(function(){
  $(".bi").click(function(){
    $(".bi").addClass("active");
    $(".line1").addClass("line_active");
    $("#content_bi").addClass("active");
    $("#no_all").addClass("active");
    $(".line2,.line3,.line4").removeClass("line_active");
    $(".mo,.zhi,.yan").removeClass("active");
    $("#content_mo,#content_zhi,#content_yan").removeClass("active");
    $("#no_send,#no_shou").removeClass("active");
  });
});
$(document).ready(function(){
  $(".mo").click(function(){
    $(".mo").addClass("active");
    $(".line2").addClass("line_active");
    $("#content_mo").addClass("active");
    $("#no_send").addClass("active");
    $(".line1,.line3,.line4").removeClass("line_active");
    $(".bi,.zhi,.yan").removeClass("active");
    $("#content_bi,#content_zhi,#content_yan").removeClass("active");
    $("#no_all,#no_shou").removeClass("active");
  });
});
$(document).ready(function(){
  $(".zhi").click(function(){
    $(".zhi").addClass("active");
    $(".line3").addClass("line_active");
    $("#content_zhi").addClass("active");
    $("#no_shou").addClass("active");
    $(".line2,.line1,.line4").removeClass("line_active");
    $(".mo,.bi,.yan").removeClass("active");
    $("#content_mo,#content_bi,#content_yan").removeClass("active");
    $("#no_send,#no_all").removeClass("active");
  });
});
$(document).ready(function(){
  $(".yan").click(function(){
    $(".yan").addClass("active");
    $(".line4").addClass("line_active");
    $("#content_yan").addClass("active");
    $(".line2,.line3,.line1").removeClass("line_active");
    $(".mo,.zhi,.bi").removeClass("active");
    $("#content_mo,#content_zhi,#content_bi").removeClass("active");
  });
});


/****************  nav_bottom   ******************/
$(document).ready(function(){
  $(".home").click(function(){
    $(".home").addClass("active");
    $(".car,.order").removeClass("active");
  });
});
$(document).ready(function(){
  $(".car").click(function(){
    $(".car").addClass("active");
    $(".home,.order").removeClass("active");
  });
});
$(document).ready(function(){
  $(".order").click(function(){
    $(".order").addClass("active");
    $(".car,.home").removeClass("active");
  });
});



