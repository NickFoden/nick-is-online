$("#form-submit-button").on("click", function() {
  $(".contact-form").addClass("none");
  $(".contact-form-paragraph").addClass("none");
  $("#thank-you").removeClass("none");
});

$("#expand-bio").on("click", function() {
  $("#bio-long").removeClass("hide");
  $("#expand-bio").addClass("hide");
});
