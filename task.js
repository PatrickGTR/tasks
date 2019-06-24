const task_list = [];



const refreshList = () => {
    $("#todolists").html(""); // clear and ready for appending.

    task_list.forEach( (item, index, array) => {


        // create div element
        $('<div>')
        .attr({
            class: `input-group`,
            id: `itemdiv-${index}`,
            style: `padding-bottom: 10px;`
        })
        .appendTo('#todolists');

        const itemdiv = `#itemdiv-${index}`;
        // create input element and attach to div
        $('<input>')
            .attr({
                type: `text`,
                value: `${item}`,
                id: `itemid-${index}`,
                class: `form-control`,
            })
            .appendTo(itemdiv);

        // create button element and attach to div
        $('<button>Edit</button>')
            .attr({
                style: `margin-left: 5px;`,
                class: `btn btn-primary btn-sm`,
                id: `edit`,
                type: `button`,
                onclick: `editFromList(${index})`,
                value: `Edit`
            })
            .appendTo(itemdiv);

        // create button element and attach to div
        $('<button>Delete</button>')
            .attr({
                style: `margin-left: 5px;`,
                class: `btn btn-primary btn-sm`,
                id: `delete`,
                type: `button`,
                onclick: `removeFromList(${index})`
            })
            .appendTo(itemdiv);

    });
}

const editFromList = (idx) => {
    const input = $(`#itemid-${idx}`).val();

    if(!input) {
        return sendErrorMsg("Edited Task cannot be empty.");
    }

    task_list[idx] = input;
    refreshList();
}

const addToList = () =>  {
    const input = $("#todoInput").val();

    if(!input) {
        return sendErrorMsg("Task cannot be empty.");
    }

    task_list.push(input);

    // clear input field
    $("#todoInput").val("");

    refreshList();
}

const removeFromList = (idx) => {
    task_list.splice(idx, 1);
    refreshList();
}

const sendErrorMsg = (err_msg) => {
    $("#error")
        .attr({
            style: "padding-top: 10px;"
        })
        .html(`<button typegi="button" class="btn btn-danger btn-lg btn-block">${err_msg}</button>`)
        .fadeIn(250)
        .delay(2000)
        .fadeOut(250);
}


