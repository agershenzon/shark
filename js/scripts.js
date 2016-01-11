jQuery(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
});
$("p").click(function() {
    $(".shark-showing").toggle();
    $(".shark-hidden").toggle();
  });
});
