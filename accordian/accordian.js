var tabs = document.getElementsByClassName("tab");
var contents = document.getElementsByClassName("content");

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click",function(event) {
      for (var j = 0; j < contents.length; j++) {
        contents[j].style.display = "none";
      }

      for (var i = 0; i < event.target.childNodes.length; i++) {
        if (event.target.childNodes[i].className === "content") {
          event.target.childNodes[i].style.display = "block";
        }
      }
    });
}
