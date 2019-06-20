function myFunction() {
  var x = document.querySelector(".tab-panels");
  if (x.style.display === "block") {
    document.querySelector(".tab-box").style.zIndex = 998;
  } else {
    document.querySelector(".tab-box").style.zIndex = 999;
    document.querySelector(".tab-box").style.backgroundColor = "inherit";
    document.querySelector(".main_content").style.display = "block";
  }
}

$(function() {
  $(".popup-modal").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#username",
    modal: true
  });

  $(document).on("click", ".popup-modal-dismiss", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});

$(".card").click(function() {
  $(this).toggleClass("flipped");
});

function modalOpen() {
  var modalVisual = document.querySelectorAll(".block");
  for (var i = 0; i < modalVisual.length; i++)
    modalVisual[i].style.display = "block";
}
function modalClose() {
  var modalHidden = document.querySelectorAll(".block");
  for (var i = 0; i < modalHidden.length; i++)
    modalHidden[i].style.display = "none";
}
