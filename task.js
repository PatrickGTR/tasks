const task_list = [];

const refreshList = () => {
    $("#todolists").html(""); // clear and ready for appending.
    task_list.forEach( (item, index, array) => {
        $("#todolists")
        .append(
        `
        <div class="input-group">
            <input
                class="form-control"
                type="text" value="${item}"
                id="itemid-${index}"/>

            <button
                style="margin-left: 5px;"
                class="btn btn-primary btn-sm"
                id="edit"
                type="button"
                onclick="editFromList(${index})">Edit</button>

            <button
                style="margin-left: 5px;"
                class="btn btn-primary btn-sm"
                id="delete"
                type="button"
                onClick="removeFromList(${index})">Delete</button>
        </div>
        <br/>
        `);
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