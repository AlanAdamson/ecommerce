$(document).ready(function() {
  $('.addBtn').mouseup(function() {
    $(this).hide();
  });
  $('.removeBtn').mouseup(function() {
    $('.addBtn').show();
  });
});
