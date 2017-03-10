
$(document).ready(function(){
  //when the document is ready, do a bunch of stuff

  console.log("oh powerful Queen, your document is ready!");

  var fromLeft = 0;

$(window).scroll(function(){
     // when you are scrolling do a buch of stuff



   fromLeft = $(window).scrollLeft();
   //update the variable fromLeft to the current pixels count
   // fromLeft = $(window).scrollLeft();

   console.log("cars going by" + fromLeft );

   if(fromLeft < 4500 ){
     console.log("going backwards, are we?");
//passing cars including my car
     $("#one").css({"left" : 50 + fromLeft *1.1 + "px"});//at 4500 the car is at 4950
     $("#two").css({"left" : 75 + fromLeft * .9 + "px"});
     $("#three").css({"left" : 100 + fromLeft * .99 + "px"});
//passing trees
     $("#t1").css({"left" : 200 + fromLeft * .8 + "px"});
     $("#t2").css({"left" : 400 + fromLeft * .8 + "px"});
     $("#t3").css({"left" : 600 + fromLeft * .8 + "px"});
     $("#t4").css({"left" : 800 + fromLeft * .8 + "px"});
//dark cloud passing
     $("#cloud").css({"left" : -490 +fromLeft *0.12 + "px"});
// person reset
     $("#person").css({"display":"none" });
   }

 if(fromLeft > 4501 && fromLeft < 5000){
     console.log("Person starts flying" + fromLeft + " times more astronomical!");

     $("#person").css({"left" : 200 + fromLeft *1.1 + "px",
                      "top":1200 - fromLeft * 0.08 + "px",
                      "display":"block"
                      });
      $("#cloud").css({"top":100 - fromLeft * 0.01 + "px",
                      "left": 800 + fromLeft *1.1 + "px",
                             "display":"block"
                     });
   }


 if(fromLeft > 5001 && fromLeft < 7500){
    $("#person").css({"left" : 200 + fromLeft *1.1 + "px",
                      "top":1199 - fromLeft * 0.08 + "px",
                      "display":"block"
                      });

   }




   if(fromLeft > 7500 && fromLeft < 8000 ){
     console.log("oh Queen, you have scrolled so far, you must be tired!");
     $("#person").css({
                      "left" : 50 + fromLeft *1.1 + "px",
                      "top":8000 - fromLeft  + "px",
                      "display":"block"
                      });
   }

   if(fromLeft > 8000 ){
     console.log("oh Queen, you have scrolled so far, you must be tired!");
     $("#person").css({
                      "left" : 50 + fromLeft *1.1 + "px",
                      "top":"0",
                      "display":"block"
                      });




   }
       })//close.scroll
   });//close .ready
