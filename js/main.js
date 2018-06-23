$(document).ready(function(){

  var html = "<div class='content'>";
  html += "<h1>Modal heading</h1>";
  html += "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>";
  html += "<h6 class='button'>Click Here</h6>"
  html += "</div>";

  var myplugin = new $.Modal($('body'),{
    openBtn: ".overlayBtn",
    HTMLContent: html,
    animationClass: "simple"
  });
});
