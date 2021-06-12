// Add active class to the current button (highlight it)
let monthContainer = document.getElementById("scroll");
let month = monthContainer.getElementsByClassName("anchor");
for (let i = 0; i < month.length; i++) {
  month[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("ac");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" ac", "");
  }
  this.className += " ac";
  });
}
