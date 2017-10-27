

var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var twitchAPI = 'https://api.twitch.tv/helix/streams?user_login='
function status() {
    users.forEach(function (user){
      var http = twitchAPI + user;
  $.ajax ({
    dataType: "json",
    type: "GET",
    url: http,
    headers: {
      "Client-ID" : "zywl8n6s0wseic8hod3sl978zf38uy"
    },
  })//ajax call closed
  .done(function (data) {
    console.log(data);
    if (data['data'].length !== 0 ) {
      var content = data['data'][0];
      $('#'+user).append(content.type + ' - ').append(content.viewer_count + ' viewers<br>').append('<a href="https://go.twitch.tv/'+ user +'" target="_blank">' + content.title + '</a>')
    } else {
      $('#'+user).append('<a href="https://go.twitch.tv/'+ user + '"target="_blank"> offline').addClass('notStreaming');
    }
    });
  });
};

status ();

$('#allStream').click(function (){
  $('#allStream').addClass('selected');
  $('.stream').fadeIn();
  $('#streaming').removeClass('selected');
});//end allstream filter

$('#streaming').click(function (){
  $('#streaming').addClass('selected');
  $('.notStreaming').fadeOut();
  $('#allStream').removeClass('selected');
});//end not-Streaming filter
