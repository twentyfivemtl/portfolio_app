//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

$('.container').on('click', function () {
  $('.card').toggleClass('flipped');
});
