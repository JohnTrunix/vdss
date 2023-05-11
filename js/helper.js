// Language Selection Feedback
function changeLanguage() {
    var selectBox = document.getElementById("language-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    if (selectedValue != "en") {
        window.alert(
            `Sorry, [ ${selectedValue} ] is currently not implemented. \nWe are working on other language implementations!`
        );
        selectBox.value = "en";
    }
}
