$(document).ready(function() {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  //   click event on toggle menu
  $toggleCollapse.click(function(e) {
    e.preventDefault();
    $nav.toggleClass("collapse");
  });

  // owl carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      560: {
        items: 2
      },
      960: {
        items: 3
      }
    }
    // navText:[$('.owl-navigation .owl-nav-prev' ),$('.owl-navigation .owl-nav-next')],
  });

  // click to scroll top
  $(".move-up span").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  // AOS instance
  AOS.init();
});

// validating form using vanilla js
const errorList = document.getElementById("errors");
const errors = [];
function validateForm() {
  const isValid = true;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;

  // checking for empty values
  if (!name) {
    errors.push("Name can not be blank");
    isValid = false;
  }
  if (!email) {
    errors.push("Email can not be blank");
    isValid = false;
  }
  if (!subject) {
    errors.push("Subject can not be blank");
    isValid = false;
  }
  if (isValid==false) {
    displayErrors();
  }
  return isValid;
}

// displaying the errors list in the form of unordered list
function displayErrors() {
  errors.forEach(element => {
    const errorListItem = document.createElement("li");
    const errorListItemText = document.createTextNode(element);
    errorListItem.appendChild(errorListItemText);
    errorList.appendChild(errorListItem);
  });
}
