$(document).ready(function() {

$("time.timeago").timeago();

$(".tweet-actions").hide();
$(".stats").hide();
$(".reply").hide();

  $('#tweet-controls').hide();

  $('.tweet-compose').on('click', function(){
      $(this).height(42);
      $('#tweet-controls').show();

  });

$('#tweet-content .tweet-compose').keyup("change",function(){
  var count = $(this).val().length;
  $("#char-count").html(140-count);
  if(count >= 130){
    $("#char-count").css("color","red")
  };
  if(count < 130){
    $("#char-count").removeAttr("style")
  };
  console.log(count)
  if(count > 140 ) {
    console.log('block')
    $("#tweet-submit").prop("disabled", true);
  };
  if(count < 141) {
    $("#tweet-submit").prop("disabled", false);
  };

});
// new tweets below
$("#tweet-submit").click(function(){
 var message = $('#tweet-content .tweet-compose').val();
 var avatar = $('#profile-summary .avatar').attr('src');
 var name = $('#profile-summary .content').find('p').html();
 var newDate = $.timeago(new Date());
 console.log(newDate);
 console.log(avatar);
 $("#stream").prepend(
   `<div class="tweet">
     <div class="content">
       <img class="avatar" src="` + avatar + `"/>
       <strong class="fullname">` + name + `</strong>
       <span class="username"> @`+ name + `</span>

       <p class="tweet-text">` + message + `</p>

       <div class="tweet-actions">
         <ul>
           <li><span class="icon action-reply"></span> Reply</li>
           <li><span class="icon action-retweet"></span> Retweet</li>
           <li><span class="icon action-favorite"></span> Favorite</li>
           <li><span class="icon action-more"></span> More</li>
         </ul>
       </div>

       <div class="stats">
         <div class="retweets">
           <p class="num-retweets">0</p>
           <p>RETWEETS</p>
         </div>
         <div class="favorites">
           <p class="num-favorites">0</p>
           <p>FAVORITES</p>
         </div>
         <div class="users-interact">
           <div>

             <img src="img/alagoon.jpg" />
             <img src="img/vklimenko.jpg" />
           </div>
         </div>


         <div class="time">
          `+ newDate +`
         </div>
       </div>
       <div class="reply">
         <img class="avatar" src="img/alagoon.jpg" />
         <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
       </div>
     </div>
   </div>`);
$(".tweet-actions").hide();

$(".tweet").mouseenter(function(){
  $(this).find(".tweet-actions").show();
});

$(".tweet").mouseleave(function(){
  $(this).find(".tweet-actions").hide();
});

$(".stats").hide();
$(".reply").hide();

$(".tweet").click(function(){
  $(this).find(".stats").animate({height:"show"});
  $(this).find(".reply").animate({height:"show"});
});

$(".action-favorite").parent().click(function(){
  var favCount = $(this).closest(".content").find(".num-favorites").text();
  favCount = parseInt(favCount);
  favCount = favCount + 1;
  $(this).closest(".content").find(".num-favorites").html(favCount);
  console.log(favCount);
});

$(".action-retweet").parent().click(function(){
  var favCount = $(this).closest(".content").find(".num-retweets").text();
  favCount = parseInt(favCount);
  favCount = favCount + 1;
  $(this).closest(".content").find(".num-retweets").html(favCount);
});


$("time.timeago").timeago();



});

// New tweets Above


$(".tweet").click(function(){
  $(this).find(".stats").animate({height:"show"});
  $(this).find(".reply").animate({height:"show"});
});


 $(".tweet").mouseenter(function(){
   $(this).find(".tweet-actions").show();
 });

 $(".tweet").mouseleave(function(){
   $(this).find(".tweet-actions").hide();
 });

 // var favCount = 0;

$(".action-favorite").parent().click(function(){
  var favCount = $(this).closest(".content").find(".num-favorites").text();
  favCount = parseInt(favCount);
  favCount = favCount + 1;
  $(this).closest(".content").find(".num-favorites").html(favCount);
});

// retweet

$(".action-retweet").parent().click(function(){
  var favCount = $(this).closest(".content").find(".num-retweets").text();
  favCount = parseInt(favCount);
  favCount = favCount + 1;
  $(this).closest(".content").find(".num-retweets").html(favCount);

   var message = $(".tweet-text").html();
   var avatar = $('#profile-summary .avatar').attr('src');
   var name = $('#profile-summary .content').find('p').html();
   var newDate = $.timeago(new Date());
   console.log(newDate);
   console.log(avatar);
   $("#stream").prepend(
     `<div class="tweet">
       <div class="content">
         <img class="avatar" src="` + avatar + `"/>
         <strong class="fullname">` + name + `</strong>
         <span class="username"> @`+ name + `</span>

         <p class="tweet-text">` + message + `</p>

         <div class="tweet-actions">
           <ul>
             <li><span class="icon action-reply"></span> Reply</li>
             <li><span class="icon action-retweet"></span> Retweet</li>
             <li><span class="icon action-favorite"></span> Favorite</li>
             <li><span class="icon action-more"></span> More</li>
           </ul>
         </div>

         <div class="stats">
           <div class="retweets">
             <p class="num-retweets">0</p>
             <p>RETWEETS</p>
           </div>
           <div class="favorites">
             <p class="num-favorites">0</p>
             <p>FAVORITES</p>
           </div>
           <div class="users-interact">
             <div>

               <img src="img/alagoon.jpg" />
               <img src="img/vklimenko.jpg" />
             </div>
           </div>


           <div class="time">
            `+ newDate +`
           </div>
         </div>
         <div class="reply">
           <img class="avatar" src="img/alagoon.jpg" />
           <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
         </div>
       </div>
     </div>`);
  $(".tweet-actions").hide();

  $(".tweet").mouseenter(function(){
    $(this).find(".tweet-actions").show();
  });

  $(".tweet").mouseleave(function(){
    $(this).find(".tweet-actions").hide();
  });

  $(".stats").hide();
  $(".reply").hide();

  $(".tweet").click(function(){
    $(this).find(".stats").animate({height:"show"});
    $(this).find(".reply").animate({height:"show"});
  });

  $(".action-favorite").parent().click(function(){
    var favCount = $(this).closest(".content").find(".num-favorites").text();
    favCount = parseInt(favCount);
    favCount = favCount + 1;
    $(this).closest(".content").find(".num-favorites").html(favCount);
    console.log(favCount);
  });

  $(".action-retweet").parent().click(function(){
    var favCount = $(this).closest(".content").find(".num-retweets").text();
    favCount = parseInt(favCount);
    favCount = favCount + 1;
    $(this).closest(".content").find(".num-retweets").html(favCount);
  });


  $("time.timeago").timeago();








});

//end retweet


});
