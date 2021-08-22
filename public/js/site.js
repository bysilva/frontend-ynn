document.addEventListener('DOMContentLoaded', function () {
  var elements = document.getElementsByClassName("likebtn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener(
      "click",
      function () {
        this.classList.remove("far");
        this.classList.add("fas", "liked");         
        this.parentNode.parentNode.firstChild.classList.add("scale");
      },
      false
    );
  }

  var cards = document.getElementsByClassName('post-content');

  for (var i = 0; i < elements.length; i++) {
    cards[i].addEventListener(
      "dblclick",
      function () {
        this.querySelector('.heartanim').classList.add("scale");
        this.querySelector('.likebtn').classList.add("fas", "liked");
      },
      false
    );
  }
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}