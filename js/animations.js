$(document).ready(function() {

$(".tweet-actions").hide();

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

$("#tweet-submit").click(function(){
 var message = $('#tweet-content .tweet-compose').val();
 var avatar = $('#profile-summary .avatar').attr('src');
 var name = $('#profile-summary .content').find('p').html();
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
           <p class="num-retweets">30</p>
           <p>RETWEETS</p>
         </div>
         <div class="favorites">
           <p class="num-favorites">6</p>
           <p>FAVORITES</p>
         </div>
         <div class="users-interact">
           <div>

             <img src="img/alagoon.jpg" />
             <img src="img/vklimenko.jpg" />
           </div>
         </div>


         <div class="time">
           1:04 PM - 19 Sep 13
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

});



 $(this).find(".tweet").mouseenter(function(){
   $(this).find(".tweet-actions").show();
 });

 $(this).find(".tweet").mouseleave(function(){
   $(this).find(".tweet-actions").hide();
 });


});
