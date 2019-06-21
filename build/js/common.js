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

// Cart js
$(function() {
  var cartItems = $(".cart-item__right .info-block").length,
    toggleItemsBtn = $("#hide-show-info-btn");
  if (cartItems >= 2) {
    $(".cart-item__right .info-block:not(:eq(0))").addClass("disabled-item");
    $(".cart-item__right .info-block.disabled-item:not(:eq(0))").hide();
    toggleItemsBtn.show(300);
  }
  toggleItemsBtn.on("click", function() {
    $(this).toggleClass("clicked");
    if ($(this).hasClass("clicked")) {
      $(".cart-item__right .info-block.disabled-item").removeClass(
        "disabled-item"
      );
    } else {
      $(".cart-item__right .info-block:not(:eq(0))").addClass("disabled-item");
      $(".cart-item__right .info-block.disabled-item:not(:eq(0))").hide();
    }
  });

  $("#cart-upload-file-input").on("change", function() {
    var fileName = $(this)[0].files[0].name;
    $(".upload-file-name").text("");
    $(".upload-file-name").text(fileName);
  });

  $("#cart-downloal-list-js").on("click", function() {
    $(".add-users-list-modal").slideDown();
    if ($(".add-users-list-modal").is(":visible")) {
      $(document).mouseup(function(e) {
        var div = $(".add-users-list-modal");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $(".add-users-list-modal").slideUp();
        }
      });
    }
  });
  $("#cart-user-js").on("click", function() {
    $(".users-list-modal").slideDown();
    if ($(".users-list-modal").is(":visible")) {
      $(document).mouseup(function(e) {
        var div = $(".users-list-modal");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $(".users-list-modal").slideUp();
        }
      });
    }
  });
  var cartRegHeight = $(".cart-reg-modal").height();
  $(".cart-reg-modal").css({"top":"calc(50% - " + cartRegHeight / 2 + "px"});

  $("#cart-reg-btn-js").on("click", function() {
    $(".cart-reg-modal").slideDown();
    if ($(".cart-reg-modal").is(":visible")) {
      $(document).mouseup(function(e) {
        var div = $(".cart-reg-modal");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          $(".cart-reg-modal").slideUp();
        }
      });
    }
  });
});
