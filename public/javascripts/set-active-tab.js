 // Set active nav tab
$(function(){
  var url = window.location.pathname;
  url = url.slice(1,url.length);
  console.log(url);
  if (url == "") document.getElementById("home").className = "active"; 
  else document.getElementById(url).className = "active"; 
});
