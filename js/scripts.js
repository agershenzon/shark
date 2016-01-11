jQuery(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
});

$(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

$("#clickme").click(function() {
    $("#whale").fadeIn("slow");
    $("#whale").slideDown("slow").toggle();
  });
});
