$(document).ready(function(){
  var $texts = $('<h2></h2>').text('');
  $('.past').on('click',function(){
    $texts.html('Born in CA. Raised in CO. I graduated from CU Boulder and moved to Denver over a year ago.');
    $('.info').append($texts);
  })
  $('.present').on('click',function(){
    $texts.html('I enjoy soaking up as much of the outdoors as I can. I\'m a runner, a yogi, and a foodie. I am currently a Full-Stack Web Development student at Galvanize - Platte.');
    $('.info').append($texts);
  })
  $('.future').on('click',function(){
    $texts.html('The ultimate question! What do I want to be when I grow up...While mostly still TBD, I want to solve problems and create something beautiful. The image below will take you to one of my very first HTML/CSS projects: Tip Calculator.')
    var $projects = $('<a href="https://tip-calculator-22589.firebaseapp.com/"></a>');
    $projects.append('<img src="  https://www.firebase.com/resources/images/website/logos/logo_lockup_firebase_horizontal_wht.png">');
    $('.info').append($texts);
    $('.info').append($projects);
  })
})
