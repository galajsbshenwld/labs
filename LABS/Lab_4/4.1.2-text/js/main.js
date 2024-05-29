function initText() {
    document.getElementById("main-text").classList = "text-area non-editable-text";
}

function clearText() {
    document.getElementById("main-text").style.display = "none";
}

function editText() {
    document.getElementById("main-text").style.display = "block";
    document.getElementById("main-text").classList = "text-area editable-text";
}
