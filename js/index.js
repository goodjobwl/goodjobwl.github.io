$(window).scroll(function(evt){
  if($(window).scrollTop()<=0){
    $(".explore_g,.navbar").addClass("at_top");
  }
  else{
    $(".explore_g,.navbar").removeClass("at_top");
  }
});

$(document).on('click','a',function(evt){
  // evt.preventDefault();
  var target= $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top}, 500);
});

$(window).mousemove(function(evt){
  if($(window).width() > 768)
{
    var pagex = evt.pageX;
    var pagey = evt.pageY;

    var x = pagex-$("#section_about").offset().left;
    var y = pagey-$("#section_about").offset().top;

    //cross
    $("#cross").css("left",x+"px");
    $("#cross").css("top",y+"px");
    if(y>=0 && y<$("#section_about").outerHeight()){
      $("#cross").css("opacity","1");
    }
    else{
      $("#cross").css("opacity","0");
    }


    //rabbit
    var rabbitplace = $("#rabbit").offset().left +$("#rabbit").width()/2;
    var rabbittop = $("#rabbit").offset().top;
    if(pagex < rabbitplace-50){
      $("#rabbit").attr("src","https://lh3.google.com/u/1/d/1hcLDaWicWr2bseAOWZhCz5R16FoeHRzE=w1171-h868-iv1");
    }
    else if(pagex > rabbitplace+50){
      $("#rabbit").attr("src","https://lh3.google.com/u/1/d/183H0uj_lYF68rA7hkFzn2ijbMY7zSp_o=w1171-h868-iv1");
    }
    else{
       $("#rabbit").attr("src","https://lh3.google.com/u/1/d/1XMNblmJ1Q0sldn3WSLQeMtyMwuGU5mL3=w1171-h868-iv1");
    }

    if(pagex < rabbitplace-50 && pagey < rabbittop){
      $("#rabbit").attr("src","https://lh3.google.com/u/1/d/1F9GDmX10SEH53pl578j8FZQmowloP-48=w1171-h868-iv1");
    }
    if(pagex > rabbitplace+50 && pagey < rabbittop){
      $("#rabbit").attr("src","https://lh3.google.com/u/1/d/15cMk6t4C86M-_Ew4w4KkV3eUNPMt3CgJ=w1171-h868-iv1");
    }

    //bear
    var bearplace = $("#bear").offset().left +$("#bear").width()/2;
     if(pagex > bearplace-50 && pagex < bearplace+50){
      $("#bear").css("bottom","0px");
    }
    else{
      $("#bear").css("bottom","-30px");
    }

    //text, dot
    $(".title_text").css("transform","translate("+(y/-5)+"px)");
    $(".ct_text").css("transform","translate("+(y/-10)+"px)");
    $("#dot1").css("transform","translate("+(x/-10)+"px)");
    $("#dot2").css("transform","translate("+(x/-12)+"px)");
    $("#dot3").css("transform","translate("+(x/-14)+"px)");
    $("#dot4").css("transform","translate("+(x/-16)+"px)");
  }
  
});