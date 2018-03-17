$("#form-submit-button").on("click", function() {
  $(".contact-form").addClass("none");
  $("#thank-you").removeClass("none");
});

$("#expand-bio").on("click", function() {
  $("#bio-long").removeClass("hide");
  $("#expand-bio").addClass("hide");
});
