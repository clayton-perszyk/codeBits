document.addEventListener("DOMContentLoaded", function() {
  var table = document.getElementById("table");

  table.addEventListener("click", function(e){
    var node = e.target;

    if (node.nodeName === "BUTTON") {
      if (node.id === "delete") {
         node.parentNode.parentNode.remove();
      } else if (node.id === "add") {
        let lastRow = document.getElementById("last-row");
        let name = document.getElementById("name");
        let address = document.getElementById("address");
        let phone = document.getElementById("phone");
        let newEntry = (`<tr>
                          <td>${name.value}</td>
                          <td>${address.value}</td>
                          <td>${phone.value}</td>
                          <td><button id="delete">Delete</button></td>
                         </tr>`);

        lastRow.insertAdjacentHTML("beforebegin", newEntry);

        name.value = '';
        address.value = '';
        phone.value = '';
      }
    }
  });
});
