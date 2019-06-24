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

        // create input element and attach to div
        $('<input>')
            .attr({
                type: `text`,
                value: `${item}`,
                id: `itemid-${index}`,
                class: `form-control`,
            })
            .appendTo(`#itemdiv-${index}`);

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
            .appendTo(`#itemdiv-${index}`);

        // create button element and attach to div
        $('<button>Delete</button>')
            .attr({
                style: `margin-left: 5px;`,
                class: `btn btn-primary btn-sm`,
                id: `delete`,
                type: `button`,
                onclick: `removeFromList(${index})`
            })
            .appendTo(`#itemdiv-${index}`);

    });
}

const editFromList = (idx) => {
    const input = $(`#itemid-${idx}`).val();

    if(!input) {
        return;
    }

    task_list[idx] = input;
    refreshList();
}

const addToList = () =>  {
    const input = $("#todoInput").val();

    if(!input) {
        return;
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