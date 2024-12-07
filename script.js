let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// Add event listeners for dragstart to all items in the 'list' class
for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
       let selected = e.target;
  
// Add dragover and drop event listeners to the rightBox
rightBox.addEventListener("dragover", function (e) {
    e.preventDefault(); 
});

rightBox.addEventListener("drop", function (e) {
    rightBox.appendChild(selected);
    selected = null;
})
leftBox.addEventListener("dragover", function (e) {
    e.preventDefault(); 
});

leftBox.addEventListener("drop", function (e) {
    leftBox.appendChild(selected);
    selected = null;
})
    });
}