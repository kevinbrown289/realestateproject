function myFunction() {
    // Declare variables
    var input, filter, div, h3, i, box;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    div = document.querySelector("box");
    h3 = div.getElementsByTagName("h3");
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < h3.length; i++) {
      div = h3[i].getElementsByTagName("h3")[0];
      if (div.innerHTML.toUpperCase().indexOf(filter) > -1) {
        h3[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }
  