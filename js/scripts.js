$(document).ready(function() {
  $(".clickable").click(function() {
    $("#trail-showing").toggle();
    $("#trail-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".bridge-clickable").click(function() {
    $("#bridge-showing").toggle();
    $("#bridge-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".coast-clickable").click(function() {
    $("#coast-showing").slideToggle();
    $("#coast-hidden").slideToggle();
  });
});
