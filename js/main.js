$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  //   click event on toggle menu
  $toggleCollapse.click(function(e) {
    e.preventDefault();
    $nav.toggleClass("collapse");
  });
});
