function myFunction() {
  document.getElementsByClassName("explanation").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.fa-plus')) {
    var dropdowns = document.getElementsByClassName("explanation_drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}