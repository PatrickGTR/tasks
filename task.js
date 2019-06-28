const lists = new Set([]);

$(document).on("click", "#btndelete", function() {
    task.remove($(this));
});

$(document).on("dblclick", "#input", function() {
    task.complete($(this));
});

$(document).on("click", "#btnadd", () => task.add($("#todoInput").val()));

class task {
    static add(input) {
        if(!input) {
            return sendErrorMsg("Task cannot be empty.");
        }

        if(lists.has(input)) {
            return sendErrorMsg("Task already exists.");
        }

        // clear input field
        $("#todoInput").val("");

        $(
            `<li><span id="input">${input}</span><button class="btn-delete" id="btndelete">X</button></li>`
        )
            .attr({
                "style": "margin-bottom: 10px;",
                "class": "form-control",
            })
            .appendTo("#todolists");

            lists.add(input);
    }
    static complete(element) {
        const input = element
            .parent()
            .find("span")
            .text()

        element.html(`<s>${input}</s> COMPLETED!`);
    }

    static remove(element) {
        const input = element
            .parent()
            .find("span")
            .text();

        element.parent().remove();
        lists.delete(input);
    }
}

sendErrorMsg = (err_msg) => {
    $("#error")
        .attr({
            style: "padding-top: 10px;"
        })
        .html(
            `<button type="button" class="btn btn-danger btn-lg btn-block">${err_msg}</button>`
        )
        .fadeIn(250)
        .delay(2000)
        .fadeOut(250);
}