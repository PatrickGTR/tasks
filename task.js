$(document).on("click", "#btndelete", function() {
    $(this).parent().remove();
});

$(document).on("click", "#btnadd", function() {
    const input = $("#todoInput").val();

    if(!input) {
        return sendErrorMsg("Task cannot be empty.");
    }

    // clear input field
    $("#todoInput").val("");

    $(`<li>${input}<button style="float: right;" class="btn btn-primary btn-sm" id="btndelete">X</button></li>`)
        .attr({
            "style": "margin-bottom: 10px;",
            "class": "form-control"
        })
        .appendTo("#todolists");
});

sendErrorMsg = (err_msg) => {
    $("#error")
        .attr({
            style: "padding-top: 10px;"
        })
        .html(`<button type="button" class="btn btn-danger btn-lg btn-block">${err_msg}</button>`)
        .fadeIn(250)
        .delay(2000)
        .fadeOut(250);
}