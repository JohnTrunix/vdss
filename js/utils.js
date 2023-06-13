// ----------------------- Language Selection Feedback -----------------------

// changes the language of the page currently only english is supported
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
