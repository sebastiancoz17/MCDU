function showDiv(id) {
    var x = document.getElementsByClassName("cntnt");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(id).style.display = "";  
 }