$(document).ready(function () {

    const baseAPI = new BaseAPI();
    baseAPI.getBaseAPI("/api/v1/items/low", populateLowItemsTable);

});

function populateLowItemsTable(records){
    console.debug(arguments.callee.name);
    populateTable(records, buildLowItemsHtmlJson);
}

function buildLowItemsHtmlJson(snapshot) {
    return htmlJson = [
        htmlFactory.htmlBasicPartial("<td>", snapshot["name"], "name"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["sku"], "sku"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["category"], "category"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["quantity"], "quantity"),
        htmlFactory.htmlBasicPartial("<td>", snapshot["expirationDate"], "expirationDate"),
        htmlFactory.htmlBasicPartial("<Button>", "Edit", "btn btn-primary editBtn"),
        htmlFactory.htmlBasicPartial("<Button>", "X", "btn btn-primary deleteBtn")
    ];
}


