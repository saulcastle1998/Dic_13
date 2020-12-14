/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


/* Open the sidenav */
function openNav(proyecto) {
    var proyecto = proyecto;
    console.log(proyecto);
  document.getElementById("mySidenav").style.display = "block";
   $(".closebtn").css("display", "block");

  if (proyecto === "p1") {
  $("#p1").css("display", "block");
  $("#p2").css("display", "none");
  $("#p3").css("display", "none");
  $("#p4").css("display", "none");
  $("#p5").css("display", "none");
  $("#p6").css("display", "none");
  }else if (proyecto === "p2") {
  $("#p1").css("display", "none");
  $("#p2").css("display", "block");
  $("#p3").css("display", "none");
  $("#p4").css("display", "none");
  $("#p5").css("display", "none");
  $("#p6").css("display", "none");
  }else if (proyecto === "p3") {
  $("#p1").css("display", "none");
  $("#p2").css("display", "none");
  $("#p3").css("display", "block");
  $("#p4").css("display", "none");
  $("#p5").css("display", "none");
  $("#p6").css("display", "none");
  }else if (proyecto === "p4") {
  $("#p1").css("display", "none");
  $("#p2").css("display", "none");
  $("#p3").css("display", "none");
  $("#p4").css("display", "block");
  $("#p5").css("display", "none");
  $("#p6").css("display", "none");
  }else if (proyecto === "p5") {
  $("#p1").css("display", "none");
  $("#p2").css("display", "none");
  $("#p3").css("display", "none");
  $("#p4").css("display", "none");
  $("#p5").css("display", "block");
  $("#p6").css("display", "none");
  }else if (proyecto === "p6") {
  $("#p1").css("display", "none");
  $("#p2").css("display", "none");
  $("#p3").css("display", "none");
  $("#p4").css("display", "none");
  $("#p5").css("display", "none");
  $("#p6").css("display", "block");
  }

  
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
    $(".closebtn").css("display", "none");
}
