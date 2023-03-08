$(document).ready(function () {
    $('#rectangle').click(function () {
        $('#object').animate({ left: "500px" });
        $('#object').animate({ top: "500px" });
        $('#object').animate({ left: "0px" });
        $('#object').animate({ top: "0px" });
    });

    $('#triangle').click(function () {
        $('#object').animate({ left: "-300px", top: "300px" });
        $('#object').animate({ left: "200px" });
        $('#object').animate({ top: "0", left: "0" });

    });

    var isToggled = false;

    $('#toggle').click(function () {
        if (!isToggled) {
            $('#object').animate({ height: "400px", width: "400px", opacity: "0.1", left: "300px" });
            isToggled = true;
        } else {
            $('#object').animate({ height: "100px", width: "100px", opacity: "1", left: "0px" });
            isToggled = false;

        }



    });
});