/* Menu zichtbaar maken na click op de burgen button */
function initMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  /* phh menu weer sluiten heeft even geduurd voor ik dit gevonden had */
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
/* functie die de achtergrond wijzigd na click in het menu */ 
function chg_color(bg_color) {
    document.body.style.background = bg_color;
    document.body.style.transition = "background 2s";
}