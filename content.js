var text = document.querySelector(".version");

if (text) {
    var select = document.createElement("select");
    select.classList.add("version");

    var options = ["latest", "stable"];
    options.forEach(function (option) {
        var optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

}