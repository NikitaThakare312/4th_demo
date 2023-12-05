document.addEventListener("DOMContentLoaded", function () {
    // Change the background color of the 2nd item
    var secondItem = document.querySelectorAll("#items li")[1];
    secondItem.style.backgroundColor = "green";
  
    // Make the 3rd item invisible
    var thirdItem = document.querySelectorAll("#items li")[2];
    thirdItem.style.display = "none";
  
    // Change font color to green for the 2nd item using querySelectorAll
    var secondItemQuerySelectorAll = document.querySelectorAll("#items li:nth-child(2)");
    secondItemQuerySelectorAll.forEach(function (item) {
      item.style.color = "green";
    });
  
    // Choose all odd elements and make their background green using querySelectorAll
    var oddItems = document.querySelectorAll("#items li:nth-child(odd)");
    oddItems.forEach(function (item) {
      item.style.backgroundColor = "green";
    });
  });
  