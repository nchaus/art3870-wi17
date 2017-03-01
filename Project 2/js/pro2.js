
$(document).ready(function(){
  //when the document is ready, do a bunch of stuff

  console.log("oh powerful Queen, your document is ready!");

  var fromLeft = 0;

$(window).scroll(function(){
     // when you are scrolling do a buch of stuff



   fromLeft = $(window).scrollLeft();
   //update the variable fromLeft to the current pixels count
   // fromLeft = $(window).scrollLeft();

   console.log("oh glorious Queen, you are " + fromLeft + " times more astronomical!");

   if(fromLeft >= 4500 ){
     console.log("oh Queen, you have scrolled so far, you must be tired!");

   }else {

     console.log("going backwards, are we?");
//passing cars including my car
     $("#one").css({"left" : 50 + fromLeft *1.1 + "px"});
     $("#two").css({"left" : 75 + fromLeft * .9 + "px"});
     $("#three").css({"left" : 100 + fromLeft * .99 + "px"});
//passing trees
     $("#t1").css({"left" : 200 + fromLeft * .8 + "px"});
     $("#t2").css({"left" : 400 + fromLeft * .8 + "px"});
     $("#t3").css({"left" : 600 + fromLeft * .8 + "px"});
     $("#t4").css({"left" : 800 + fromLeft * .8 + "px"});
   }

   if(fromLeft > 4600 ){
//person flying
     $("#person").css({"left" : 4600 + fromLeft * .6 + "px"});







       })//close .scroll
   });//close .ready
