$("#form-submit-button").on("click", function() {
  $(".contact-form").addClass("none");
  $("#contact-form-paragraph").addClass("none");
  $("#thank-you").removeClass("none");
});

$("#expand-bio").on("click", function() {
  $("#bio-long").removeClass("hide");
  $("#expand-bio").addClass("hide");
});

var isInViewport = function(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.bottom >= 25
    // &&
    // bounding.left >= 0 &&
    // bounding.bottom <=
    //   (window.innerHeight || document.documentElement.clientHeight) &&
    // bounding.right <=
    //   (window.innerWidth || document.documentElement.clientWidth)
  );
};
var image = document.querySelector(".project-image");
window.addEventListener(
  "scroll",
  function(event) {
    if (isInViewport(image)) {
      console.log("Working");
      $("#project-image-id").removeClass("hide");
    }
  },
  false
);
