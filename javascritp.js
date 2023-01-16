window.onscroll = function () {
  myFunction();
};
var navbar = document.getElementById("navbar");
var hero = document.getElementById("hero");
var sticky = 50;
function myFunction() {
  console.log(window.pageYOffset);
  hero.style.transform = "translateY(calc(-1.5 *" + window.pageYOffset + "px))";
  if (window.pageYOffset > 1100) {
    $("#bars").slideDown(1500);
  }
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("opacity-bg");
    navbar.classList.remove("no-bg");
  } else {
    navbar.classList.add("no-bg");
    navbar.classList.remove("opacity-bg");
  }
}
//to hide and show nav when scroll down and up
document.addEventListener("DOMContentLoaded", function () {
  el_autohide = document.querySelector(".autohide");

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector(".navbar").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";

  if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        el_autohide.classList.remove("scrolled-down");
        el_autohide.classList.add("scrolled-up");
      } else {
        el_autohide.classList.remove("scrolled-up");
        el_autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
////hero word
var words = [
    "C & C++",
    "Java includes javaFX and vaadin libraries",
    "Python",
    "Git & Github",
    "SQL & NoSQL",
    "HTML, Css and Java Script",
    "Bootstrap framework and JQuery library",
    "PHP",
    "Photoshop & Adobe Premiere",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

///
//parallax

// $("window").scroll(function () {
//   var offset = $("window").pageYOffset;
//   $("#hero").css("transform", "translateY(calc(-1 *" + offset + "))");
//   console.log(
//     $("#hero").css("transform", "translateY(calc(-1 *" + offset + "))")
//   );
// });
//
