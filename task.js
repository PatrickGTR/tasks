$(document).on("click", "#btndelete", function() {
    task.remove($(this));
});

$(document).on("click", "#btnadd", () => task.add($("#todoInput").val()));

class task {
    static add(input) {
        if(!input) {
            return sendErrorMsg("Task cannot be empty.");
        }

        // clear input field
        $("#todoInput").val("");

        $(`<li>${input}<button class="btn-delete" id="btndelete">X</button></li>`)
            .attr({
                "style": "margin-bottom: 10px;",
                "class": "form-control"
            })
            .appendTo("#todolists");
    }
    static remove(element) {
        element.parent().remove();
    }
}

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