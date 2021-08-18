function getUsernames() {
    window.sessionStorage.setItem("p1", $("#name1").val());
    window.sessionStorage.setItem("p2", $("#name2").val());
    window.sessionStorage.setItem("p3", $("#name12").val());
    window.sessionStorage.setItem("p4", $("#name22").val());
}


const setupGame = function() {
    $("#play").on("click", getUsernames);
}

setupGame();